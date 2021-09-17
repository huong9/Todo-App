import React, { useState } from "react";
import "./App.css";
import { Insert } from "./components/Insert";
import { TasksList } from "./components/TasksList";
import { Title } from "./components/Title";
import { initialTasks, Task } from "./constants/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <div className="todo-app">
      <Title />
      <Insert tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
