import React, { useEffect, useRef } from 'react';
import mqtt from 'mqtt';

const ConnectToBroker = ({ onMessage }) => {
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
    console.log("CHECK TYPEOF", typeof(onMessage));
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
      console.log('Reconnecting...');
    });

    mqttClient.on('error', (err) => {
      console.error('Connection error:', err);
      mqttClient.end();
    });

    mqttClient.on('message', (topic, message) => {
      const payload = { topic, message: message.toString() };
      console.log('Received message:', payload);
      if (typeof onMessage === 'function') {
        console.log("CHECK RUN GET MESSAGES");
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

  return null; // 
};

export default ConnectToBroker;
