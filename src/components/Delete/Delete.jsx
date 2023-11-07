import axios from 'axios';
import Button from '@mui/material/Button';

function Delete(props) {
    const clearStatus = () => {
        axios.delete(`/todo`)
            .then(response => {
                props.getTaskList();
            }).catch((error) => {
                console.error(error);
                alert('something went wrong');
            });
    };

    return <Button onClick={clearStatus}>Delete</Button>;
};

export default Delete;