import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const counterStyle = {
    border: "1px solid yellow",
    padding: "10px 200px",
  };
  return (
    <div style={counterStyle}>
      <h3>count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
