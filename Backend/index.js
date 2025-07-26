const express=require("express");

const app=express();
app.use(express.json());
const {createTodo,updateTodo}=require("./types");


app.post("/todo",(req,res)=>{

})
app.get("/todos",(req,res)=>{
    return res.json({
        msg:"hello",
        data,
    })
})
app.put("/completed",(req,res)=>{

})
