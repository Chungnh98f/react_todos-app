import React from "react";
import { Button, Checkbox } from "@material-ui/core";

function ToDoItem(props) {
    const { done, id, content, removeTodo, toggleTodo } = props;

    const handleToggleTodo = (e) => {
        toggleTodo(id);
    };

    const handleRemoveTodo = () => {
        removeTodo(id);
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                }}
            >
                <div>
                    <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        id={id}
                        checked={done}
                        onChange={handleToggleTodo}
                    />
                    <label
                        htmlFor={id}
                        style={{ textDecoration: done ? "line-through" : "" }}
                    >
                        {content}
                    </label>
                </div>
                <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={handleRemoveTodo}
                >
                    Clear
                </Button>
            </div>
        </>
    );
}

export default ToDoItem;
