import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la app del curso de fullstack</p>;
};

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="En un curso" />
      <Mensaje color="yellow" message="De React" />
      <Description />
    </div>
  );
}

export default App;
