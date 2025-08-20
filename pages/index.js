export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>👋 Welcome to HerabChat</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Your smart chat assistant is coming soon 🚀
      </p>
    </div>
  );
}
