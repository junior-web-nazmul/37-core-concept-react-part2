import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Ballcount from "./ballcount";

function App() {
  function handleClick() {
    alert("Iam cliked");
  }

  const handleClick2 = () => {
    alert("clicked 2");
  };

  const handleAdd5 = (num) => {
    const numAdd = num + 5;
    alert(numAdd);
  };
  return (
    <>
      <Ballcount></Ballcount>
      <Batsman></Batsman>
      <Counter></Counter>

      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click</button>
      <br />
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert("clicked 3")}>click 3</button>
      <button
        onClick={function click() {
          alert("clecked 4");
        }}
      >
        click 4
      </button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
