const express = require('express');
const app = express();
const port = 6000;
let connection=require('./db')
connection();
let routeruser=require('./Route/route')

app.use(express.json({limit:"50mb"}))  
 
 app.get('/',(req,res)=>{
    res.send("welcome home")      
})
app.use('/',routeruser)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});