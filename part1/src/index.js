import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>;
};

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleReset = () => {
    setClicks([]);
  };

  const left = clicks.filter((click) => click === "L");
  const right = clicks.filter((click) => click === "R");

  return (
    <div>
      {left.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right.length}
      <p>
        <button onClick={handleReset}>reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
