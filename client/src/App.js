import "./App.css";
import React, { useState, useEffect } from "react";

import productService from "./services/productService";
import { CreateProductForm } from "./components/CreateProductForm";
import { DeleteProductButton } from "./components/DeleteProductButton";

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  });

  const getProducts = () => {
    productService.getAll().then((res) => setProducts(res));
  };

  const deleteProduct = async (id) => {
    productService.deleteProduct(id).then(() => getProducts());
  };

  const renderProducts = (product) => (
    <li key={product._id} className="list__item product">
      <h3 className="product__name">
        {product.name}{" "}
        <DeleteProductButton deleteMe={() => deleteProduct(product._id)} />{" "}
      </h3>
      <p className="product__description">{product.description}</p>
    </li>
  );

  return (
    <div className="App">
      <ul className="list">
        {products && products.length > 0 ? (
          products.map((product) => renderProducts(product))
        ) : (
          <p>No products Found</p>
        )}
      </ul>
      <CreateProductForm updateProducts={getProducts} />
    </div>
  );
}

export default App;
