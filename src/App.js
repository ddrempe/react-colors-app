import logo from "./logo.svg";
import "./App.css";
import Colors from "components/Colors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Colors />
      </header>
    </div>
  );
}

export default App;
