///////////////////////////////////////////////////////////////////////
//
//  File Name :      server.js
//  Description :    Handles Task Manager REST API operations
//  Technology :     Node.js, Express, MySQL
//  Operations :     Create, Read, Update and Delete tasks
//
///////////////////////////////////////////////////////////////////////

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=> {
    res.send("Task Manager Backend is running");
});

app.get("/api/tasks",(req,res)=> {
    const sql = "Select * FROM tasks";
    db.query(sql,(error,results)=>{
        if(error){
            console.log(error);
            res.status(500).json({
                message:"failed to fetch tasks"
            });
            return;
        }
        res.json(results);
    });
});

app.post("/api/tasks",(req,res) =>{
    const{title,description,due_date}=req.body;
    const sql=`
    insert into tasks(title,description,due_date)
    Value(?,?,?)
    `;
    db.query(sql,[title,description,due_date],(error,result)=>{
        if(error){
            console.log(error);
            res.status(500).json({
                message:"failed to create task"
            });
            return;
        }
        res.status(201).json({
            message:"Task created successfully",
            id:result.insertId
        });
    });

});

app.put("/api/tasks/:id",(req,res)=> {
    const taskId = req.params.id;
    const{completed}=req.body;
    const sql="Update tasks set completed = ? where id = ?";
    db.query(sql,[completed,taskId],(error,result)=>{
        if(error){
            console.log(error);
            res.status(500).json({
                message:"failed to update task"
            });
            return;
        }
        res.json({
            message:"task updated successfully"
        });
    });
});


app.delete("/api/tasks/:id",(req,res)=>{
    const taskId = req.params.id;
    const sql = "Delete from tasks where id = ?";
    db.query(sql,[taskId],(error,result)=>{
        if(error){
            console.log(error);
            res.status(500).json({
                message:"failed to delete task"
            });
            return;
        }
        res.json({
            message:"task deleted successfully"
        });
    });
});

app.put("/api/tasks/edit/:id", (req,res)=>{
    
    const taskId = req.params.id;
    const {title, description} = req.body;

    const sql = `
        UPDATE tasks
        SET title = ?, description = ?
        WHERE id = ?
    `;

    db.query(sql,[title,description,taskId],(error,result)=>{
        
        if(error){
            console.log(error);

            res.status(500).json({
                message:"failed to edit task"
            });

            return;
        }

        res.json({
            message:"Task edited successfully"
        });
    });
});
app.listen(5000,()=>{
    console.log("Server is running on port no 5000");
});