const express=require('express')
const routes=require('./route')
const corsOptions= require('./config/corsOptions')
const ejs =require('ejs')
const cors=require('cors')
const { v4 } = require('uuid'); 
const app= express();
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = ['https://fundmechain.vercel.app/','http://fundmechain.vercel.app/'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* app.use(cors(corsOptions)) */

app.use(routes)



app.listen(5000,(req,res)=>{
  console.log("Server is running on 5000 port")
})