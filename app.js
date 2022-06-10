const express = require("express")
const app = express();
const fs = require("fs");
const home = fs.readFileSync("./home_page/home.html", "utf8")
const lost = fs.readFileSync("./lost_item/lostitem.html", "utf8")
const found = fs.readFileSync("./found/found.html", "utf8")
const recentlost = fs.readFileSync("./recentlost/lostandfound.html", "utf8")


// saving data
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect("process.env.MONGODB_URI || mongodb+srv://localhost/Found_data", { useNewUrlParser: true, useUnifiedTopology:true })
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))

// import for middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"))


app.get("/", (req, res) => {
    res.send(home)
})
app.get("/lost_item", (req, res) => {
    res.send(lost)
})
app.get("/found", (req, res) => {
    res.send(found)
})
app.get("/recentlost", (req, res) => {
    res.send(recentlost)
})

app.post("/submit", (req, res) => {
    const founddataSchema = new mongoose.Schema({
        Itemname: String,
        category: String,
        datefound: Date,
        timefound: String,
        Brand: String,
        wherefound: String,
        specification: String
    });

    const founddata = mongoose.model('fdata', founddataSchema);
    var mdata = new founddata(req.body)
    mdata.save().then(() => {
        res.end("You have successfully submitted the form")
    }).catch(() => {
        res.status(404).send("Your data is not saved!!!")
    })
})
app.post("/lost-submit", (req, res) => {
    const lostdataSchema = new mongoose.Schema({
        Itemname: String,
        category: String,
        datelost: Date,
        timelost: String,
        Brand: String,
        wherelost: String,
        specification: String
    });

    const lostdata = mongoose.model('ldata', lostdataSchema);
    var mdata = new lostdata(req.body)
    mdata.save().then(() => {
        res.end("You have successfully submitted the form")
    }).catch(() => {
        res.status(404).send("Your data is not saved!!!")
    })
})

app.listen(process.env.PORT || 80, () => {
    console.log("Server is started on port 80")
})
