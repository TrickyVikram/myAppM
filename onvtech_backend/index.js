const express = require('express');
const cors = require('cors');
const db = require('./db_config');

const app=express();
const port=4000;
app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{
    let data = await db.udb.find();
    res.send(data);
})

// app.post('/login', async(req,res)=>{
// data =await db
// let form=req.body
// let ress={...data,form}
// console.log(form);
// res.json(ress);
// })


// app.post('/login', async(req,res)=>{
// let data = await db;
// let form=req.body;
// ress=await data.insertMany([form])
// console.log(ress)
// res.json(ress);
// })

app.post('/login', async(req,res)=>{
let data = await db;
let form=req.body;
ress=await data.insertMany([form])

res.json("login");
})
 app.post('/signup', async(req,res)=>{
    let data = await db;
    let form=req.body;
    ress=await data.insertMany([form])
    
    res.json("signup");
    })

    app.get('/delete', async(req,res)=>{
      
        data=await db.deleteMany()
        res.json(data);
        })

app.listen(port,()=>{

    console.log("starting port :" ,port)
})


