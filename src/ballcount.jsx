import { useState } from "react";

export default function Ballcount() {
  const [ball, setBall] = useState(0);
  const [over, setOver] = useState(0);

  const handleBall = () => {
    if (ball === 5) {
      setOver(over + 1);
      setBall(0);
    } else {
      setBall(ball + 1);
    }
  };

  const handleNoBall = () => {
    alert("no ball found");
  };
  return (
    <div>
      <h3>ball and over count</h3>
      <h1>
        Ball: {over}.{ball}
      </h1>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleNoBall}>no ball</button>
    </div>
  );
}
