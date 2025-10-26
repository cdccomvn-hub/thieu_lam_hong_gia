import React from "react";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  const [registerData, setRegisterData] = React.useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Đăng nhập thành công!");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    alert("Đăng ký thành công!");
    setIsLogin(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex mb-6">
          <button onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-semibold ${isLogin ? "bg-gradient-to-r from-red-600 to-orange-500 text-white" : "bg-gray-200 text-gray-700"} rounded-l-lg`}>
            Đăng nhập
          </button>
          <button onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-semibold ${!isLogin ? "bg-gradient-to-r from-red-600 to-orange-500 text-white" : "bg-gray-200 text-gray-700"} rounded-r-lg`}>
            Đăng ký
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" required value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
              <input type="password" required value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold">
              Đăng nhập
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên</label>
              <input required value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" required value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
              <input type="password" required value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Xác nhận mật khẩu</label>
              <input type="password" required value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg hover:from-red-700 hover:to-orange-600 font-semibold">
              Đăng ký
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
