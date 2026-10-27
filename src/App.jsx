
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);

  // 2a: Document Title Updater
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // 2b: Live Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 2c: Window Width Tracker
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const device =
    width < 768
      ? "Mobile"
      : width <= 1024
        ? "Tablet"
        : "Desktop";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React useEffect Tasks</h1>

      <hr />

      <h2>2a) Document Title Updater</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <hr />

      <h2>2b) Live Clock</h2>
      <h3>
        {time.toLocaleTimeString("en-GB", {
          hour12: false
        })}
      </h3>

      <hr />

      <h2>2c) Window Width Tracker</h2>
      <h3>Window Width: {width}px</h3>
      <h3>Device Type: {device}</h3>
    </div>
  );
}

export default App;
