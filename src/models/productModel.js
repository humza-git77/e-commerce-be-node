import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Please add a name"],
      trim: true
    },
    image: {
      type: String
    },
    price: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true } // adds createdAt, updatedAt
);

const Product = mongoose.model("Product", productSchema);

export default Product;
