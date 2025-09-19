import Product from "../models/productModel.js"

class ProductService {
  // Get all products
  static async getAll() {
    return await Product.find();
  }

  static async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  static async getById(id) {
    return await Product.findById(id);
  }

  static async update(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default ProductService;