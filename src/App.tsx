import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import NewsPage from "./pages/NewsPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import AuthPage from "./pages/AuthPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
