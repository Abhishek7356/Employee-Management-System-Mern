
//1 import express
const express = require('express');
//2 import cors
const cors = require('cors')
//import logic file
const logic = require('./services/logic')
//3 create application using the express
const app = express();
//4 use cors and express
app.use(cors({
    //to connect to different ports
    origin: 'http://localhost:3000'
}));

app.use(express.json());

//5 server listen
app.listen(8000, () => {
    console.log("Server started on port 8000");
})


//get all employee details
app.get('/get-employee', (req, res) => {
    logic.getAllEmployees().then((result) => {
        res.status(result.statusCode).json(result)
    })
})

app.post('/add-employee', (req, res) => {
    logic.addEmployees(req.body).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

app.delete('/delete-employee/:id', (req, res) => {
    logic.deleteEmployees(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

app.get('/view-employee/:id', (req, res) => {
    logic.viewOneEmployee(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

app.put('/update-employee/:id', (req, res) => {
    logic.updateEmployee(req.params.id, req.body).then((result) => {
        res.status(result.statusCode).json(result)
    })
})