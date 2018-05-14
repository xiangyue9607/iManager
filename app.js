var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var indexRoutes = require("./routes/index");
var lostFoundRoutes = require("./routes/lostfound");

app.use("/", indexRoutes);
app.use("/lostfound", lostFoundRoutes);


app.listen(3000, function () {
   console.log("The iManager Server Started at 3000");
});


