export interface Task {
  id: number | string;
  name: string;
  completed: boolean;
}

export const initialTasks: Task[] = [
  { id: 1, name: "ăn", completed: false },
  { id: 23, name: "sạc điện thoại", completed: true },
  { id: 6, name: "uống nước", completed: false },
  { id: 7, name: "Mừng sinh nhật bạn Hưng", completed: true },
];
