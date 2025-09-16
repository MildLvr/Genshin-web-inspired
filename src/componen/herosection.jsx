import React, { useState, useEffect } from "react";
import teenRateImage from "../assets/images/Teenrate.png";
import bg1 from "../assets/images/genshin-hero.png";
import bg2 from "../assets/images/genshin-hero2.jpeg";
import bg3 from "../assets/images/genshin-hero3.jpg";

const GenshinHeroLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const backgroundImages = [bg1, bg2, bg3];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundImages.length]);

  const handlePlayButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=7ggMwb5tXJQ", "_blank");
  };

  const handleDownloadClick = () => {
    window.open("https://genshin.hoyoverse.com/pc-launcher/#/", "_blank");
  };

  return (
    <div id="hero-section" className="min-h-screen relative overflow-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Background Images Fade + Parallax */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {backgroundImages.map((bg, index) => (
          <img
            key={index}
            src={bg}
            alt={`Genshin Background ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
            style={{
              transform: `translateY(${offsetY * 0.3}px)`, // parallax effect
            }}
          />
        ))}
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-black/50 to-blue-900/50 z-5"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        {/* Play Button */}
        <div className="mb-2">
          <button onClick={handlePlayButtonClick} className="group relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          </button>
        </div>

        {/* Title */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">The Journey Begins</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 italic" style={{ fontFamily: "Poppins, sans-serif" }}>
            a world waiting for you
          </h2>
        </div>

        {/* New Players Offer */}
        <div className={`text-center mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-2xl text-cyan-200 font-semibold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            New Players Get 20 Pulls
          </p>
          <button
            onClick={handleDownloadClick}
            className="group relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-400 text-white px-12 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Download</span>
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex space-x-4 z-20">
        {backgroundImages.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"}`} />
        ))}
      </div>

      {/* ESRB Rating */}
      <div className="absolute bottom-8 right-6 md:right-8">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <img src={teenRateImage} alt="TEEN Rating - Fantasy Violence" className="w-12 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default GenshinHeroLanding;
