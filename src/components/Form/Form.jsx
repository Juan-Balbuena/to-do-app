import axios from "axios";
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Form(props){

    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const addTask = (event) => {
        event.preventDefault();
        axios.post('/todo', {
            name: newTask,
            description: newDescription,
        }).then(response => {
            
            setNewTask('');
            setNewDescription('');

            props.getTaskList();

        }).catch(error => {
            console.error(error);
            alert('Error adding item.');
        });
    };

    return (
        <form onSubmit={addTask} id="input">
            <div>
            <FormControl variant='outlined' fullWidth sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '25px', marginRight: '2rem'}}>
                <TextField
                className='user-input'
                type='text'
                label='Task'
                variant='outlined'
                onChange={e => setNewTask(e.target.value)} required />
            </FormControl>

            <FormControl variant='outlined' fullWidth sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '25px', marginRight: '2rem'}}>
                <TextField
                className='user-input'
                type='text'
                label='Description'
                variant='outlined'
                onChange={e => setNewDescription(e.target.value)} required />
            </FormControl>
        
            <Button onClick={addTask} variant="contained"> Add Task! </Button>
            </div>
        </form>

    );
}

export default Form;