import ProductService from "../services/productService.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await ProductService.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};