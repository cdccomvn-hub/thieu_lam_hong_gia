import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white mt-16">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Thiếu Lâm Hồng Gia</h3>
          <p className="text-sm">Đội lân sư rồng chuyên nghiệp với hơn 20 năm kinh nghiệm</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Liên hệ</h3>
          <p className="text-sm">Điện thoại: 0912 345 678</p>
          <p className="text-sm">Email: contact@thieulam.vn</p>
          <p className="text-sm">Địa chỉ: Hà Nội, Việt Nam</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Giờ làm việc</h3>
          <p className="text-sm">Thứ 2 - Thứ 7: 8:00 - 20:00</p>
          <p className="text-sm">Chủ nhật: 9:00 - 18:00</p>
        </div>
      </div>
      <div className="border-t border-red-700 mt-8 pt-4 text-center text-sm">
        <p>© 2024 Thiếu Lâm Hồng Gia. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
