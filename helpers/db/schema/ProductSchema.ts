import mongoose from "mongoose";

// Define a Mongoose schema for the smartphone collection
const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stringPrice: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, required: true },
    discount_percent: { type: Number, required: true },
    quantity: { type: Number, required: true },
    images: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

// Define a Mongoose schema for the review subcollection
const reviewSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    rating: { type: Number, required: true },
    smartphone: { type: mongoose.Schema.Types.ObjectId, ref: "Smartphone" },
  },
  { timestamps: true }
);

// Define and export models
const Product =
  mongoose.models.products || mongoose.model("products", ProductSchema);
const ProductReview =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);
export default Product;
