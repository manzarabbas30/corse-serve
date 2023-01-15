const cors=require('cors');
const express=require('express');
const app=express();
const PORT=5000;
app.use(cors())
app.get('/',(req,res)=>{
res.send("Welcome to CORS server! 😁")
})
app.get('/api/candy',(req,res)=>{
res.set('Access-Control-Allow-Origin', 'http://localhost:8080','http://localhost:5500/');
res.json({'candy':'bubble-gum'})
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))