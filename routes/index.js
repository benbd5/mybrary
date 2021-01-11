const expres = require("express");
const router = expres.Router();

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
