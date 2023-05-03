// const express = require("express");
// const app = express();

// app.listen(3001, () => {
//      console.log("App is runnnig successfully");
// });


//Create Server
const express = require("express");
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3001;
const todoRouters = require('./Routes/TodoS');

app.use(express.json());
app.use('/api/v1', todoRouters);


//Server Start
app.listen(PORT, () => {
     console.log(`Server Start Sucessfullly port Number: ${PORT}`);
});

const dbConnact = require('./Config/DataBase');
dbConnact();

app.get('/', (req, res) => {
     res.send(`<center>
               <h1>
               This is Server HomePage Body 
               </h1>
               </center>
    `);
});