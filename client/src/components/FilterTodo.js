import React from "react";

const FilterTodo = ({ filter, setFilter }) => {
  return (
    <div className="mt-5">
      <button
        className={`btn ${
          filter === "all" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`btn mx-3 ${
          filter === "complete" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setFilter("complete")}
      >
        Complete
      </button>
      <button
        className={`btn ${
          filter === "active" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
    </div>
  );
};

export default FilterTodo;
