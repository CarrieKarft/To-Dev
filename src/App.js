// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllTasksList from './components/AllTaskList';
import ProjectList from './components/ProjectsList';
import NewTaskForm from './components/NewTaskForm';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
    .then(r => r.json())
    .then(data => {
      // console.log(data)
      setData(data)
    })
  }, [])
  return (
    <div>
      <Route>
          <NavBar exact path="/"/>
      </Route>
      <Switch>
        <Route path="/all-tasks">
          <AllTasksList data={data}/>
        </Route>
        <Route path="/projects-list">
          <ProjectList />
        </Route>
        <Route path="/new-task-form">
          <NewTaskForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
 