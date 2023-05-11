const express = require("express");

let router = express.Router();

const { home, about, contact, logIn, carrito } = require("../controllers/mainController");

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.get("/logIn",logIn);
router.get("/carrito", carrito);

module.exports = router;