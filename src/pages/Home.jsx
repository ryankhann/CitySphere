import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  // Categories for grid section
  const categories = [
    {
      id: "events",
      title: "City Events",
      description: "Discover festivals, concerts, and gatherings happening around you",
      image: "/Images/home-events.jpg"
    },
    {
      id: "dining",
      title: "Local Dining",
      description: "Find the best restaurants, cafes, and food trucks in your area",
      image: "/Images/home-local-dining.jpg"
    },
    {
      id: "parks",
      title: "City Parks",
      description: "Explore green spaces and recreational areas in the urban landscape",
      image: "/Images/home-park.jpg"
    },
    {
      id: "art",
      title: "Art & Culture",
      description: "Immerse yourself in museums, galleries, and cultural landmarks",
      image: "/Images/home-art.jpg"
    },
    {
      id: "nightlife",
      title: "Nightlife",
      description: "Experience the city after dark with bars, clubs, and evening events",
      image: "/Images/home-nightlife.jpg"
    }
  ];

  // Slides for slider
  const slides = [
    {
      id: 1,
      image: "/Images/home-downtown.jpg",
      title: "Downtown Summer Festival",
      description: "Join us for the biggest summer celebration with live music, food stalls, and art installations across downtown."
    },
    {
      id: 2,
      image: "/Images/home-foodie-tour.jpg",
      title: "Hidden Foodie Tour",
      description: "Discover culinary secrets with our expert-guided tour through the city's most authentic eateries."
    },
    {
      id: 3,
      image: "/Images/home-architecture-guide.jpg",
      title: "Architecture Walk",
      description: "Explore the city's most iconic buildings and hidden architectural gems with local historians."
    }
  ];

  // Stats data
  const stats = [
    { id: 1, icon: "fas fa-map-marker-alt", target: 1250, text: "Local Businesses Listed" },
    { id: 2, icon: "fas fa-calendar-check", target: 320, text: "Events Monthly" },
    { id: 3, icon: "fas fa-users", target: 85000, text: "Active Community Members" },
    { id: 4, icon: "fas fa-star", target: 4.9, text: "Average User Rating" }
  ];

  // Cards data
  const cards = [
    {
      id: 1,
      frontIcon: "fas fa-search-location",
      frontTitle: "Discover",
      frontText: "Find places and events tailored to your interests",
      backTitle: "Explore Your City",
      backText: "Our intelligent algorithm learns your preferences to recommend the best local experiences, hidden gems, and popular hotspots just for you."
    },
    {
      id: 2,
      frontIcon: "fas fa-calendar-plus",
      frontTitle: "Plan",
      frontText: "Create personalized itineraries",
      backTitle: "Personalized Itineraries",
      backText: "Build custom day plans, save favorite locations, and share your urban adventures with friends and the community."
    },
    {
      id: 3,
      frontIcon: "fas fa-share-alt",
      frontTitle: "Share",
      frontText: "Connect with the community",
      backTitle: "Community Connection",
      backText: "Share your experiences, read authentic reviews, and connect with fellow city explorers who share your interests."
    }
  ];

  const handleSearch = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
      navigate(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll animations
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.scroll-animate, .grid-item, .stat-item, .card-3d');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();
    
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  // Counter animation for stats
  const [animatedStats, setAnimatedStats] = useState(false);
  const statsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedStats(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Counter component for stats
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (animatedStats) {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [target, animatedStats]);

    return target === 4.9 ? count.toFixed(1) : count.toLocaleString();
  };

  // Image fallback handler
  const handleImageError = (e, fallbackText) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    if (parent) {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white text-2xl font-bold';
      fallbackDiv.textContent = fallbackText || 'Image';
      parent.appendChild(fallbackDiv);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-pink-500 z-50" id="scrollProgress"></div>

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center relative overflow-hidden pt-24 md:pt-28">
        <div 
          className="hero-background absolute top-0 left-0 w-full h-[120%] bg-gradient-to-br from-blue-500/10 to-green-500/10 bg-cover bg-center bg-fixed -z-10"
          style={{ backgroundImage: 'url(/Images/home-hero-bg.png)' }}
        ></div>
        
        <div className="floating-elements absolute inset-0 pointer-events-none -z-5">
          <div className="floating-element absolute w-20 h-20 top-1/5 right-1/5 rounded-full flex items-center justify-center text-white text-2xl bg-gradient-to-br from-blue-500 to-blue-500/70">
            <i className="fas fa-city"></i>
          </div>
          <div className="floating-element absolute w-32 h-32 bottom-1/5 right-1/10 rounded-full flex items-center justify-center text-white text-3xl bg-gradient-to-br from-green-500 to-green-500/70">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div className="floating-element absolute w-16 h-16 top-2/5 right-1/4 rounded-full flex items-center justify-center text-white text-xl bg-gradient-to-br from-pink-500 to-pink-500/70">
            <i className="fas fa-utensils"></i>
          </div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-5">
          <div className="hero-content max-w-3xl ml-0 md:ml-[5%] animate-fadeInUp">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-gradientShift">
              Discover the Soul of Your City
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-800 mb-10 max-w-2xl">
              CitySphere connects you with hidden gems, local events, and vibrant communities. Experience your city like never before with our interactive guides and real-time updates.
            </p>
            <div className="hero-search-container flex flex-col md:flex-row max-w-2xl mt-10 bg-white rounded-2xl overflow-hidden shadow-2xl">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What are you looking for today? Events, restaurants, parks..."
                className="hero-search-input flex-grow p-5 md:p-6 text-lg outline-none"
              />
              <button
                onClick={handleSearch}
                className="hero-search-button px-6 md:px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold cursor-pointer transition-all duration-300 hover:from-blue-800 hover:to-green-600 hover:pr-10 md:hover:pr-12 flex items-center justify-center gap-2 md:gap-3"
              >
                <i className="fas fa-search"></i> Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Grid Section */}
      <section className="asymmetric-grid-section py-24 md:py-32 relative bg-white">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 relative scroll-animate">
            Explore Urban Life
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"></div>
          </h2>
          
          <div className="asymmetric-grid grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
            {categories.map((category, index) => {
              // Assign different grid spans based on index to create asymmetric layout
              let gridClass = '';
              if (index === 0) {
                gridClass = 'lg:col-span-5 lg:row-span-1 h-64 md:h-72 lg:h-80';
              } else if (index === 1) {
                gridClass = 'lg:col-span-4 lg:row-span-1 h-64 md:h-72 lg:h-80';
              } else if (index === 2) {
                gridClass = 'lg:col-span-3 lg:row-span-2 h-64 md:h-[34rem] lg:h-[640px]';
              } else if (index === 3) {
                gridClass = 'lg:col-span-4 lg:row-span-1 h-64 md:h-72 lg:h-80';
              } else if (index === 4) {
                gridClass = 'lg:col-span-5 lg:row-span-1 h-64 md:h-72 lg:h-80';
              }

              return (
                <div
                  key={category.id}
                  className={`grid-item ${gridClass} relative overflow-hidden rounded-2xl cursor-pointer group`}
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(category.title)}`);
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="grid-image w-full h-full object-cover"
                    onError={(e) => handleImageError(e, category.title)}
                  />
                  <div className="grid-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm md:text-base opacity-90">{category.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Morphing Slider Section */}
      <section className="morphing-slider-section py-24 md:py-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="wave-divider absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
        
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 relative scroll-animate">
            Featured Experiences
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"></div>
          </h2>
          
          <div className="morphing-slider-container max-w-6xl mx-auto relative h-96 md:h-[500px]">
            <div className="morphing-slider w-full h-full relative">
              {slides.map((slide, index) => {
                let slideClass = "slider-item absolute inset-0 rounded-2xl overflow-hidden";
                if (index === currentSlide) {
                  slideClass += " active";
                } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                  slideClass += " prev";
                } else if (index === (currentSlide + 1) % slides.length) {
                  slideClass += " next";
                }

                return (
                  <div key={slide.id} className={slideClass}>
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, slide.title)}
                    />
                    <div className="slider-content absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-8 md:p-10 z-10">
                      <h3 className="slider-title text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{slide.title}</h3>
                      <p className="text-base md:text-lg opacity-90">{slide.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="slider-controls flex justify-center gap-5 mt-8">
              <button onClick={prevSlide} className="slider-control w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-none flex items-center justify-center text-blue-600 cursor-pointer shadow-lg hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onClick={nextSlide} className="slider-control w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-none flex items-center justify-center text-blue-600 cursor-pointer shadow-lg hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section ref={statsRef} className="interactive-stats-section py-24 md:py-32 bg-gradient-to-br from-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 relative scroll-animate">
            CitySphere in Numbers
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-white/80 to-white/40 rounded-full"></div>
          </h2>
          
          <div className="stats-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-item text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="stat-icon text-4xl md:text-5xl mb-5 text-white/90">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number text-4xl md:text-5xl font-bold mb-3">
                  {animatedStats ? (
                    <Counter target={stat.target} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="stat-text text-lg md:text-xl opacity-90">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Card Section */}
      <section className="card-3d-section py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 relative scroll-animate">
            How CitySphere Works
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"></div>
          </h2>
          
          <div className="card-3d-container grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {cards.map((card) => (
              <div key={card.id} className="card-3d h-96 md:h-[400px] cursor-pointer">
                <div className="card-3d-inner relative w-full h-full text-center transition-transform duration-800 transform-style-preserve-3d rounded-2xl shadow-xl group hover:rotate-y-180">
                  <div className="card-3d-front absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 md:p-10 backface-hidden">
                    <div className="card-3d-icon text-5xl md:text-6xl mb-8">
                      <i className={card.frontIcon}></i>
                    </div>
                    <h3 className="card-3d-title text-2xl md:text-3xl font-bold mb-4">{card.frontTitle}</h3>
                    <p className="text-lg">{card.frontText}</p>
                  </div>
                  <div className="card-3d-back absolute inset-0 bg-white text-gray-900 rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 md:p-10 backface-hidden rotate-y-180">
                    <h3 className="card-3d-title text-2xl md:text-3xl font-bold mb-4">{card.backTitle}</h3>
                    <p className="text-base md:text-lg">{card.backText}</p>
                    <div className="mt-6">
                      <i className="fas fa-arrow-right text-2xl text-blue-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;