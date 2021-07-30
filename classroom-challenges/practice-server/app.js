let express = require("express"); // importing express to use HTTP requests for later.
let app = express() // Create an instance of express variable. Firing off function, allowing us to make anexpress app. It gives us access to methods and properties.
let testController = require("./controllers/testcontroller")
let calculatorController = require("./controllers/calculatorcontroller")

// .use method is middleware function that allows us to create a pathway. Takes on 2 arguments
app.use("/test", testController)

app.use("/calc", calculatorController)

// app.use("/test", function(req, res) {
//     let response = {message: "This is a test"}
//     res.json(response)
// });


// /listen allows us to "listen" or run on a host/port. (Running on local machine.) Takes on one argument which is the port.
// 65,535 possible port numbers.
app.listen(3001, function() {
    console.log("App is listening on port 3001")
});

