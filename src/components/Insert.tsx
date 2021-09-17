import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { v4 } from "uuid";
import { Task } from "../constants/tasks";

type AppProps = { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> };

export const Insert = ({ tasks, setTasks }: AppProps) => {
  const [name, setName] = useState<string>("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      alert("couldn't empty!");
      return;
    }

    if (tasks.some((task) => task.name.toLowerCase() === name.toLowerCase())) {
      alert("already exist in list!");
      return;
    }

    const newTask = {
      name: name.trim(),
      completed: false,
      id: v4(),
    };

    tasks.unshift(newTask);
    setTasks([...tasks]);
    setName("");
  };

  return (
    <form onSubmit={(e) => addTask(e)}>
      <input type="text" value={name} onChange={(e) => handleChangeName(e)} />
      <button onClick={() => addTask}>Add</button>
    </form>
  );
};
