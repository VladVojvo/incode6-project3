const express = require("express")
const data = require("./data")
const bcrypt = require("bcrypt")
const morgan = require("morgan")
const db = require("./database")

const app = express()
const PORT = process.env.PORT || 3000

//ROUTES
app.get("/", (req, res)=>{
    res.send("Welcome to our scheduled website");    
});

app.get("/users", (req, res) => {
    res.send(data.users)
})

app.get("/schedules", (req, res) => {
    res.send(data.schedules)
})

//individual users

app.get("/users/:id", (req, res) =>{
    res.send(data.users[req.params.id])
})

app.get("/users/:id/schedules", (req, res) =>{
    res.send(data.schedules[req.params.id])
})

//creating new

app.post("/users", (req, res) => {
    res.send(req.body)
})


//console.log(data)

//CRUD  Create,  Read, Update,    Delete
//       post    get   put/patch  delete
 
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})