import React from "react";

const SignupModal = ({ isOpen, onClose }) => {
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
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg py-3 px-8 rounded-xl font-semibold">Sign Up</div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 pb-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-2">Join the Adventure!</h2>
            <p className="text-gray-400 mb-6">Create your account to start your journey</p>

            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                placeholder="Confirm your password"
              />
            </div>

            {/* Terms Agreement */}
            <label className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1 rounded border-gray-600 text-purple-400 focus:ring-purple-400 focus:ring-offset-0" />
              <span className="text-sm text-gray-400">
                I agree to the <button className="text-purple-400 hover:text-purple-300 underline">Terms of Service</button> and <button className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</button>
              </span>
            </label>

            {/* Sign Up Button */}
            <button className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-300 hover:to-pink-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
