import axios from 'axios';
import { Card, CardActions, CardContent, Typography, Paper, Grid, Button } from '@mui/material';

function TaskItem(props) {
    console.log(props);
    console.log(props.id);

    const toggleCompleted = () => {

        axios.put(`/todo/${props.id}`).then((response) => {
            props.getTaskList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong!');
        });
    };

    const deleteTask = () => {
        axios.delete(`/todo/${props.id}`)
            .then(response => {
                props.getTaskList();
            })
            .catch(error => {
                console.error(error);
                alert('something went wrong!')
            });
    };

    return (
        <Grid item spacing={3}>
            <Paper elevation={5}>
                <Card>
                    <CardContent>
                        <Typography>{props.name}: {props.description} </Typography>
                        <CardActions>
                            <Button variant='contained' onClick={toggleCompleted}>{props.completed ? 'Completed!' : 'Complete'}</Button>
                            <Button variant='outlined' id='delete-button' onClick={deleteTask}>Delete</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>                    
           
    )
}


export default TaskItem;