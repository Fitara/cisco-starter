import React, { useState, useEffect } from "react";

type LatencyProps = object;

const Latency: React.FC<LatencyProps> = () => {
  const [latency, setLatency] = useState<number | string>("N/A");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const connectWebSocket = () => {
      const newSocket = new WebSocket("ws://localhost:55455");
      newSocket.onopen = () => {
        console.log("Connected to WebSocket server");
      };

      newSocket.onmessage = (event: MessageEvent) => {
        const currentTS = Date.now();
        const serverTS = parseInt(event.data);
        const latency = currentTS - serverTS;
        setLatency(Math.max(latency));
      };

      newSocket.onclose = () => {
        console.log("WebSocket connection closed")
      };

      newSocket.onerror = () => {
        console.log("WebSocket connection error occurred.")
      };

      setSocket(newSocket);
    };

    if (!socket) connectWebSocket()

    return () => {
      if (socket) socket.close()
    };
  }, [socket]);

  return (
    <div className="latency">
      <p>
        Packet Latency :{" "}
        {typeof latency === "number" ? `${latency} ms` : latency}
      </p>
    </div>
  );
};

export default Latency;
