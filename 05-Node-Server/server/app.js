require("dotenv").config();
let express = require('express');
const app = express()
const sequelize = require("./db")
let journal = require("./controllers/journalcontroller")
let user = require("./controllers/usercontroller")

sequelize.sync()

app.use(express.json())

//req = request, res = response
// app.use('/test', function(req,res) {
//     res.send("This is a message from the test endpoint on the server!")
// })

// app.use('/joe', function(req,res) {
//     res.send("My name is Joe, and I am 29 years old")
// })

// Have endpoint of journal/practice
// send a response from that endpoint (This is a practice route)

app.use('/journal', journal)
app.use('/user', user)

app.listen(3000, function() {
    console.log("App is listening on port 3000")
});