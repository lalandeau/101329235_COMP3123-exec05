const express = require("express")
const facultyRoutes = require("./routes/faculty")
const employeeRoute = require("./routes/employee")

const fs = require("fs")

const app = express()

const SERVER_PORT = 3001

// app.use("/public", express.static("./static"))

// Middleware
app.use((req, res, next) => {
//    console.log()
   const data = `${req.method}:${new Date()}:${req.url}\n`
   fs.appendFile("./log.txt", data, () => {

   })
   next()
})

// GET -/hello
// POST - /hello

app.use(facultyRoutes)
// app.use("/faculty", facultyRoutes)
// app.use("/admin", facultyRoutes)
// app.use("/api/v1/faculty", facultyRoutes)
app.use("/api/v1/employee", employeeRoute)


app.route("/").get((req, res) => {
    res.send({message: "GET - HOME "})
}).post((req, res) => {
    res.send({message:"POST - HOME "})
}).put((req, res) => {
    res.send({message: "PUT - HOME "})
}).patch((req, res) => {
    res.send({message: "PATCH - HOME "})
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})


/*

    /api/v1/employee/get
    /api/v1/employee/add
    /api/v1/employee/remove

    /faculty/get
    /faculty/add
    /faculty/remove
    /faculty/display

*/