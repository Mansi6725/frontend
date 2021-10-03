var express = require('express');
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var register = require("../controller/register");
/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = "aditya";
  res.render('index', { title: 'Express' });
});

router.get("/test", function(req,res,next) {
  console.log("Redis value", req.session.username);
})
router.post("/register", registerInitialCheck, register);

module.exports = router;