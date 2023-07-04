import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  tasks: [{task: 'testPlanned', state: 'PLANNED'}],
  draggedTask: null,
  addTask: (title, state) =>
    set(
      (store) => ({ tasks: [...store.tasks, { title, state }] }),
      false,
      "addTask"
    ),
  deleteTask: (title) =>
    set(
      (store) => ({
        tasks: store.tasks.filter((task) => task.title !== title),
      }),
      false,
      "deleteTask"
    ),
  setDraggedTask: (title) => set({ draggedTask: title }, false, "setDraggedTask"),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    }), false, "moveTask"),
});

const log = (config) => (get, set, api) => config(
  (...args) => {
    console.log(...args);
    set(...args)
  },
  get,
  api
);

export const useStore = create(log(persist(devtools(store), { name: "store" })));