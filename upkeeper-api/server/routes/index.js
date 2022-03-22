const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes");
const db = require("../configs/db.config");

router.use("/users", userRouter(db));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
