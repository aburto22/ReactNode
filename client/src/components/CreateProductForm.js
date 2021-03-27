import axios from "axios";
import React, { useState } from "react";

export const CreateProductForm = ({ updateProducts }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: "/api/product",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: name,
        description: description,
      },
      timeout: 1000,
    }).catch((err) => console.error(err));

    setName("");
    setDescription("");

    updateProducts();
  };

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Create product
      </button>
    </form>
  );
};
