const Todo = require("../Models/Todo");

exports.DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
   
    res.json({
      success: true,
      message: "Delete successfully Data",
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
