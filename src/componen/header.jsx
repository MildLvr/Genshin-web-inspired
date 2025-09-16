import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-genshin.png";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { name: "Home", target: "hero-section" },
    { name: "Character", target: "content-section" },
    { name: "Features", target: "game-features" },
    { name: "Contact", target: "footer-section" },
  ];

  // Functions to handle modals
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openSignUpModal = () => {
    setShowSignupModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg" : "bg-slate-900/95 border-b border-slate-700/50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={logo} alt="logo genshin" className={`object-contain transition-all duration-500 ${isScrolled ? "h-14" : "h-14"}`} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.target)} className={`font-medium transition-all duration-500 relative group ${isScrolled ? "text-white/90 hover:text-white" : "text-slate-200 hover:text-white"}`}>
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 shadow-sm ${
                      isScrolled ? "bg-gradient-to-r from-white via-blue-200 to-purple-300" : "bg-gradient-to-r from-amber-400 to-orange-500"
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Login Button */}
              <button
                onClick={openLoginModal}
                className={`px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-500 shadow-md ${
                  isScrolled ? "bg-transparent text-white border border-white hover:bg-white/20" : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Login
              </button>
              {/* Signup Button */}
              <button
                onClick={openSignUpModal}
                className={`px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-500 shadow-md ${
                  isScrolled ? "bg-transparent text-white border border-white hover:bg-white/20" : "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-container md:hidden relative">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg transition-all duration-500 relative z-50 ${isScrolled ? "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20" : "bg-slate-800/50 hover:bg-slate-700/50"}`}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? "bg-white/90" : "bg-slate-300"} ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}></span>
                  <span className={`block w-5 h-0.5 my-1 transition-all duration-300 ${isScrolled ? "bg-white/90" : "bg-slate-300"} ${isMenuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block w-5 h-0.5 transition-all duration-300 ${isScrolled ? "bg-white/90" : "bg-slate-300"} ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
                </div>
              </button>

              {/* Mobile Menu Dropdown */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 z-[60]">
                  <div className={`rounded-2xl shadow-2xl border ${isScrolled ? "bg-slate-900/95 backdrop-blur-xl border-white/20" : "bg-slate-900/98 backdrop-blur-xl border-slate-600/50"}`}>
                    {/* Mobile Navigation Links */}
                    <div className="px-4 py-3">
                      {navigationItems.map((item, index) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.target)}
                          className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] ${
                            isScrolled ? "text-white/90 hover:text-white hover:bg-white/10" : "text-slate-200 hover:text-white hover:bg-slate-800/50"
                          } ${index < navigationItems.length - 1 ? "mb-1" : ""}`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>

                    {/* Mobile CTA Buttons */}
                    <div className="px-4 pb-4 pt-2 border-t border-white/10 space-y-3">
                      <button
                        onClick={openLoginModal}
                        className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] ${
                          isScrolled ? "bg-transparent text-white border border-white hover:bg-white/20" : "bg-white text-black hover:bg-gray-200"
                        }`}
                      >
                        Login
                      </button>
                      <button
                        onClick={openSignUpModal}
                        className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] ${
                          isScrolled ? "bg-transparent text-white border border-white hover:bg-white/20" : "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300"
                        }`}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />}
      </header>

      {/* Separate Modals */}
      <LoginModal isOpen={showLoginModal} onClose={closeLoginModal} />
      <SignupModal isOpen={showSignupModal} onClose={closeSignupModal} />
    </>
  );
};

export default Header;
