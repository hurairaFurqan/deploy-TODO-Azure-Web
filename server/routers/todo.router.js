// const express = require("express");
// const router = express.Router();
// const todoController = require("../controllers/todo.controller");

// router.post("/todos", todoController.todoAdd)

// module.exports = router

// routes/todos.js
const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");

// Get All Todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add Todo
router.post("/", async (req, res) => {
    const todo = new Todo({
        name: req.body.name,
        author: req.body.author,
      isComplete: req.body.isComplete,
  });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update Todo
router.put("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
      if (!todo) return res.status(404).json({ message: "Todo not found" });

      todo.name = req.body.name || todo.name;
      todo.isComplete = req.body.isComplete || todo.isComplete;

      const updatedTodo = await todo.save();
      res.json(updatedTodo);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Delete Todo
router.delete("/:id", async (req, res) => {
    try {
        // Use deleteOne with a filter
        const result = await Todo.deleteOne({ _id: req.params.id });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Todo not found" });
    }

      res.json({ message: "Todo deleted successfully" });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

      todo.isComplete =
          req.body.isComplete !== undefined
              ? req.body.isComplete
              : !todo.isComplete;

        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;
