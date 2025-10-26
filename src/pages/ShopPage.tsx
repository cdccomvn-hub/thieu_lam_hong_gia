import React from "react";
import { products as allProducts } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { Search } from "lucide-react";

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [priceFilter, setPriceFilter] = React.useState("all");
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    return allProducts.filter(p => {
      const s = searchTerm.toLowerCase();
      const matchesSearch = p.name.toLowerCase().includes(s) || p.code.toLowerCase().includes(s);
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under2m" && p.price < 2_000_000) ||
        (priceFilter === "2to5m" && p.price >= 2_000_000 && p.price < 5_000_000) ||
        (priceFilter === "over5m" && p.price >= 5_000_000);
      return matchesSearch && matchesPrice;
    });
  }, [searchTerm, priceFilter]);

  const perPage = 10;
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  React.useEffect(() => setPage(1), [searchTerm, priceFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8">Cửa Hàng</h2>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc mã sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="all">Tất cả mức giá</option>
          <option value="under2m">Dưới 2 triệu</option>
          <option value="2to5m">2 - 5 triệu</option>
          <option value="over5m">Trên 5 triệu</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {paginated.map(p => <ProductCard key={p.id} product={p} compact />)}
      </div>

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
};

export default ShopPage;
