const express = require("express");
const router = express.Router();

const { CreateTodo } = require("../Controllers/CreateTodo");
const { GetTodo} = require("../Controllers/GetTodo");
const { GetTodoById } = require("../Controllers/GetTodoById");
const { UpdateTodo } = require("../Controllers/UpdateTodo");
const { DeleteTodo } = require("../Controllers/DeleteTodo");

router.post('/CreateTodo', CreateTodo);
router.get('/GetTodo', GetTodo);
router.get('/GetTodo/:id', GetTodoById);
router.put('/UpdateTodo/:id', UpdateTodo);
router.delete('/DeleteTodo/:id', DeleteTodo);



module.exports = router;