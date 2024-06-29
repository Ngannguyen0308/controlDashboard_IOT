import React, { useEffect, useRef } from "react";
import mqtt from "mqtt";

const ConnectToBroker = ({ onMessage, publishMessage }) => {
  const mqttClientRef = useRef(null);

  useEffect(() => {
    if (mqttClientRef.current) return;

    const url = "wss://broker.emqx.io:8084/mqtt";
    const options = {
      keepalive: 60,
      clientId: "emqx_react_" + Math.random().toString(16).substring(2, 8),
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
    };
    console.log("CHECK TYPEOF", typeof publishMessage);
    const mqttClient = mqtt.connect(url, options);
    mqttClientRef.current = mqttClient;

    // Handle connection to broker
    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      mqttClient.publish("emqx/esp8266/led", "", { qos: 0, retain: true });
      mqttClient.subscribe("emqx/esp8266/led", { qos: 0 }, (error) => {
        if (error) {
          console.log("Subscribe error:", error);
        }
      });
    });

    // Handle reconnection attempts
    mqttClient.on("reconnect", () => {
      console.log("Reconnecting...");
    });

    // Handle connection errors
    mqttClient.on("error", (err) => {
      console.error("Connection error:", err);
      mqttClient.end();
    });

    // Handle incoming messages
    mqttClient.on("message", (topic, message) => {
      const payload = { topic, message: message.toString() };

      if (typeof onMessage === "function") {
        onMessage(payload);
      } else {
        // console.log("ERROR get messages");
      }
    });

    mqttClient.on("close", () => {
      console.log("Disconnected from MQTT broker");
    });
    // Clean up on unmount
    return () => {
      mqttClient.end();
      mqttClientRef.current = null;
    };
  }, [onMessage]);

  //Publish messages to mqtt
  useEffect(() => {
    if (mqttClientRef.current && publishMessage) {
      // console.log("CHECK DATA PUBLISH", publishMessage);
      const messageString = JSON.stringify(publishMessage);
      mqttClientRef.current.publish(
        "emqx/esp8266/led",
        messageString,
        { qos: 0 },
        (error) => {
          if (error) {
            console.log("Publish error:", error);
          } else {
            console.log(`Message published to topic: ${messageString}`);
          }
        }
      );
    }
  }, [publishMessage]);

  return null;
};

export default ConnectToBroker;
