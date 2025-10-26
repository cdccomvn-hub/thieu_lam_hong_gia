import React from "react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

const ProductCard: React.FC<{ product: Product; compact?: boolean }> = ({ product, compact }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className={compact ? "w-full h-40 object-cover" : "w-full h-48 object-cover"} />
      <div className="p-4">
        <h4 className={`font-semibold text-red-800 ${compact ? "mb-1 text-sm" : "mb-2"}`}>{product.name}</h4>
        <p className={`${compact ? "text-xs" : "text-sm"} text-gray-600 mb-2`}>Mã: {product.code}</p>
        <p className={`${compact ? "mb-3" : "mb-3"} text-orange-600 font-bold ${compact ? "" : "text-lg"}`}>
          {product.price.toLocaleString("vi-VN")}đ
        </p>
        <button
          onClick={() => addToCart(product)}
          className={`w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded hover:from-red-700 hover:to-orange-600 transition ${compact ? "text-sm" : ""}`}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
