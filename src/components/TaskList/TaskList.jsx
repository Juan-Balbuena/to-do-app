import TaskItem from "../TaskItem/TaskItem"
import { Grid } from "@mui/material";

function TaskList(props) {

    return(
        <>
            <h1>To do:</h1>
            <Grid container spacing={2}>
                {
                    props.taskList.map(task => <TaskItem id={task.id} getTaskList={props.getTaskList} name={task.name} description={task.description} completed={task.completed} />)
                }
            </Grid>
        
        
        
        </>
    )
}

export default TaskList;