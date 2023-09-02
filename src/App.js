import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";
import { useState } from "react";

function App() {
  const initialTasks = [
    { text: "play football", color: "black", isCompleted: true },
    { text: "play game", color: "red", isCompleted: false },
    { text: "shut window", color: "purple", isCompleted: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [userInput, setUserInput] = useState("");
  return (
    <div className="App">
      <h1>To Dos</h1>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      ></input>
      <button
        onClick={() => {
          const copyTasks = _.cloneDeep(tasks);
          copyTasks.push({
            text: userInput,
            color: "black",
            isCompleted: false,
          });

          setTasks(copyTasks);
          console.log(tasks);
          setUserInput("");
        }}
      >
        Add Task
      </button>
      <button
        onClick={() => {
          console.log(tasks);
        }}
      >
        show
      </button>

      {tasks.map((e, i) => {
        return (
          <div key={i} style={{ color: e.color }}>
            {e.text}
            <input
              onChange={() => {
                const copy = _.cloneDeep(tasks);
                copy[i].isCompleted = !copy[i].isCompleted;
                setTasks(copy);
              }}
              checked={e.isCompleted}
              type="checkbox"
            />
            <button
              onClick={() => {
                const copy = _.cloneDeep(tasks);
                const newTask = copy.slice(0, i).concat(copy.slice(i + 1));
                setTasks(newTask);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
