import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useEffect, useState } from 'react'
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    // console.log(data);
    setTasks(data);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    // console.log('delete', id);
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();
    
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:data.reminder} : task))
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body : JSON.stringify(task)
    })
    // console.log(task)
    // const id = Math.floor(Math.random() * 100000) + 1;
    // const newTask = {id, ...task}

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    
    return data;
  }

  const [showAddTask, setShowAddTask] = useState(false);
  const addTaskFormNTasks =         
                  <>
                          {
                              showAddTask && <AddTask onAdd={addTask}/>
                            }
                            { tasks.length > 0 ? (
                                <Tasks tasks={tasks} onDelete={deleteTask}
                                    onToggle={toggleReminder} />
                            ) : ('No Tasks to show')
                            }
                  </>
  return (
    
      <div className="container">

        <Router>
          <Header onAdd={()=>setShowAddTask(!showAddTask)}
                  showAdd={showAddTask}/>
          <Routes>
            <Route path='/' element={addTaskFormNTasks} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Router>
        
      </div>
    
  );
}

export default App;
