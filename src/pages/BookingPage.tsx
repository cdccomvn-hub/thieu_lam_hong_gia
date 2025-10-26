import React from "react";
import { combos } from "../data/mockData";

const BookingPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '', phone: '', email: '', date: '', address: '', combo: '', note: ''
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
    setFormData({ name: '', phone: '', email: '', date: '', address: '', combo: '', note: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Đặt Lịch Biểu Diễn</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {combos.map(c => (
          <div key={c.id} className="bg-gradient-to-br from-white to-orange-50 rounded-lg shadow-lg p-6 border-2 border-red-200 hover:border-red-500 transition">
            <h3 className="text-2xl font-bold text-red-700 mb-2">{c.name}</h3>
            <p className="text-3xl font-bold text-orange-600 mb-6">{c.price.toLocaleString("vi-VN")}đ</p>
            <ul className="space-y-2">
              {c.features.map((f, i) => (
                <li key={i} className="flex items-start"><span className="text-red-600 mr-2">✓</span><span className="text-gray-700">{f}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-red-700 mb-6">Thông Tin Đặt Lịch</h3>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên <span className="text-red-600">*</span></label>
            <input required value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Số điện thoại <span className="text-red-600">*</span></label>
              <input required value={formData.phone} onChange={e=>setFormData({...formData, phone:e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày diễn <span className="text-red-600">*</span></label>
              <input type="date" required value={formData.date} onChange={e=>setFormData({...formData, date:e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Chọn gói <span className="text-red-600">*</span></label>
              <select required value={formData.combo} onChange={e=>setFormData({...formData, combo:e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                <option value="">Chọn gói dịch vụ</option>
                {combos.map(c => <option key={c.id} value={c.name}>{c.name} - {c.price.toLocaleString('vi-VN')}đ</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Địa chỉ biểu diễn <span className="text-red-600">*</span></label>
            <input required value={formData.address} onChange={e=>setFormData({...formData, address:e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ghi chú</label>
            <textarea rows={4} value={formData.note} onChange={e=>setFormData({...formData, note:e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="Yêu cầu đặc biệt..." />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold text-lg">
            Đặt lịch ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
