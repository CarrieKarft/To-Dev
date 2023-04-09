// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllTasksList from './components/AllTaskList';
import ProjectList from './components/ProjectsList';
import NewTaskForm from './components/NewTaskForm';
import ProjectTasks from './components/ProjectTasks';



function App() {
  const [data, setData] = useState([])
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
    .then(r => r.json())
    .then(data => {
      setData(data)
    })

    fetch("http://localhost:8000/projects")
    .then(r => r.json())
    .then(data => {
      setProjectList(data)
    })
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:8000/projects")
  //   .then(r => r.json())
  //   .then(data => {
  //     setProjectList(data)
  //   })
  // }, [])


  function handleTaskDelete(taskData) {
    fetch(`http://localhost:8000/tasks/${taskData.id}`,
    {method: 'DELETE'})
    .then(r => r.json())
    .then(() => {
      filteringDeletedItems(taskData)
    })
  }

  function filteringDeletedItems(taskData) {
    console.log(taskData)
    const updatingTasks = data.filter(task => {
      return taskData.id !== task.id
    })
    setData(() => updatingTasks)
  }

  

  return (
    <div className='app'>
          <NavBar />
      <Switch>
        <Route exact path="/">
          <AllTasksList data={data} onDeleteTask={handleTaskDelete}/>
        </Route>
        <Route exact path="/projects-list/:id">
          <ProjectTasks data={data} projectList={projectList} onDeleteTask={handleTaskDelete}/>
        </Route>
        <Route path="/projects-list">
          <ProjectList data={data} projectList={projectList} setProjectList={setProjectList} onDeleteTask={handleTaskDelete}/>
        </Route>
        <Route path="/new-task-form">
          <NewTaskForm setData={setData} data={data} projectList={projectList}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
 