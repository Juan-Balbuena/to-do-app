import { useState, useEffect } from 'react';
import React from 'react';
import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx'
import TaskList from '../TaskList/TaskList.jsx';
import axios from 'axios';
import Delete from '../Delete/Delete.jsx'


function App () {

  const [taskList, setTaskList] = useState([]);
    
  const getTaskList = () => {
    axios.get('/todo').then((response) => {
      console.log((response.data));
      setTaskList(response.data);
    }).catch((error) => {
      console.log('Error in getTaskList: ', error);
      alert('Something went wrong!');
    });
  };
  useEffect(() => {
    getTaskList();
  }, []);

  console.log(taskList);

  return(
    
  <div className="App">
  <Header />
  
  <main>
    <p>Add a Task</p>
    <Form getTaskList={getTaskList} />
    <Delete getTaskList={getTaskList} taskList={taskList}/>
    <TaskList getTaskList={getTaskList} taskList={taskList}/>
    


  </main>
    



  </div>
  );

}

export default App;