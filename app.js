var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var indexRoutes = require("./routes/index");

app.use("/", indexRoutes);



app.get("/lost_and_found", function(req, res){
    res.render("lost_and_found");
});

app.get("/lost_and_found_map", function(req, res){
    res.render("lost_and_found_map");
});

app.listen(3000, function () {
   console.log("The iManager Server Started at 3000");
});


