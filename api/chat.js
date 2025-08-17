// api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  const { message } = req.body;

  // Simple smart responses
  let reply = "I'm not sure how to answer that 🤔";

  if (!message) {
    reply = "Please type something so I can help 😊";
  } else if (message.toLowerCase().includes("hi")) {
    reply = "Hello 👋! How are you feeling today?";
  } else if (message.toLowerCase().includes("sad")) {
    reply = "I’m sorry you’re feeling sad 💙. Do you want to talk about it?";
  } else if (message.toLowerCase().includes("homework")) {
    reply = "Sure 📘! Tell me the subject and I’ll try to help.";
  } else if (message.toLowerCase().includes("who made you")) {
    reply = "I was made by a young creator named **Herab** 🚀✨.";
  } else if (message.toLowerCase().includes("guide")) {
    reply = "Of course! 🌟 I can guide you. What do you want guidance about?";
  }

  return res.status(200).json({ reply });
}
