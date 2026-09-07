///////////////////////////////////////////////////////////////////////
//
//  Component Name : TaskList
//  Description :    Displays the list of tasks
//  Input :          Task list and callback functions
//  Output :         Renders individual TaskItem components
//
///////////////////////////////////////////////////////////////////////

import TaskItem from "./TaskItem";

function TaskList(props)
{
    console.log("Tasks received:", props.tasks);

    return(
        <div>
            <h2>my tasks</h2>

            {props.tasks.map((task) => ( 
                <TaskItem 
                    key={task.id}
                    task={task}
                    onToggleTask={props.onToggleTask}
                    onEditTask={props.onEditTask}
                    onDeleteTask={props.onDeleteTask}
                />
            ))}
        </div>
    );
}

export default TaskList;