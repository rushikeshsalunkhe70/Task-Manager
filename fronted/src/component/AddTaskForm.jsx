///////////////////////////////////////////////////////////////////////
//
//  Component Name : AddTaskForm
//  Description :    Provides a form to create a new task
//  Input :          Title, description and due date
//  Output :         Sends new task data to the backend
//
///////////////////////////////////////////////////////////////////////

import { useState } from "react";

function AddTaskForm(props)
{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[dueDate,setDueDate]=useState("");

    const handleSubmit = () => {

    if (title.trim() === "") {
        alert("Please enter task title");
        return;
    }

    const newTask = {
        title: title,
        description: description,
        due_date: dueDate
    };

        fetch("http://localhost:5000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const taskforreact={
                id:data.id,
                title:title,
                description:description,
                completed:false,
                dueDate:dueDate

            };
            props.onAddTask(taskforreact);
            setTitle("");
            setDescription("");
                setDueDate("");
            
        })
        .catch(error => {
            console.log(error);
        });
    };

    return(
        <div>
            <h1>
                Add New Task
            </h1>

            <input
                type="text"
                placeholder="Enter task Title"
                value={title}
                onChange={(event)=>setTitle(event.target.value)}
            />

            <br /><br/>

            <textarea
                placeholder="Enter task Description"
                value={description}
                onChange={(event)=>setDescription(event.target.value)}
            ></textarea>

            <br/><br/>

            <label>Due Date:</label>

            <input 
                type="date"
                value={dueDate}
                onChange={(event)=>setDueDate(event.target.value)}
            />

            <br /><br/>

            <button onClick={handleSubmit}>
                Add Task
            </button>
        </div>
    );
}

export default AddTaskForm;