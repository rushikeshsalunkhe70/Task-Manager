///////////////////////////////////////////////////////////////////////
//
//  Component Name : TaskItem
//  Description :    Displays and manages an individual task
//  Operations :     Complete, Pending, Edit and Delete
//  Input :          Task data and callback functions
//
///////////////////////////////////////////////////////////////////////

import { useState } from "react";
function TaskItem(props)
{

    const [isEditing,setIsEditing] = useState(false);
    const [newTitle,setNewTitle] = useState(props.task.title);
    const [newDescription,setNewDescription] = useState(props.task.description);
   
     const isoverdue=
    props.task.dueDate &&
    !props.task.completed &&
    new Date(props.task.dueDate) < new Date();

    console.log("Is overdue:",isoverdue);
    return(

        
        <div>
            
            <h3>
                {props.task.title}
            </h3>
            <p>{props.task.description}</p>
            <p style={{color:isoverdue ? "red":"black"}}>
            Due Date:{props.task.dueDate?.split("T")[0]}</p>

        {isEditing && (
            <div>
                <input
                type="text"
                value={newTitle}
                onChange={(event)=>setNewTitle(event.target.value)}
                />
                <br /><br/>
                 <textarea
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
        ></textarea>

                <button
                onClick={()=>{
                    props.onEditTask(
                        props.task.id,
                        newTitle,
                        newDescription
                    );
                    setIsEditing(false);
                }}
                
                >
                    save
                </button>
                <button onClick={()=>setIsEditing(false)}>
                    cancel
                </button>
                </div>
        )}
            <p>
                Status:{props.task.completed ? "Completed":"Pending"}

            </p>
            <button onClick={()=>props.onToggleTask(props.task.id)}>
                {props.task.completed ?"Mark Pending":"Mark Complete"}
            </button >
            <button onClick={()=> setIsEditing(true)}>
                Edit
            </button>

            <button onClick={()=>props.onDeleteTask(props.task.id)}>
                Delete
            </button>
        </div>
    );
}
export default TaskItem;