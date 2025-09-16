import React from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={handleBackdropClick}>
      <div className="relative w-full max-w-md mx-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-all duration-200 z-10 border border-white/20 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-0">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg py-3 px-8 rounded-xl font-semibold">Login</div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 pb-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
            <p className="text-gray-400 mb-6">Sign in to continue your adventure</p>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-600 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-0" />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Forgot password?</button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
