const router = require("express").Router();

const controller = require("../controllers/default_controller.js")

router.get("/", controller.render_index)

module.exports = router