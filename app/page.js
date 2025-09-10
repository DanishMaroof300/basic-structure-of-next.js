"use client";
import Button from "./components/Button";

export default function Home() {
  function handleClick() {
    alert("🚀 Button is working!");
  }

  return (
    <main>
      <h1>Hello, Next.js Intern</h1>
      <p>Welcome to the homepage!</p>

      {/* Button with click handler */}
      <Button text="Click Me" onClick={handleClick} />
    </main>
  );
}