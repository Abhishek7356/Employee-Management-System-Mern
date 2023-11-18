
//import db 
const db = require('./db');

//get all employees details
const getAllEmployees = () => {
    return db.Employee.find().then((res) => {
        if (res) {
            return {
                statusCode: 200,
                employees: res
            }
        } else {
            return {
                statusCode: 404,
                message: 'No such employee found'
            }
        }
    })
};

const addEmployees = (employeeDetails) => {
    return db.Employee.findOne({ id: employeeDetails.id }).then((res) => {
        if (res) {
            return {
                statusCode: 401,
                message: 'Employee already exist'
            }
        } else {
            const newEmployee = db.Employee(employeeDetails);
            newEmployee.save()
            return {
                statusCode: 200,
                message: "Employee added succesfully"
            }
        }
    })
}
const deleteEmployees = (empId) => {
    return db.Employee.deleteOne({ id: empId }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                message: "Employee deleted successfully"
            }
        } else {
            return {
                statusCode: 404,
                message: "Employee not exist"
            }
        }
    })
}
const viewOneEmployee = (id) => {
    return db.Employee.findOne({id}).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                employee: result
            }
        } else {
            return {
                statusCode: 404,
                message: "Employee not found"
            }
        }
    })
}

const updateEmployee = (id, body) => {
    return db.Employee.updateOne({ id }, { $set: body }).then(result => {
        if (result) {
            return {
                statusCode: 200,
                message: "Employee updated successfully"
            }
        } else {
            return {
                statusCode: 404,
                message: "Employee not found"
            }
        }
    })
}

module.exports = {
    getAllEmployees,
    addEmployees,
    deleteEmployees,
    updateEmployee,
    viewOneEmployee
};