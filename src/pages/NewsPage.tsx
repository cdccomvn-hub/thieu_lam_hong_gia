import React from "react";
import { news } from "../data/mockData";

const NewsPage: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-red-800 mb-8">Tin Tức</h2>

    <div className="bg-yellow-50 border-l-4 border-red-600 p-4 mb-8">
      <h3 className="text-xl font-bold text-red-700 mb-2">Tin Mới Nhất</h3>
      <p className="text-gray-700">{news[0].title}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <p className="text-sm text-orange-600 mb-2">{item.date}</p>
            <h4 className="font-bold text-red-800 mb-3 text-lg">{item.title}</h4>
            <p className="text-gray-700 mb-4">{item.excerpt}</p>
            <button className="text-red-600 hover:text-red-800 font-semibold">Đọc thêm →</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NewsPage;
