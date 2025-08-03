"use client";

import { useEffect, useState } from "react";

export default function WebSocketPage() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Koneksi ke WebSocket
    const ws = new WebSocket("wss://echo.websocket.org");

    ws.onopen = () => {
      console.log("✅ Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      console.log("📩 Message from server:", event.data);
      setMessages((prev) => [...prev, `Server: ${event.data}`]);
    };

    ws.onclose = () => {
      console.log("❌ Disconnected from WebSocket");
    };

    ws.onerror = (error) => {
      console.error("⚠️ WebSocket Error:", error);
    };

    setSocket(ws);

    // Cleanup saat unmount
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(input);
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin - WebSocket Test</h1>

      <div
        style={{
          border: "1px solid #ccc",
          height: "200px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Ketik pesan..."
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Kirim
        </button>
      </form>
    </div>
  );
}
