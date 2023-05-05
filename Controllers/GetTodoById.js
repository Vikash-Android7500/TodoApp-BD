const Todo = require("../Models/Todo");


exports.GetTodoById = async (req, res) => {
     try {
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id});
        
        if (!todo) {
          return res.status(404).json({
               success: false,
               message: "No Data Found",
          });
        }

        res.status(200).json({
          success: true,
          data: todo,
          message: `Todo ${id} data successfully fetched`,
        });
     } 
     catch (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            message: error.message,
            message: "Server Error",
          });
     }
};
