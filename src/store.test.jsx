import { useEffect } from "react";
import { useStore } from "./store";

function testComponent({selector, effect}) {
    const items = useStore(selector)

    useEffect(() => {
        effect(items)
    }, [items])

    return null
}

test("sample", () => {
    expect(1).toEqual(1);
})