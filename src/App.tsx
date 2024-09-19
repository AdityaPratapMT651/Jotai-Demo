import "./App.css";
import JotaiCounter from "./components/JotaiCounter";
import NormalCounter from "./components/NormalCounter";

function App() {
  return (
    <div className="App">
      <h1>Jotai Demo</h1>
      <div className="content">
        <div className="column">
          <div className="card">
            <NormalCounter />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <JotaiCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
