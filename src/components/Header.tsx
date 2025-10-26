import React from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [open, setOpen] = React.useState(false);

  const navItem = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-red-700 text-xl">獅</div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Thiếu Lâm Hồng Gia</h1>
              <p className="text-xs text-yellow-200">Lân Sư Rồng Truyền Thống</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navItem("/", "Trang chủ")}
            {navItem("/shop", "Cửa hàng")}
            {navItem("/about", "Giới thiệu")}
            {navItem("/booking", "Đặt lịch")}
            {navItem("/news", "Tin tức")}
            <NavLink to="/cart" className="hover:text-yellow-300 transition">
              <span className="flex items-center">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="ml-1 bg-yellow-400 text-red-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </span>
            </NavLink>
            <NavLink to="/auth" className="hover:text-yellow-300 transition">
              <User size={20} />
            </NavLink>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(v => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-4 space-y-2">
            <div className="flex flex-col">
              {navItem("/", "Trang chủ")}
              {navItem("/shop", "Cửa hàng")}
              {navItem("/about", "Giới thiệu")}
              {navItem("/booking", "Đặt lịch")}
              {navItem("/news", "Tin tức")}
              <NavLink to="/cart" onClick={() => setOpen(false)} className="w-full text-left px-4 py-2 hover:bg-red-600 rounded">
                Giỏ hàng ({cartCount})
              </NavLink>
              {navItem("/auth", "Đăng nhập/Đăng ký")}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
