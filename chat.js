async function sendMessage() {
  const input = document.getElementById("user-input");
  const messages = document.getElementById("messages");

  const userMessage = input.value;
  if (!userMessage) return;

  // Show user message
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = userMessage;
  messages.appendChild(userDiv);
  input.value = "";

  // Show "thinking..."
  const botDiv = document.createElement("div");
  botDiv.className = "message bot";
  botDiv.innerText = "🤔 Thinking...";
  messages.appendChild(botDiv);
  messages.scrollTop = messages.scrollHeight;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });
    const data = await response.json();

    botDiv.innerText = data.reply || "⚠️ No response";
  } catch (err) {
    botDiv.innerText = "❌ Error connecting to server.";
  }
}
