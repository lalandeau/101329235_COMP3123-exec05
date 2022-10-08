/*
    /api/v1/employee/get
    /api/v1/employee/add
    /api/v1/employee/remove
*/
const express = require("express")

const routes = express.Router()

routes.get("/get", (req, res) => {
    res.send({message: "Get Employee"})
})

routes.post("/add", (req, res) => {
    res.send({message: "Save/Add New Employee"})
})

routes.delete("/remove", (req, res) => {
    res.send({message: "Delete Employee"})
})


module.exports = routes