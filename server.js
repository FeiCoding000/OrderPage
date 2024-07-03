const express =require('express');
const app=express();
const port=8080;
const router=require('./router');
const cors=require('cors');


app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);


})