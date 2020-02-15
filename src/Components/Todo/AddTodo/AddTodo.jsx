import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import usePaperStyles from "../../../Services/usePaperStyles";
import TextField from '@material-ui/core/TextField';
import uuid from "uuid";
import Button from '@material-ui/core/Button';


const AddTodo = ({ todoList, setTodoList })=> {
    const { classes } = usePaperStyles();
    const [content, setContent] = useState("");
    const addTodo = ()=> {
        setTodoList([...todoList, {
            id: uuid.v4(),
            created_at: new Date(),
            content: content, 
            completed: false
        }]);
        setContent("");
    }
    const handleSubmitButtonClicked = (evt)=> {
        if(content.length === 0) return;
        addTodo();
    }
    const handleTextFieldKeydown = (evt)=> {
        console.log(evt);
        if(evt.keyCode === 13) {
            addTodo();
        }   
    }
    return (
        <React.Fragment>
            <Grid item xs={10} style={{ marginBottom: "10px"}}>
            <TextField id="standard-name" label="Name" value={content} 
            onChange={(evt)=> setContent(evt.target.value)}
            onKeyDown={handleTextFieldKeydown}
            style = {{ width: "100%"}}
             />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained"
                 color="primary" 
                 onClick={handleSubmitButtonClicked}
                style = {{ width: "100%", marginTop: "20px"}}
                >Submit</Button> 
            </Grid>
        </React.Fragment>
    );
}

export default AddTodo;