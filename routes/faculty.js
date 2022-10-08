/* 
    /faculty/get
    /faculty/add
    /faculty/remove
    /faculty/display
*/

const express = require("express")

const routes = express.Router()
routes.get("/get", (req, res) => {
    res.send({message: "Get Faculty"})
})

routes.post("/add", (req, res) => {
    res.send({message: "Save/Add New Faculty"})
})

routes.delete("/remove", (req, res) => {
    res.send({message: "Delete Faculty"})
})

routes.get("/getall", (req, res) => {
    res.send({message: "Get All Faculty"})
})

module.exports = routes