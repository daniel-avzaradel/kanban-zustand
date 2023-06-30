import { create } from "zustand";
import { devtools } from 'zustand/middleware'

const store = (set) => ({
  tasks: [
    { title: "TaskTest", state: "PLANNED" },
    { title: "TaskTest2", state: "ONGOING" },
    { title: "TaskTest3", state: "PLANNED" },
    { title: "TaskTest4", state: "PLANNED" },
  ],
  draggedTask: null,
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(devtools(store));