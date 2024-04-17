import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex flex-wrap justify-center gap-4">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            user={item}
            id={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
