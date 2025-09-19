import { atomFamily } from "recoil";

import { todos } from "./todo";


export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: (id) => {
        return todos.find(x => x.id === id) || { id: 3, title: "empty", isDone: false };
    }
});