import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("gradient");

  // Keyboard control
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") setCount((c) => c + 1);
      if (e.key === "ArrowDown") setCount((c) => c - 1);
      if (e.key.toLowerCase() === "r") setCount(0);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🎉 Alert at 10
  useEffect(() => {
    if (count === 10) {
      alert("🎉 You reached 10!");
    }
  }, [count]);

  // Toggle 3 modes
  const handleToggle = () => {
    if (mode === "gradient") setMode("dark");
    else if (mode === "dark") setMode("light");
    else setMode("gradient");
  };

  const boxColor =
    count > 0 ? "positive" : count < 0 ? "negative" : "neutral";

  return (
    <div className={`container ${mode}`}>
      <div className="card">
        <h2 className={`title ${boxColor}`}>Counter</h2>

        <div className="counter-row">
          <button className="side-btn" onClick={() => setCount(count - 1)}>
            −
          </button>

          <div className={`counter-box ${boxColor}`}>
            {count}
          </div>

          <button className="side-btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>

        <div className="bottom-buttons">
          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>

          <button className="toggle" onClick={handleToggle}>
            {mode === "gradient" ? "🌈Theme" : mode === "dark" ? "🌙Theme" : "⚪Theme"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;