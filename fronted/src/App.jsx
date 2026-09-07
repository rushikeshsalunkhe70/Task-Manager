///////////////////////////////////////////////////////////////////////
//
//  Component Name : App
//  Description :    Main component of the Task Manager application
//  Responsibility : Manages tasks, filters and API communication
//  Technology :     React
//
///////////////////////////////////////////////////////////////////////

import { useState,useEffect } from "react";
import AddTaskForm from "./component/AddTaskForm";
import TaskList from "./component/TaskList";

function App()
{
  const[tasks,setTasks] = useState([]);
  const[filter,setFilter] = useState("all");

 useEffect(()=>{
    fetch("http://localhost:5000/api/tasks")
    .then(response=>response.json())
    .then(data=>{
        console.log("Task from database:", data);

        const tasksForReact = data.map((task) => {
            return {
                id: task.id,
                title: task.title,
                description: task.description,
                completed: task.completed,
                dueDate: task.due_date
            };
        });

        setTasks(tasksForReact);
    })
    .catch(error=>{
        console.log("error fetching tasks:", error);
    });
},[]);

  const addNewTask=(newTask)=>{
    setTasks(previousTasks => {
      return [newTask,...previousTasks];
    });
  }

const toggleTask = (taskId) => {

    const task = tasks.find((task) => task.id === taskId);

    const newCompletedStatus = !task.completed;

    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: newCompletedStatus
        })
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);

        setTasks(previousTasks => {
            return previousTasks.map((task) => {

                if (task.id === taskId) {
                    return {
                        ...task,
                        completed: newCompletedStatus
                    };
                }

                return task;
            });
        });
    })
    .catch(error => {
        console.log(error);
    });
};

  const editTask = (taskId, newTitle, newDescription) => {

    fetch(`http://localhost:5000/api/tasks/edit/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: newTitle,
            description: newDescription
        })
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);

        setTasks(previousTasks => {
            return previousTasks.map((task) => {

                if (task.id === taskId) {
                    return {
                        ...task,
                        title: newTitle,
                        description: newDescription
                    };
                }

                return task;
            });
        });
    })
    .catch(error => {
        console.log(error);
    });
};

 const deleteTask = (taskId) => {

    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);

        setTasks(previousTasks => {
            return previousTasks.filter((task) => {
                return task.id !== taskId;
            });
        });

    })
    .catch(error => {
        console.log(error);
    });

};

let filteredTasks = tasks;
if(filter === "completed"){
  filteredTasks = tasks.filter((task)=>task.completed);
}
if(filter === "pending"){
  filteredTasks = tasks.filter((task)=>!task.completed);
}
return(
  <div>
    <h1>Task Manager</h1>
<div>
  <button onClick={()=>setFilter("all")}>
    All
  </button>

  <button onClick={()=>setFilter("completed")}>
    Completed
  </button>

  <button onClick={()=>setFilter("pending")}>
    Pending
  </button>

  </div>
    <AddTaskForm onAddTask={addNewTask}/>
    <TaskList 
    tasks={filteredTasks} 
    onToggleTask={toggleTask}
    onEditTask={editTask}
    onDeleteTask={deleteTask}
    />

     <h2>Tasks</h2>
     <p>Total Tasks:{tasks.length}</p>
  </div>
);
}
export default App;