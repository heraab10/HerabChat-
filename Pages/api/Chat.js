// pages/api/chat.js

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // 🔑 You’ll add this key in Vercel
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "No message provided" });
  }

  try {
    // 🧠 Smart response with empathy, guidance, teaching
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
          You are HerabChat, a friendly and empathetic AI.
          - Show empathy when users are sad 😢
          - Be a guide 🧭 and motivator 💪
          - Be a teacher 📚 and help with homework ✍️
          - When asked "Who made you?" always reply:
            "I was created by a young developer named Herab." 👨‍💻
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const botReply = response.data.choices[0].message.content.trim();

    res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
}
