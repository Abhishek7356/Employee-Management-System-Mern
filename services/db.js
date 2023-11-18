
//1 import mongoose
const mongoose = require('mongoose')
//2 connect the mongodb
mongoose.connect('mongodb://localhost:27017/EMS').then(() => {
    console.log('connected to mongodb');
});

// create a modal and schema for the collection

const Employee = mongoose.model("employee", {
    id: Number,
    name: String,
    age: String,
    designation: String,
    salary: Number
});

module.exports = {
    Employee
}