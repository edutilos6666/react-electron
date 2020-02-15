import React from "react";
import uuid from "uuid";
const useTodoService = ()=> {
    const todos = [
        {
            id: uuid.v4(),
            created_at: new Date(),
            content: "foo",
            completed: false
        },
        {
            id: uuid.v4(),
            created_at: new Date(),
            content: "bar",
            completed: true
        }, 
        {
            id: uuid.v4(),
            created_at: new Date(),
            content: "bim",
            completed: true
        },
        {
            id: uuid.v4(),
            created_at: new Date(),
            content: "pako",
            completed: false
        }
    ];

    return {
        todos
    };
}
export default useTodoService; 