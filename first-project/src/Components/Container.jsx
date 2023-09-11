import React from "react";

const Container = ({all, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{ textDecoration: all.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{all.text}</p>
        <p className="category">({all.category})</p>
      </div>
      <div>
        <button className="complete" onClick={()=> completeTodo(all.id)}>Completar</button>
        <button className="remove" onClick={()=> removeTodo(all.id)}>x</button>
      </div>
    </div>
  );
};

export default Container;
