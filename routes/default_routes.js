const router = require("express").Router();

const controller = require("../controllers/default_controller.js");

router.get("/", controller.render_index);

router.get("/puppy/:navn", controller.puppy_render);

router.post("/", controller.destroy_session)

module.exports = router;