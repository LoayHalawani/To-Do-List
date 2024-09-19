const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes
//add a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//edit a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const editTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo updated successfully!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("Todo deleted successfully!");
  } catch (err) {
    console.error(err.message);
  }
});

//mark or un-mark a todo as complete
app.put("/todos/:id/complete", async (req, res) => {
  try {
    const { id } = req.params;
    const { is_complete } = req.body;

    const updatedTodo = await pool.query(
      "UPDATE todo SET is_complete = $1 WHERE todo_id = $2 RETURNING *",
      [is_complete, id]
    );

    res.json("Todo status updated successfully!");
  } catch (err) {
    console.error(err.message);
  }
});

//filter todos
app.get("/todos", async (req, res) => {
  try {
    const { filter } = req.query;

    let todos;

    if (filter === "complete") {
      todos = await pool.query("SELECT * FROM todo WHERE is_complete = true");
    } else if (filter === "active") {
      todos = await pool.query("SELECT * FROM todo WHERE is_complete = false");
    } else {
      todos = await pool.query("SELECT * FROM todo");
    }

    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
