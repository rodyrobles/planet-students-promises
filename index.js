var express = require ('express');
var app = express();

app.use("/archivos", express.static(__dirname + "/assets"));
app.use("/static", express.static(__dirname + "/node_modules"));

app.get("/", (req, res) => {
	res.sendFile(__dirname+"/index.html");
});
app.listen(8080);