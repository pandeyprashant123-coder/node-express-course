require("./db/connect")
const express = require("express");
const app = express();
const task = require('./routes/task');
//middleware

app.use(express.json());


app.use('/api/v1/task', task);
const port = 3000;

app.listen(port,console.log(`server is listenig at port ${port}....`));