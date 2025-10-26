import React from "react";
import { useCart } from "../context/CartContext";

const PaymentPage: React.FC = () => {
  const { cart, cartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Thanh Toán</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-red-700 mb-4">Quét mã QR để thanh toán</h3>
          <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="w-64 h-64 bg-white border-4 border-red-600 flex items-center justify-center">
                <p className="text-gray-500">QR Code</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 mb-2">Ngân hàng: Vietcombank</p>
            <p className="text-gray-700 mb-2">Số TK: 1234567890</p>
            <p className="text-gray-700 mb-2">Chủ TK: Thiếu Lâm Hồng Gia</p>
            <p className="text-red-600 font-bold">Nội dung: DH{Date.now()}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-red-700 mb-4">Chi Tiết Đơn Hàng</h3>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">SL: {item.quantity}</p>
                </div>
                <p className="font-semibold text-orange-600">
                  {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                </p>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tạm tính:</span>
                <span className="font-semibold">{cartTotal.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Phí vận chuyển:</span>
                <span className="font-semibold text-green-600">Miễn phí</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-red-600">
                <span>Tổng cộng:</span>
                <span>{cartTotal.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg hover:from-green-700 hover:to-green-600 font-semibold mt-4">
              Xác nhận đã thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
