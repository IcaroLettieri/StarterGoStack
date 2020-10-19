const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

// GET
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);

// POST
routes.post("/products", ProductController.store);

// PUT
routes.put("/products/:id", ProductController.update);

// DELETE
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;