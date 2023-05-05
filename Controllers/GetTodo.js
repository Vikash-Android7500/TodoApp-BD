const Todo = require("../Models/Todo");

exports.GetTodo = async(req, res) => {
     try {
          const todos = await Todo.find({});
          //Data Response
          res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is Fetched",
          });
     } 
     catch (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            message: error.message,
            message: "Server Error"
          });
          
     }
}