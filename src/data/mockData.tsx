import type { Product, NewsItem, ComboPackage } from "../types/index";

export const products: Product[] = [
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

export const news: NewsItem[] = [
  { id: 1, title: 'Đội Lân Thiếu Lâm Hồng Gia Giành Giải Nhất Tại Festival Lân Sư Rồng 2024', excerpt: 'Với màn trình diễn ấn tượng, đội đã xuất sắc giành giải cao nhất...', date: '15/10/2024', image: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=400' },
  { id: 2, title: 'Khai Giảng Lớp Võ Thiếu Lâm Cho Thiếu Nhi', excerpt: 'Chương trình đào tạo miễn phí cho trẻ em có hoàn cảnh khó khăn...', date: '10/10/2024', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400' },
  { id: 3, title: 'Biểu Diễn Lân Mừng Xuân Ất Tỵ 2025', excerpt: 'Đặt lịch sớm để được ưu đãi đặc biệt cho dịp Tết Nguyên Đán...', date: '05/10/2024', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400' },
];

export const banners = [
  'https://images.unsplash.com/photo-1555169062-013468b47731?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=500&fit=crop',
];

export const combos: ComboPackage[] = [
  { id: 1, name: 'Gói Cơ Bản', price: 3500000, features: ['Múa lân 30 phút', 'Đội ngũ 4 người', 'Âm thanh cơ bản', 'Trong bán kính 10km'] },
  { id: 2, name: 'Gói Tiêu Chuẩn', price: 6000000, features: ['Múa lân 60 phút', 'Đội ngũ 6 người', 'Âm thanh chuyên nghiệp', 'Múa rồng kết hợp', 'Trong bán kính 20km'] },
  { id: 3, name: 'Gói Cao Cấp', price: 10000000, features: ['Múa lân 90 phút', 'Đội ngũ 10 người', 'Âm thanh + ánh sáng', 'Múa rồng + võ thuật', 'Toàn quốc', 'Tặng kèm lì xì'] },
];
