import React, { useState, useRef, useEffect } from "react";

// Local images/image
const combatImg = "/public/asset/EpicCombatSystem.gif";
const worldImg = "/public/asset/VastOpenWorld.gif";
const multiplayerImg = "/public/asset/MultiplayerAdventures.gif";
const charactersImg = "/public/asset/Character.gif";
const strategyImg = "/public/asset/ElementalReactions.gif";
const eventsImg = "/public/asset/events.gif";

// Custom SVG Icons
const Sword = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="14.5,17.5 3,6 3,3 6,3 17.5,14.5"></polyline>
    <line x1="13" y1="19" x2="19" y2="13"></line>
    <line x1="16" y1="16" x2="20" y2="20"></line>
    <line x1="19" y1="21" x2="21" y2="19"></line>
  </svg>
);

const Atom = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="1"></circle>
    <path d="m20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5"></path>
    <path d="m15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5"></path>
    <path d="m9.9 9.9c-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5 4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5"></path>
  </svg>
);

const Users = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const Globe = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const Star = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
  </svg>
);

const Zap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
  </svg>
);

const GameFeature = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [imageError, setImageError] = useState({});
  const sectionRef = useRef(null);

  // Array gambar
  const featureImages = [combatImg, worldImg, multiplayerImg, charactersImg, strategyImg, eventsImg];

  // Game features data
  const features = [
    {
      id: 1,
      icon: <Sword size={32} />,
      title: "Epic Combat System",
      subtitle: "Master the Art of Battle",
      description: "Experience fluid combat mechanics with combo attacks, elemental reactions, and strategic gameplay that rewards skill and timing.",
      stats: ["100+ team combos", "7 elemental powers", "dynamic weather & environments"],
      gradient: "from-red-500 to-orange-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
    {
      id: 2,
      icon: <Globe size={32} />,
      title: "Vast Open World",
      subtitle: "Explore Without Limits",
      description: "Journey through stunning landscapes across seven nations, each rich with culture, mysteries, and unforgettable adventures.",
      stats: ["7 nations of teyvat", "1000+ unique landmarks", "endless discoveries"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      id: 3,
      icon: <Users size={32} />,
      title: "Multiplayer Adventures",
      subtitle: "Team Up with Friends",
      description: "Join forces with travelers worldwide in cooperative gameplay — explore domains, tackle weekly bosses, and share the journey across platforms.",
      stats: ["4-Player Co-op", "epic domains & bosses", "Cross-Platform Play"],
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      id: 4,
      icon: <Star size={32} />,
      title: "Character Collection",
      subtitle: "Build Your Dream Team",
      description: "assemble characters from across teyvat, each with unique abilities and personalities. combine their elements to trigger powerful reactions and build your perfect team.",
      stats: ["50+ playable characters", "elemental skills & bursts", "deep character stories"],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      id: 5,
      icon: <Atom size={32} />,
      title: "Elemental System",
      subtitle: "Master the power within",
      description: "Every element plays a vital role. combine them to trigger powerful reactions and take control of the battlefield.",
      stats: ["elemental reactions (melt, vaporize, overload, etc.", "elemental resonance (synergy between party elements)", "team rotations & combos"],
      gradient: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
    },
    {
      id: 6,
      icon: <Zap size={32} />,
      title: "Real-Time Events",
      subtitle: "Never Miss the Action",
      description: "Immerse yourself in limited-time events, seasonal festivals, and special challenges that keep teyvat alive and ever-evolving.",
      stats: ["limited-time events", "seasonal festivals", "exclusive rewards"],
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  const handleImageError = (index, feature) => {
    console.log(`Image failed to load: ${featureImages[index]}`);
    setImageError((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const getFallbackImage = (feature) => {
    const colors = {
      "Epic Combat System": "ff6b6b",
      "Vast Open World": "51cf66",
      "Multiplayer Adventures": "339af0",
      "Character Collection": "845ef7",
      "Strategic Gameplay": "495057",
      "Real-Time Events": "fab005",
    };
    const color = colors[feature.title] || "6366f1";
    return `https://via.placeholder.com/400x300/${color}/ffffff?text=${encodeURIComponent(feature.title)}`;
  };

  return (
    <div className="min-h-screen">
      <section id="game-features" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Game <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the incredible features that make our game an unforgettable adventure. Each element is crafted to deliver the ultimate gaming experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`group relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${
                  activeFeature === index ? `${feature.bgColor} ${feature.borderColor} border-2 shadow-2xl scale-105` : "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50"
                } rounded-xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>

                <div className="relative p-8 rounded-xl backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>{feature.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>{feature.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{feature.description}</p>

                  {/* Stats */}
                  <div className="space-y-2">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center text-xs text-gray-400">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0`}></div>
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* Active Indicator */}
                  {activeFeature === index && (
                    <div className="absolute top-4 right-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`}></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Highlight Section */}
          <div className={`bg-gradient-to-r ${features[activeFeature].gradient} rounded-2xl p-1 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="bg-gray-900 rounded-xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${features[activeFeature].gradient} text-white mr-6`}>{features[activeFeature].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
                      <p className={`text-lg bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent font-medium`}>{features[activeFeature].subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{features[activeFeature].description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {features[activeFeature].stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${features[activeFeature].gradient} mx-auto mb-2`}></div>
                        <p className="text-white text-sm font-medium">{stat}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden relative">
                    <img
                      src={featureImages[activeFeature]}
                      alt={features[activeFeature].title}
                      className="w-full h-full object-cover transition-all duration-700"
                      onLoad={() => console.log(`GIF loaded: ${features[activeFeature].title}`)}
                      onError={(e) => console.log(`Failed to load: ${e.target.src}`)}
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} opacity-5`}></div>
                  </div>

                  {/* Feature Progress Indicators */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeFeature === index ? `bg-gradient-to-r ${features[activeFeature].gradient}` : "bg-gray-600 hover:bg-gray-500"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameFeature;
