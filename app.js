const mongoose = require('mongoose') //import mongoose
const express = require('express') //import express
const tasks = require('./routes/tasks')
const app = express()

app.use(express.static('./public'))

//import dotenv 
require('dotenv').config()

//import db
const db = require('./db/connect').Mongo_URL;

//db connection
mongoose.connect(db, {dbName:'task-manager-app'})
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.error(err))

app.use('/api/v1/tasks', tasks)

app.listen(8000, ()=>{
    console.log('Server is running on port 8000')
})