import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter = ({ number }) => {
  return <h1>{number}</h1>;
};

const App = (props) => {
  const [contador, updateContador] = useState(0);

  const handleClick = () => {
    updateContador(contador + 1);
  };

  const handleClickReset = () => {
    updateContador(0);
  };

  const isEven = contador % 2 === 0;
  const MensajeIsEven = isEven ? "Es par" : "Es impar";

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contador} />
      <p>{MensajeIsEven}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
