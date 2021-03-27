const mongoose = require("mongoose");
const Product = mongoose.model("products");
const { body, validationResult } = require("express-validator");

exports.getProducts = (req, res, next) => {
  Product.find().exec((err, products) => {
    if (err) console.error(err);
    res.status(200).send(products);
  });
};

exports.createProduct = [
  body("name", "Specify product name.").trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    const product = {
      name: req.body.name,
      description: req.body.description,
    };

    if (!errors.isEmpty()) return;
    else {
      Product.create(product, (err) => {
        if (err) console.error(err);
        console.log(`Product create: ${product.name}`);
        //res.redirect("/");
      });
    }
  },
];

exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  let product = await Product.findByIdAndUpdate(id, req.body);
  return res.status(202).send({
    error: false,
    product,
  });
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err, product) => {
    if (err) console.error(err);
    console.log(`Product deleted: ${product.name}`);
    //res.redirect("/");
  });
};
