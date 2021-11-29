const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 2345;

app.use(express.json());

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/job");
}

const job = require("../src/controller/job.controller");
app.use("/job",job);
const city = require("../src/controller/city.controller");
app.use("/city",city);
const company = require("../src/controller/company.controller");
app.use("/company",company);

app.listen(port, async()=>{
    await connect();
    console.log(`server started at http://localhost:${port}`);
});