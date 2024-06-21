import React, { useEffect, useRef } from 'react';
import mqtt from 'mqtt';

const MQTTComponent = ({ onMessage, onPublish }) => {
  const mqttClientRef = useRef(null);

  useEffect(() => {
    if (mqttClientRef.current) return;

    const url = 'wss://broker.emqx.io:8084/mqtt';
    const options = {
      keepalive: 60,
      clientId: 'emqx_react_' + Math.random().toString(16).substring(2, 8),
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
    };

    const mqttClient = mqtt.connect(url, options);
    mqttClientRef.current = mqttClient;

    mqttClient.on('connect', () => {
      console.log('Connected to MQTT broker');
      mqttClient.subscribe('emqx/esp8266/led', { qos: 0 }, (error) => {
        if (error) {
          console.log('Subscribe error:', error);
        }
      });
    });

    mqttClient.on('reconnect', () => {
      console.log('Reconnecting to MQTT broker');
    });

    mqttClient.on('error', (err) => {
      console.error('Connection error:', err);
      mqttClient.end();
    });

    mqttClient.on('message', (topic, message) => {
      const payload = { topic, message: message.toString() };
      console.log('Received message:', payload);
      if (typeof onMessage === 'function') {
        onMessage(payload);
      }
    });

    mqttClient.on('close', () => {
      console.log('Disconnected from MQTT broker');
    });

    return () => {
      mqttClient.end();
      mqttClientRef.current = null;
    };
  }, [onMessage]);

  useEffect(() => {
    console.log("RUN useEffect  ");
    const publishMessage = (topic, payload) => {
      const mqttClient = mqttClientRef.current;
      if (mqttClient && mqttClient.connected) {
        mqttClient.publish(topic, payload, { qos: 0 }, (error) => {
          if (error) {
            console.error('Publish error:', error);
          }
        });
      } else {
        console.warn('Cannot publish, MQTT client is disconnected');
      }
    };
    console.log("RUN HERE 1");

    if (typeof onPublish === 'function') {
      console.log("RUN HERE 2");
      onPublish(publishMessage);
    }
  }, [onPublish]);

  return null;
};

export default MQTTComponent;
