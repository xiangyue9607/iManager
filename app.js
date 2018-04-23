var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var indexRoutes = require("./routes/index");

app.use("/", indexRoutes);

app.listen(3000, function () {
   console.log("The iManager Server Started at 3000");
});


