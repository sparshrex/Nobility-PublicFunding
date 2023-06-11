const express = require("express");
const app = express();
const { products } = require("./data");
const logger = require("./logger");
const authorize = require("./authorize");
app.use([logger, authorize]);
app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) res.status(404).send("Resource not found");
  res.json(singleProduct);
});
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((sortedProduct) => {
      return sortedProduct.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
