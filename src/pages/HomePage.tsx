import React from "react";
import { banners, products } from "../data/mockData";
import ProductCard from "../components/ProductCard";

const HomePage: React.FC = () => {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <div className="relative h-96 overflow-hidden">
        {banners.map((b, i) => (
          <img key={i} src={b} alt={`Banner ${i + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-orange-900/70 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Thiếu Lâm Hồng Gia</h2>
            <p className="text-2xl text-yellow-300">Lân Sư Rồng Truyền Thống</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-red-800 mb-4 text-center">Về Chúng Tôi</h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Đội Lân Sư Rồng Thiếu Lâm Hồng Gia được thành lập với sứ mệnh bảo tồn và phát triển nghệ thuật múa lân truyền thống Việt Nam...
          </p>
        </div>

        <h3 className="text-3xl font-bold text-red-800 mb-8 text-center">Sản Phẩm Nổi Bật</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
