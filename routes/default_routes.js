const router = require("express").Router();

const controller = require("../controllers/default_controller.js");

const {authenticate} = require("../middleware/authenticate.js")

router.get("/", authenticate ,controller.render_index);

router.get("/puppy/:navn", authenticate, controller.puppy_render);

module.exports = router;