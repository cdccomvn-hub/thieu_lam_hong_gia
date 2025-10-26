import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X, Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Types
interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image: string;
  category: string;
}

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface ComboPackage {
  id: number;
  name: string;
  price: number;
  features: string[];
}

// Mock Data
const products: Product[] = [
  { id: 1, name: 'Đầu Lân Truyền Thống', code: 'DL001', price: 5500000, image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400', category: 'Đầu lân' },
  { id: 2, name: 'Trống Lân Gỗ Hương', code: 'TL001', price: 3200000, image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400', category: 'Nhạc cụ' },
  { id: 3, name: 'Bộ Y Phục Múa Lân', code: 'YP001', price: 1800000, image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400', category: 'Trang phục' },
  { id: 4, name: 'Đầu Lân Huỳnh Kim', code: 'DL002', price: 6800000, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', category: 'Đầu lân' },
  { id: 5, name: 'Võ Phục Thiếu Lâm', code: 'VP001', price: 850000, image: 'https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=400', category: 'Trang phục' },
  { id: 6, name: 'Chiêng Đồng Thau', code: 'NC001', price: 1200000, image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400', category: 'Nhạc cụ' },
  { id: 7, name: 'Đầu Lân Lưu Bị', code: 'DL003', price: 5800000, image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400', category: 'Đầu lân' },
  { id: 8, name: 'Giày Võ Thuật', code: 'GT001', price: 450000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', category: 'Phụ kiện' },
  { id: 9, name: 'Roi Lân Truyền Thống', code: 'PK001', price: 320000, image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400', category: 'Phụ kiện' },
  { id: 10, name: 'Đầu Lân Quan Công', code: 'DL004', price: 7200000, image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400', category: 'Đầu lân' },
  { id: 11, name: 'Khăn Võ Sư', code: 'PK002', price: 180000, image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=400', category: 'Phụ kiện' },
  { id: 12, name: 'Trống Lân Nhỏ', code: 'TL002', price: 2100000, image: 'https://images.unsplash.com/photo-1519683384663-0c3bed270f04?w=400', category: 'Nhạc cụ' },
];

const news: NewsItem[] = [
  { id: 1, title: 'Đội Lân Thiếu Lâm Hồng Gia Giành Giải Nhất Tại Festival Lân Sư Rồng 2024', excerpt: 'Với màn trình diễn ấn tượng, đội đã xuất sắc giành giải cao nhất...', date: '15/10/2024', image: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=400' },
  { id: 2, title: 'Khai Giảng Lớp Võ Thiếu Lâm Cho Thiếu Nhi', excerpt: 'Chương trình đào tạo miễn phí cho trẻ em có hoàn cảnh khó khăn...', date: '10/10/2024', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400' },
  { id: 3, title: 'Biểu Diễn Lân Mừng Xuân Ất Tỵ 2025', excerpt: 'Đặt lịch sớm để được ưu đãi đặc biệt cho dịp Tết Nguyên Đán...', date: '05/10/2024', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400' },
];

const combos: ComboPackage[] = [
  { id: 1, name: 'Gói Cơ Bản', price: 3500000, features: ['Múa lân 30 phút', 'Đội ngũ 4 người', 'Âm thanh cơ bản', 'Trong bán kính 10km'] },
  { id: 2, name: 'Gói Tiêu Chuẩn', price: 6000000, features: ['Múa lân 60 phút', 'Đội ngũ 6 người', 'Âm thanh chuyên nghiệp', 'Múa rồng kết hợp', 'Trong bán kính 20km'] },
  { id: 3, name: 'Gói Cao Cấp', price: 10000000, features: ['Múa lân 90 phút', 'Đội ngũ 10 người', 'Âm thanh + ánh sáng', 'Múa rồng + võ thuật', 'Toàn quốc', 'Tặng kèm lì xì'] },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [shopPage, setShopPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const banners = [
    'https://images.unsplash.com/photo-1555169062-013468b47731?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=500&fit=crop',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'under2m' && p.price < 2000000) ||
      (priceFilter === '2to5m' && p.price >= 2000000 && p.price < 5000000) ||
      (priceFilter === 'over5m' && p.price >= 5000000);
    return matchesSearch && matchesPrice;
  });

  const productsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (shopPage - 1) * productsPerPage,
    shopPage * productsPerPage
  );

  const Header = () => (
    <header className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-red-700 text-xl">
              獅
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Thiếu Lâm Hồng Gia</h1>
              <p className="text-xs text-yellow-200">Lân Sư Rồng Truyền Thống</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            {['home', 'shop', 'about', 'booking', 'news', 'cart', 'login'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`hover:text-yellow-300 transition ${
                  currentPage === page ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                {page === 'home' && 'Trang chủ'}
                {page === 'shop' && 'Cửa hàng'}
                {page === 'about' && 'Giới thiệu'}
                {page === 'booking' && 'Đặt lịch'}
                {page === 'news' && 'Tin tức'}
                {page === 'cart' && (
                  <span className="flex items-center">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                      <span className="ml-1 bg-yellow-400 text-red-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {cartCount}
                      </span>
                    )}
                  </span>
                )}
                {page === 'login' && <User size={20} />}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            {['home', 'shop', 'about', 'booking', 'news', 'cart', 'login'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-red-600 rounded"
              >
                {page === 'home' && 'Trang chủ'}
                {page === 'shop' && 'Cửa hàng'}
                {page === 'about' && 'Giới thiệu'}
                {page === 'booking' && 'Đặt lịch'}
                {page === 'news' && 'Tin tức'}
                {page === 'cart' && `Giỏ hàng (${cartCount})`}
                {page === 'login' && 'Đăng nhập'}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );

  const Footer = () => (
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

  const HomePage = () => (
    <div>
      <div className="relative h-96 overflow-hidden">
        {banners.map((banner, idx) => (
          <img
            key={idx}
            src={banner}
            alt={`Banner ${idx + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              idx === bannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
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
            Đội Lân Sư Rồng Thiếu Lâm Hồng Gia được thành lập với sứ mệnh bảo tồn và phát triển nghệ thuật múa lân truyền thống Việt Nam. Với đội ngũ võ sư giàu kinh nghiệm và tâm huyết, chúng tôi mang đến những màn trình diễn đỉnh cao, kết hợp giữa võ thuật và nghệ thuật múa lân đầy ấn tượng.
          </p>
        </div>

        <h3 className="text-3xl font-bold text-red-800 mb-8 text-center">Sản Phẩm Nổi Bật</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-red-800 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">Mã: {product.code}</p>
                <p className="text-orange-600 font-bold text-lg mb-3">
                  {product.price.toLocaleString('vi-VN')}đ
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded hover:from-red-700 hover:to-orange-600 transition"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ShopPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8">Cửa Hàng</h2>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc mã sản phẩm..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShopPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <select
          value={priceFilter}
          onChange={(e) => {
            setPriceFilter(e.target.value);
            setShopPage(1);
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="all">Tất cả mức giá</option>
          <option value="under2m">Dưới 2 triệu</option>
          <option value="2to5m">2 - 5 triệu</option>
          <option value="over5m">Trên 5 triệu</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-red-800 mb-1 text-sm">{product.name}</h4>
              <p className="text-xs text-gray-600 mb-2">Mã: {product.code}</p>
              <p className="text-orange-600 font-bold mb-3">{product.price.toLocaleString('vi-VN')}đ</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded hover:from-red-700 hover:to-orange-600 transition text-sm"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setShopPage(Math.max(1, shopPage - 1))}
            disabled={shopPage === 1}
            className="p-2 rounded bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setShopPage(page)}
              className={`px-4 py-2 rounded ${
                shopPage === page
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setShopPage(Math.min(totalPages, shopPage + 1))}
            disabled={shopPage === totalPages}
            className="p-2 rounded bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );

  const AboutPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-red-800 mb-8 text-center">Giới Thiệu</h2>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Lịch Sử Hình Thành</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Đội Lân Sư Rồng Thiếu Lâm Hồng Gia được thành lập vào năm 2004 bởi Võ sư Nguyễn Văn Hùng, người đã theo học võ thuật Thiếu Lâm hơn 30 năm. Khởi đầu chỉ với 5 thành viên, đội đã không ngừng phát triển và nay có hơn 50 võ sinh tại các chi nhánh trên khắp cả nước.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi tự hào là một trong những đội lân sư rồng uy tín nhất tại Việt Nam, với nhiều giải thưởng cao quý trong và ngoài nước. Đội đã từng biểu diễn tại các sự kiện lớn như Festival Huế, Lễ hội Đền Hùng, và nhiều sự kiện quốc tế tại Singapore, Malaysia, và Trung Quốc.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Triết Lý & Giá Trị</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-bold text-orange-600 mb-2">Truyền Thống</h4>
              <p className="text-gray-700">Bảo tồn và phát huy nghệ thuật múa lân truyền thống Việt Nam</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-bold text-orange-600 mb-2">Chuyên Nghiệp</h4>
              <p className="text-gray-700">Đào tạo và trình diễn với tiêu chuẩn quốc tế cao nhất</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-bold text-orange-600 mb-2">Cộng Đồng</h4>
              <p className="text-gray-700">Xây dựng môi trường lành mạnh cho thanh thiếu niên</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-bold text-orange-600 mb-2">Sáng Tạo</h4>
              <p className="text-gray-700">Kết hợp truyền thống với yếu tố hiện đại độc đáo</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Mục Tiêu Phát Triển</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Mở rộng mạng lưới đào tạo ra 63 tỉnh thành trên cả nước vào năm 2030</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Đào tạo miễn phí cho 1000 trẻ em có hoàn cảnh khó khăn mỗi năm</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Tham gia các giải đấu quốc tế và giành huy chương vàng châu Á</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Xây dựng trung tâm văn hóa võ thuật hiện đại phục vụ cộng đồng</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Số hóa và lưu trữ các động tác múa lân truyền thống cho thế hệ tương lai</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const NewsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8">Tin Tức</h2>

      <div className="bg-yellow-50 border-l-4 border-red-600 p-4 mb-8">
        <h3 className="text-xl font-bold text-red-700 mb-2">Tin Mới Nhất</h3>
        <p className="text-gray-700">{news[0].title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-orange-600 mb-2">{item.date}</p>
              <h4 className="font-bold text-red-800 mb-3 text-lg">{item.title}</h4>
              <p className="text-gray-700 mb-4">{item.excerpt}</p>
              <button className="text-red-600 hover:text-red-800 font-semibold">
                Đọc thêm →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CartPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-800 mb-8">Giỏ Hàng</h2>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-xl">Giỏ hàng trống</p>
          <button
            onClick={() => setCurrentPage('shop')}
            className="mt-4 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-orange-600"
          >
            Mua sắm ngay
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <h4 className="font-semibold text-red-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">Mã: {item.code}</p>
                    <p className="text-orange-600 font-bold">{item.price.toLocaleString('vi-VN')}đ</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => updateQuantity(item.id, 0)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Xóa
                  </button>
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phương thức thanh toán
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                  <option>Chuyển khoản ngân hàng</option>
                  <option>Thanh toán khi nhận hàng</option>
                  <option>Ví điện tử MoMo</option>
                </select>
              </div>

              <button
                onClick={() => setCurrentPage('payment')}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const BookingPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      date: '',
      address: '',
      combo: '',
      note: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
      setFormData({ name: '', phone: '', email: '', date: '', address: '', combo: '', note: '' });
    };

    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Đặt Lịch Biểu Diễn</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="bg-gradient-to-br from-white to-orange-50 rounded-lg shadow-lg p-6 border-2 border-red-200 hover:border-red-500 transition"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-2">{combo.name}</h3>
              <p className="text-3xl font-bold text-orange-600 mb-6">
                {combo.price.toLocaleString('vi-VN')}đ
              </p>
              <ul className="space-y-2">
                {combo.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-red-700 mb-6">Thông Tin Đặt Lịch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Họ và tên <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Số điện thoại <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ngày diễn <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Chọn gói <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  value={formData.combo}
                  onChange={(e) => setFormData({ ...formData, combo: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Chọn gói dịch vụ</option>
                  {combos.map((combo) => (
                    <option key={combo.id} value={combo.name}>
                      {combo.name} - {combo.price.toLocaleString('vi-VN')}đ
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Địa chỉ biểu diễn <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ghi chú</label>
              <textarea
                rows={4}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Yêu cầu đặc biệt..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold text-lg"
            >
              Đặt lịch ngay
            </button>
          </form>
        </div>
      </div>
    );
  };

  const PaymentPage = () => (
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
            {cart.map((item) => (
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

  const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoggedIn(true);
      alert('Đăng nhập thành công!');
      setCurrentPage('home');
    };

    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      if (registerData.password !== registerData.confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
      }
      alert('Đăng ký thành công!');
      setIsLogin(true);
    };

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 font-semibold ${
                isLogin
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } rounded-l-lg`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 font-semibold ${
                !isLogin
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } rounded-r-lg`}
            >
              Đăng ký
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold"
              >
                Đăng nhập
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên</label>
                <input
                  type="text"
                  required
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
                <input
                  type="password"
                  required
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  required
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold"
              >
                Đăng ký
              </button>
            </form>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      
      <main className="min-h-screen">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'booking' && <BookingPage />}
        {currentPage === 'news' && <NewsPage />}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'payment' && <PaymentPage />}
        {currentPage === 'login' && <LoginPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;