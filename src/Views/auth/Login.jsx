import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate('/');
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card with animation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp">

          {/* Logo with animation */}
          {/* <div className="flex justify-center mb-8 animate-fadeInDown">
            <div className="text-center">
              <div className="inline-block border-4 border-blue-600 rounded-lg px-8 py-4 mb-2">
                <h1 className="text-3xl font-bold text-blue-600 tracking-wider">POMPANO</h1>
                <p className="text-gray-400 text-sm tracking-widest font-light">BEACH REALTY</p>
              </div>
            </div>
          </div> */}

          {/* Welcome Text with animation */}
          <div className="text-center mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to your personal CRM!
            </h2>
            <p className="text-gray-500 text-sm">
              Please sign-in to your account and start the adventure
            </p>
          </div>

          {/* Form with staggered animations */}
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>

            {/* Email Field */}
            <div className="mb-5 animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-400"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-2 animate-slideInRight" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-indigo-600 text-sm hover:text-indigo-700 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <MdVisibilityOff className="text-xl" />
                  ) : (
                    <MdVisibility className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] mt-6 animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              Sign in
            </button>
          </form>

        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out both;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Login;