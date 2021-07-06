import { Button, Container, Input, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
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
            <Grid container justify="center" spacing={1}>
                <Grid item xs={6}>
                    <Input
                        fullWidth={true}
                        ref={inputRef}
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        type="submit"
                    >
                        Add Todo
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default FormCreate;
