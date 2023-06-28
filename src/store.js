import { create } from "zustand";

const store = (set) => ({
    tasks: [{title: 'TaskTest', state: 'PLANNED'}, {title: 'TaskTest2', state: 'ONGOING'}, {title: 'TaskTest3', state: 'PLANNED'}],
    addTask: (title, state) => set((store) => ({tasks: [...store.tasks, { title, state } ]}))
});

export const useStore = create(store);