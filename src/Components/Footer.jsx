import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [cityPulse, setCityPulse] = useState(0);
  const [randomQuote, setRandomQuote] = useState('');

  // Time-based greeting and city "pulse"
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      
      let greeting;
      if (hours < 12) greeting = 'Morning';
      else if (hours < 18) greeting = 'Afternoon';
      else greeting = 'Evening';
      
      setCurrentTime(`${greeting} • ${hours % 12 || 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`);
      
      // Simulate city pulse (higher during daytime)
      const pulse = Math.floor(Math.random() * 30) + (hours >= 8 && hours <= 20 ? 70 : 40);
      setCityPulse(pulse);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Random city-inspired quotes
  useEffect(() => {
    const quotes = [
      "Cities are symphonies of stories waiting to be heard.",
      "Every street corner holds a secret.",
      "Urban energy flows through every intersection.",
      "The city breathes through its people.",
      "Concrete and dreams intertwine in urban spaces.",
      "Every window frames a different world."
    ];
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // Floating icons data
  const floatingIcons = [
    { icon: "fas fa-building", delay: "0s", size: "text-xl", color: "from-blue-400/20 to-blue-600/20" },
    { icon: "fas fa-tree", delay: "0.3s", size: "text-lg", color: "from-green-400/20 to-green-600/20" },
    { icon: "fas fa-lightbulb", delay: "0.6s", size: "text-2xl", color: "from-yellow-400/20 to-yellow-600/20" },
    { icon: "fas fa-water", delay: "0.9s", size: "text-lg", color: "from-cyan-400/20 to-cyan-600/20" },
    { icon: "fas fa-moon", delay: "1.2s", size: "text-xl", color: "from-indigo-400/20 to-indigo-600/20" },
    { icon: "fas fa-sun", delay: "1.5s", size: "text-lg", color: "from-orange-400/20 to-orange-600/20" }
  ];

  // City "breathing" animation
  const BreathingCity = () => {
    const [breath, setBreath] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setBreath(prev => (prev + 0.5) % 100);
      }, 50);
      return () => clearInterval(interval);
    }, []);

    const getOpacity = (index) => {
      const offset = (index * 15) % 100;
      const distance = Math.abs(breath - offset);
      return Math.max(0, 1 - distance / 50);
    };

    return (
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-8 w-0.5 bg-gradient-to-t from-blue-500 to-white bottom-0"
            style={{
              left: `${i * 5}%`,
              height: `${20 + Math.sin(i * 0.5 + breath * 0.05) * 15}px`,
              opacity: getOpacity(i)
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden mt-20">
      {/* Top wave divider */}
      <div className="absolute -top-8 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          className="relative w-full h-12"
          style={{ fill: 'rgb(30 41 59)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      {/* Floating city elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center ${item.size} animate-float`}
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${20 + (index * 3)}%`,
              animationDelay: item.delay
            }}
          >
            <i className={item.icon}></i>
          </div>
        ))}
      </div>

      {/* City breathing animation */}
      <BreathingCity />

      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-5 py-12 relative z-10">
        {/* City pulse indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full"
                style={{ width: `${cityPulse}%` }}
              ></div>
            </div>
            <div className="absolute -top-2 left-0 w-full flex justify-between text-xs text-gray-400">
              <span>Quiet</span>
              <span className="text-blue-400 font-medium">City Pulse</span>
              <span>Active</span>
            </div>
          </div>
        </div>

        {/* Center emblem */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 border-2 border-white/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/30 to-green-600/30 border border-white/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700/40 to-green-700/40 border border-white/30 flex flex-col items-center justify-center">
                  <i className="fas fa-city text-2xl text-white/70"></i>
                  <span className="text-xs mt-1 text-white/50">Urban</span>
                  <span className="text-xs text-white/50">Rhythm</span>
                </div>
              </div>
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400/50 border-r-green-400/50 animate-spin-slow"></div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-2xl mx-auto mb-10 px-5">
          <p className="text-lg md:text-xl italic text-gray-300 mb-4">
            "{randomQuote}"
          </p>
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <i className="fas fa-quote-right text-sm"></i>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>
        </div>

        {/* Time and info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 pt-8 border-t border-white/10">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              CitySphere
            </div>
            <div className="text-sm text-gray-400">
              Sensing the urban rhythm since 2023
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-blue-300 mb-2">
              <i className="fas fa-clock"></i>
              <span className="font-mono">{currentTime}</span>
            </div>
            <div className="text-xs text-gray-500">
              Local urban time
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="text-gray-400 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>Urban exploration platform</span>
            </div>
            <div className="text-sm text-gray-500">
              No maps needed, just curiosity
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/50 via-green-500/50 via-purple-500/50 to-transparent"></div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;