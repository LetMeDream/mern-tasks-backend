const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasksRouter = require('./routes/taskRoutes');
/* Cors */
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: ['http://127.0.0.1:5173','https://letmedream.github.io']
}))
/* Built-in express.json middleware */
app.use(express.json());
app.use('/api/tasks',tasksRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDB connected successfully')  
        app.listen(PORT, ()=>{
            console.log(`Server started at port: ${PORT}`)
        })
    })
    .catch((err)=>{ console.log(err); })
