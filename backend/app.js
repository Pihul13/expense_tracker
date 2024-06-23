const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT||3001;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1',require('./routes/'+route)))

const server = () => {
    db()
    app.listen(PORT,()=>{
        console.log("listening to port: ",PORT);
    })
}
server()