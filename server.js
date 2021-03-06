const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users")
//Bodyparser middleware
const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//Config DB
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

    //Passport middleware
    app.use(passport.initialize());

    //passport config
    require("./config/passport")(passport);

    //Routes
    app.use("/api/users", users);

//set port process.env.PORT is herokus port 
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is using port ${port}`));

