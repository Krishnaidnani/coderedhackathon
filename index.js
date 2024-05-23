import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import bodyparser from 'body-parser';
import path from 'path';
import {add,getdata} from './sqloperation.js';
const app=express();
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
const __filepath=fileURLToPath(import.meta.url);
const __dirname=dirname(__filepath);
app.use(express.static(path.join(__dirname,'/')));
app.get('/login',async(req,res)=>{
   return res.redirect('/login.html');
});
app.post('/login',async(req,res)=>{
    console.log("kk");
    await add(req,res)
    return res.redirect('/dashboard.html');
});
app.get('/dashboard',async(req,res)=>{
    return res.redirect('/dashboard.html')
});
app.get('/api/dashboard',async(req,res)=>{
    const [id,id1]=await getdata(req,res);
    console.log("hello");
    res.status(200).json({id,id1});
})

app.listen(3000,()=>{
    console.log("listening to port 3000");
});