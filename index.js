const express = require("express")
const data = require("./data")
const bcrypt = require("bcrypt")
const morgan = require("morgan")
const db = require("./database")

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res)=>{
    res.send(`${data.users}  "hello world!"`);
    
});



app.listen(PORT, () => {
    console.log(`eApp is listening on http://localhost:${PORT}`)
})