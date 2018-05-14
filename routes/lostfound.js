var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.render("lostfound/index");
});

router.get("/map", function(req, res){
    res.render("lostfound/map");
});

router.get("/new", function (req, res) {
    res.render("lostfound/new");
});

module.exports = router;