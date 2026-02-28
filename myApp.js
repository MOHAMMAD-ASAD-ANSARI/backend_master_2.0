let express = require("express");
let app = express();
console.log(__dirname + "/views/index.html");
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
app.use(__dirname + "/public", express.static());

module.exports = app;