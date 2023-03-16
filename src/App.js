// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
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
      <NavBar />
      <AllTasksList data={data}/>
      <ProjectList />
      <NewTaskForm />
    </div>
  );
}

export default App;
 