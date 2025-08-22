import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
  };

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>🤖 Welcome to HerabChat</h1>
      <div style={{ border: "1px solid #ccc", padding: 10, height: 400, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((msg, i) => (
          <p key={i}><b>{msg.role === "user" ? "You" : "HerabBot"}:</b> {msg.content}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
        style={{ width: "80%", padding: 10 }}
      />
      <button onClick={sendMessage} style={{ padding: 10, marginLeft: 5 }}>Send</button>
    </div>
  );
          }
