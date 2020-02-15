import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import usePaperStyles from "../../../Services/usePaperStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = ({ todo, todoList, setTodoList })=> {
    const { classes } = usePaperStyles();
    const [completed, setCompleted] = useState(todo.completed);

    useEffect(()=> {
        completed !== undefined && setTodoList(todoList.map(one=>  one.id === todo.id? {...one, completed: completed}: one))
    }, [completed]);

    const handleDelete = ()=> {
        setTodoList(todoList.filter(one => one.id !== todo.id));
    }
    return (
        <React.Fragment>
            <Grid item xs={10}>
                <Paper className={classes.paper}><span style={{textDecoration: completed? "line-through": "none"}}>{todo.content}</span></Paper>
            </Grid>
            <Grid item xs={1}>
            <FormGroup>
          <Checkbox checked={completed} onChange={()=> setCompleted(!completed)} value="gilad" />
          </FormGroup>
            </Grid>
            <Grid item xs={1}>
                <IconButton color="secondary" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </React.Fragment>
    );
}

export default TodoItem;