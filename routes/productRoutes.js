const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/api/product", getProducts);
router.post("/api/product", createProduct);
router.put("/api/product/:id", updateProduct);
router.delete("/api/product/:id", deleteProduct);

module.exports = router;
