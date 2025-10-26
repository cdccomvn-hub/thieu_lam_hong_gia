import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-red-800 mb-8">Giỏ Hàng</h2>
        <div className="text-center py-16">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-xl">Giỏ hàng trống</p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-4 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-orange-600"
          >
            Mua sắm ngay
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8">Giỏ Hàng</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h4 className="font-semibold text-red-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">Mã: {item.code}</p>
                  <p className="text-orange-600 font-bold">{item.price.toLocaleString('vi-VN')}đ</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">-</button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">+</button>
                </div>
                <button onClick={() => updateQuantity(item.id, 0)} className="ml-4 text-red-600 hover:text-red-800">Xóa</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h3 className="text-xl font-bold text-red-800 mb-4">Thanh toán</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính:</span>
                <span className="font-semibold">{cartTotal.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phí vận chuyển:</span>
                <span className="font-semibold text-green-600">Miễn phí</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="font-bold text-lg">Tổng cộng:</span>
                <span className="font-bold text-xl text-red-600">{cartTotal.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phương thức thanh toán</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                <option>Chuyển khoản ngân hàng</option>
                <option>Thanh toán khi nhận hàng</option>
                <option>Ví điện tử MoMo</option>
              </select>
            </div>

            <button onClick={() => navigate("/payment")} className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
