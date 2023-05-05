const Todo = require("../Models/Todo");

exports.UpdateTodo = async (req, res) => {
  try {
     const {id} = req.params;
     const {title, description} = req.body;

     const todo = await Todo.findByIdAndUpdate(
          {_id: id},
          {title, description, updateAt: Date.now()},
     )

     res.status(200).json({
          success: true,
          data: todo,
          message: `Updated successfully`
     })
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
