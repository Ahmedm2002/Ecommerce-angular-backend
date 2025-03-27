import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    descirption: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
    productId: {
      type: String,
      required: true,
      unique: true,
    },
  },

  { timestamps: true }
);

export const Product = mongoose.model("Products", productSchema);
