const express = require("express");
const { register, getAllUsers } = require("../controller/userController.js");

const router = express.Router();

router.post("/register", register);
router.get("/users",getAllUsers)

module.exports = router;
