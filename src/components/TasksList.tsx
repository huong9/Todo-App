import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Task } from "../constants/tasks";

type AppProps = { tasks: Task[]; setTasks: Dispatch<SetStateAction<Task[]>> };

export const TasksList = ({ tasks, setTasks }: AppProps) => {
  const [currentEdit, setCurrentEdit] = useState<Task | null>(null);
  const [nameEdit, setNameEdit] = useState<string>("");

  useEffect(() => {
    if (currentEdit) {
      setNameEdit(currentEdit.name);
    }
  }, [currentEdit]);

  const toggleCompleted = (task: Task) => {
    task.completed = !task.completed;
    setTasks([...tasks]);
  };

  const deleteTask = (task: Task) => {
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);

    setTasks([...tasks]);
  };

  const handleEdit = (task: Task) => {
    if (currentEdit) {
      currentEdit.name = nameEdit;
      setTasks([...tasks]);
    }
    setCurrentEdit(task);
  };

  const saveTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentEdit) {
      currentEdit.name = nameEdit;
      setTasks([...tasks]);
      setCurrentEdit(null);
    }
  };

  return (
    <>
      {tasks.length >= 5 && (
        <p style={{ color: "red" }}>Bạn đang có {tasks.length} công việc</p>
      )}

      {!tasks.length && (
        <p style={{ color: "green" }}>Bạn không có công việc nào</p>
      )}
      {tasks.map((task) => (
        <p key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task)}
          />

          {task === currentEdit ? (
            <form onSubmit={(e) => saveTask(e)}>
              <input
                type="text"
                value={nameEdit}
                onChange={(e) => setNameEdit(e.target.value)}
              />
              <button onClick={() => saveTask}>save</button>
            </form>
          ) : (
            <label onClick={() => handleEdit(task)}>{task.name}</label>
          )}

          <button onClick={() => deleteTask(task)}>x</button>
        </p>
      ))}
    </>
  );
};
