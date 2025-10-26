import React from "react";

const AboutPage: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-red-800 mb-8 text-center">Giới Thiệu</h2>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 shadow-lg mb-8">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Lịch Sử Hình Thành</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Đội Lân Sư Rồng Thiếu Lâm Hồng Gia được thành lập vào năm 2004...
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Triết Lý & Giá Trị</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Truyền Thống","Chuyên Nghiệp","Cộng Đồng","Sáng Tạo"].map((title, i) => (
            <div key={i} className="border-l-4 border-red-600 pl-4">
              <h4 className="font-bold text-orange-600 mb-2">{title}</h4>
              <p className="text-gray-700">Mô tả ngắn gọn về {title.toLowerCase()}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Mục Tiêu Phát Triển</h3>
        <ul className="space-y-3 text-gray-700">
          {[
            "Mở rộng mạng lưới đào tạo ra 63 tỉnh thành",
            "Đào tạo miễn phí cho 1000 trẻ em mỗi năm",
            "Giành huy chương vàng châu Á",
            "Xây dựng trung tâm văn hóa võ thuật",
            "Số hóa và lưu trữ các động tác múa lân"
          ].map((t,i)=>(
            <li key={i} className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span><span>{t}</span></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default AboutPage;
