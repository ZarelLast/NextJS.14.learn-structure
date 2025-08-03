"use client";

import { useEffect, useState } from "react";
import TextInput from "@/components/input/Text";
import { useFormState } from "@/hooks/useFormState";
import { required } from "@/utils/validators";

export default function WebSocketPage() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  // const [input, setInput] = useState("");

  const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormState({ input: "" }, { input: [required()] });

  // WebSocket
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
      socket.send(values.input);
      setMessages((prev) => [...prev, `You: ${values.input}`]);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit((vals) => {
      console.log("📩 Message sent:", vals);
      sendMessage();
      resetForm();
    });
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
      <form onSubmit={onSubmit}>
        <TextInput
          label="Pesan"
          placeholder="Ketik pesan..."
          value={values.input}
          onChange={(val) => handleChange("input", val)}
          onBlur={() => handleBlur("input")}
          error={errors.input}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Kirim
        </button>
      </form>
    </div>
  );
}
