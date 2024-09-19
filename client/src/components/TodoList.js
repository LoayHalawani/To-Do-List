import React, { Fragment, useState, useEffect } from "react";

import InputTodo from "./InputTodo";
import FilterTodo from "./FilterTodo";
import EditTodo from "./EditTodo";

const TodoList = () => {
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (description) => {
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      fetchTodos(filter);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchTodos = async (filter) => {
    try {
      const response = await fetch(
        `http://localhost:5000/todos?filter=${filter}`
      );
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onToggleComplete = async (id, isComplete) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}/complete`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_complete: isComplete }),
      });
      fetchTodos(filter);
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateTodo = async (id, description) => {
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      fetchTodos(filter);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      fetchTodos(filter);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchTodos(filter);
  }, [filter]);

  return (
    <Fragment>
      <InputTodo addTodo={addTodo} />
      <FilterTodo filter={filter} setFilter={setFilter} />
      <table className="table table-hover mt-5 text-center">
        <thead className="table-light">
          <tr>
            <th>Description</th>
            <th>Complete</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <input
                  className="form-check-input mt-2 p-2"
                  type="checkbox"
                  checked={todo.is_complete}
                  onChange={() =>
                    onToggleComplete(todo.todo_id, !todo.is_complete)
                  }
                />
              </td>
              <td>
                <EditTodo todo={todo} updateTodo={updateTodo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TodoList;
