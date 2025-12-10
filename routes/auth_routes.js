const router = require("express").Router();
const controller = require("../controllers/authController.js")


router.get("/login", controller.render_login)

router.post("/login", controller.login_user)

module.exports = router