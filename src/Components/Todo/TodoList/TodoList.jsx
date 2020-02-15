import React, { useState, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Grid from "@material-ui/core/Grid";
import useTodoService from "../../../Services/useTodoService";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = ()=> {
    const { todos } = useTodoService();
    const [todoList, setTodoList] = useState(todos);
    useEffect(()=> {
        console.log(todoList);
    }, [todoList]);
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <AddTodo todoList={todoList} setTodoList={setTodoList} />
                {todoList && todoList.map((one, i)=> (
                    <TodoItem key={i} todo={one} todoList={todoList} setTodoList={setTodoList} />
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default TodoList;