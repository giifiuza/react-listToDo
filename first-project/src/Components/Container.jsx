import React from "react";

const Container = ({all}) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{all.text}</p>
        <p className="category">({all.category})</p>
      </div>
      <div>
        <button className="complete">Completar</button>
        <button className="remove">x</button>
      </div>
    </div>
  );
};

export default Container;
