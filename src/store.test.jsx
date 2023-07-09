import { useEffect } from "react";
import { useStore } from "./store";
import { render } from "@testing-library/react";
import { vi } from "vitest";

function TestComponent({selector, effect}) {
    const items = useStore(selector);
    useEffect(() => effect(items), [items])
    return null
}

test("should return default value at the start", () => {
    const selector = (store) => (store.tasks);
    const effect = vi.fn();

    render(<TestComponent selector={selector} effect={effect} />)
    expect(effect).toHaveBeenCalledWith([])
});

test("should add an item to the store and return the effect", () => {
    const selector = (store) => ({tasks: store.tasks, addTask: store.addTask, deleteTask: store.deleteTask});
    let createdTask = false
    const effect = vi.fn().mockImplementation((items) => {
        if(items.tasks.length === 0) {
            items.addTask('a', 'b');
            createdTask = true
        } else if(items.tasks.length === 1) {
            items.deleteTask('a')
        }
    });

    render(<TestComponent selector={selector} effect={effect} />)
    expect(effect).toHaveBeenCalledTimes(2)
    expect(effect).toHaveBeenCalledWith(expect.objectContaining({tasks: [{title: 'a', state: 'b'}]}))
});
