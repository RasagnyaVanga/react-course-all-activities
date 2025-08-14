import { useState } from "react";

export default function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  function handleChange(value) {
    setInput(value);
  }
  function AddTasks(){
    setTasks([...tasks,input]);
    setInput('');
  }
  return (
    <div>
      <label for="name">Task :</label>
      <input onChange={(e) => handleChange(e.target.value)}
        value={input}
        id="name"
        name="task" />
      <button onClick={AddTasks}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}