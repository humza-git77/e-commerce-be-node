import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true, // Let MongoDB generate it
      required: true
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true
    },
    image: {
      type: String
    },

    price: {
    type: Number,
    // get: (v) => (v / 100).toFixed(2), // Convert cents to dollars
    // set: (v) => Math.round(v * 100) ,   // Convert dollars to cents
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'Price must be positive'
      }
    },
    currency: {
      type: String,
      default: 'USD',
      enum: ['USD', 'EUR', 'GBP', 'JPY']
    }
    },
  { timestamps: true } // adds createdAt, updatedAt
);

const Product = mongoose.model("Product", productSchema);

export default Product;
