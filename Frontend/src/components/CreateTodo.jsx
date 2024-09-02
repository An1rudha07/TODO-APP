import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            });

            if (response.ok) {
                alert("Todo added");
            } else {
                alert("Failed to add Todo");
            }
        } catch (error) {
            alert("An error occurred while adding the Todo");
        }
    };

    return (
        <div>
            <input
                style={{
                    margin: 10,
                    padding: 10,
                    justifyContent: "center"
                }}
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
            />
            <br />
            <input
                style={{
                    margin: 10,
                    padding: 10
                }}
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <br />
            <button
                style={{
                    margin: 10,
                    padding: 10
                }}
                onClick={handleSubmit}
            >
                Add Todo
            </button>
        </div>
    );
}
