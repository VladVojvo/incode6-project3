const express = require("express")
const data = require("./data")
const bcrypt = require("bcrypt")
const morgan = require("morgan")
const db = require("./database")
const app = express()
const PORT = process.env.PORT || 3000

//JSON and form parsin middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//general ROUTES
app.get("/", (req, res)=>{
    res.send("Welcome to our scheduled website");    
});

app.get("/users", (req, res) => {
    res.send(data.users)
})

app.get("/schedules", (req, res) => {
    res.send(data.schedules)
})

//individual elements

app.get("/users/:id", (req, res) =>{
    res.send(data.users[req.params.id])
})

app.get("/users/:id/schedules", (req, res) =>{
    res.send(data.schedules[req.params.id])
})

//creating new users and schedules

app.post("/users", (req, res) => {
    //should do validation in future
    

    const password = req.body.password
    const salt =bcrypt.genSaltSync(10)
    const hash =bcrypt.hashSync(password, salt)
    req.body.password = hash //merges password and encrypted password

    data.users.push(req.body)
    res.send(req.body)
   
    
    
})

app.post("/schedules", (req, res) =>{
    data.schedules.push(req.body)
    res.send(req.body)
})


//console.log(data)

//CRUD  Create,  Read, Update,    Delete
//       post    get   put/patch  delete
 
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})