import React, { useState, useEffect } from "react";
import FormCreate from "./FormCreate";
import ToDoItem from "./ToDoItem";
import { Container } from "@material-ui/core";

export default function ToDoList() {
    const [todos, setToDos] = useState([
        {
            id: "12sadhfg12",
            content: "Have breakfast",
            done: false,
        },
        {
            id: "12312",
            content: "Go to work",
            done: false,
        },
    ]);

    const addTodo = (value) => {
        setToDos((prev) => [value, ...prev]);
    };

    const removeTodo = (id) => {
        setToDos((prev) => {
            return [...prev].filter((todo) => todo.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setToDos((prev) => {
            return [...prev].map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }
                return { ...todo, done: !todo.done };
            });
        });
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <Container maxWidth="md">
            <h1 style={{ margin: "12px" }}>Todos App</h1>
            <FormCreate handleSubmit={addTodo} />
            {todos.map((todo) => (
                <ToDoItem
                    id={todo.id}
                    content={todo.content}
                    done={todo.done}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </Container>
    );
}
