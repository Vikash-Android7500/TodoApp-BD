const Todo = require("../Models/Todo");

exports.CreateTodo = async(req, res) => {
     try {
       const {title, description} = req.body;
       const response = await Todo.create({title, description});
       res.status(200).json(
          {
               success: title,
               data: response,
               message: 'Entry Created successfully'
          }
       );
     }
     catch (errer) {
          console.error(errer);
          console.log(errer);
          res.status(500)
          .json({
               success: false,
               data: 'internal Server Errer',
               message: errer.message
          });
     }
}