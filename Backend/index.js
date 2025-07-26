const express=require("express");

const app=express();
app.use(express.json());
const {createTodo,updateTodo}=require("./types");



app.post("/todo",(req,res)=>{
    const parsedData=createTodo.safeParse(req.body);

    if(!parsedData.success){
        res.status(400).json({
            msg:"You send wrong inputs"
        })
        return ;
    }
    // put it in mongodb

})
app.get("/todos",(req,res)=>{
    return res.json({
        msg:"hello",
        data,
    })
})
app.put("/completed",(req,res)=>{
    const parsedData=updateTodo.safeParse(req.body);

    if(!parsedData.success){
          res.status(400).json({
            msg:"You have entered wrong todo.."
        })
      return ;
    }
    //db logic

})
