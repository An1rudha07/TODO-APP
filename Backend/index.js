const { Todo  } = require("./db/db");
const express = require('express');
const app = express();
const {userTodo,updateTodo } = require("./types")
const cors = require("cors");

app.use(express.json());
app.use(cors());

// POST /todo: Create a new todo
app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = userTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            message: "You sent the Wrong Input"
        });
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        message: "YOUR TODO HAS BEEN CREATED"
    });
});

// GET /todos: Get all todos
app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// PUT /completed: Mark a todo as completed
app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            message: "You sent the Wrong Input"
        });
    }

    await Todo.updateOne({ _id: req.body.id }, {
        completed: true
    });

    res.json({
        message: "Todo marked as completed"
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});