import logo from "./logo.svg";
import "./App.css";

function App() {
  const initialTasks = [
    { text: "play football", color: "black", completed: true },
    { text: "play game", color: "red", completed: false },
    { text: "shut window", color: "purple", completed: false },
  ];
  return (
    <div className="App">
      <h1>To Dos</h1>
      <input></input>
      <button>Add Task</button>

      {initialTasks.map((e, i) => {
        return (
          <div key={i} style={{ color: e.color }}>
            {e.text}
            <input type="checkbox" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
