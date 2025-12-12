const router = require("express").Router();
const controller = require("../controllers/authController.js")


router.get("/login", controller.render_login)

router.post("/login", controller.login_user)

router.get("/logout", controller.logout_user)

module.exports = router