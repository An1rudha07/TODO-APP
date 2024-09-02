const express = require('express');
const mongoose = require("mongoose");
const { z } = require("zod");

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:odpnqtN1BQmjZFWP@cluster0.svcbp9h.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0/todos");

// Define the todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};