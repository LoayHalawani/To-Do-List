import React, { Fragment, useState } from "react";

const InputTodo = ({ addTodo }) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    addTodo(description);
    setDescription("");
  };

  return (
    <Fragment>
      <h1 className="display-5 text-center mt-5">To-do List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="p-1 w-100"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn mx-3 btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
