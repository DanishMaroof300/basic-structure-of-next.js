export default function Button({ text }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#007771ff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
