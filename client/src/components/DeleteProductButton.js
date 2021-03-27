import React from "react";

export const DeleteProductButton = ({ deleteMe }) => {
  return (
    <button type="button" onClick={deleteMe} className="deleteButton">
      Delete Me
    </button>
  );
};
