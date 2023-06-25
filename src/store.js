import { create } from "zustand";

const store = ({set}) => ({
    tasks: [{title: 'TaskTest', status: 'PLANNED'}]
});

export const myStore = create(store);