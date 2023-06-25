import { create } from "zustand";

const store = ({set}) => ({
    tasks: [{title: 'TaskTest', state: 'PLANNED'}]
});

export const useStore = create(store);