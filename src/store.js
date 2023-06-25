import { create } from "zustand";

const store = ({set}) => ({
    tasks: [{title: 'TaskTest', state: 'PLANNED'}, {title: 'TaskTest2', state: 'ONGOING'}, {title: 'TaskTest3', state: 'PLANNED'}]
});

export const useStore = create(store);