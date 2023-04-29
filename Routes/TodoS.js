const express = require("express");
const router = express.Router();
const { CreateTodo } = require("../Controllers/CreateTodo");

router.post('/CreateTodo', CreateTodo);

module.exports = router;