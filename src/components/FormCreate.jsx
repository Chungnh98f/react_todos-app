import { Button, Input } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { v4 } from "uuid";

function FormCreate(props) {
    const { handleSubmit } = props;
    const [content, setContent] = useState("");
    const inputRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            id: v4(),
            content,
            done: false,
        });

        setContent("");
        inputRef.current.focus();
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <Input
                ref={inputRef}
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button
                size="small"
                variant="outlined"
                color="primary"
                type="submit"
            >
                Add Todo
            </Button>
        </form>
    );
}

export default FormCreate;
