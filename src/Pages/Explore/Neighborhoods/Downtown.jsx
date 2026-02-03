import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Downtown = () => {
  const [timeFilter, setTimeFilter] = useState('day');
  const navigate = useNavigate();

  const spots = [
    {
      id: 1,
      name: "Financial District Skybridge",
      type: "architecture",
      time: "day",
      description: "Glass walkway between skyscrapers",
      distance: "0.3km",
      image: "/Images/neighborhoods/skybridge.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Underground Jazz Club",
      type: "nightlife",
      time: "night",
      description: "1920s speakeasy vibe",
      distance: "0.8km",
      image: "/Images/neighborhoods/jazz-club.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Central Plaza Market",
      type: "shopping",
      time: "day",
      description: "Local artisans and food stalls",
      distance: "0.5km",
      image: "/Images/neighborhoods/plaza-market.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Midnight Food Truck Alley",
      type: "food",
      time: "night",
      description: "24/7 international street food",
      distance: "0.7km",
      image: "/Images/neighborhoods/food-trucks.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Urban Art Corridor",
      type: "art",
      time: "day",
      description: "Legal graffiti and murals",
      distance: "0.4km",
      image: "/Images/neighborhoods/art-corridor.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Rooftop Observatory Bar",
      type: "viewpoint",
      time: "night",
      description: "360° city skyline views",
      distance: "0.9km",
      image: "/Images/neighborhoods/rooftop-bar.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const filteredSpots = timeFilter === 'all' 
    ? spots 
    : spots.filter(spot => spot.time === timeFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Animated Skyline Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-white"
              style={{
                left: `${(i * 5) + (Math.sin(i) * 10)}%`,
                width: `${Math.random() * 4 + 2}%`,
                height: `${Math.random() * 40 + 20}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Downtown Core
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              The beating heart of the city where business meets pleasure, day meets night
            </p>
            
            {/* Time Toggle */}
            <div className="flex justify-center gap-8 mb-12">
              <button
                onClick={() => setTimeFilter('day')}
                className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
                  timeFilter === 'day'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-gray-900 shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <i className="fas fa-sun mr-3"></i>
                Day Exploration
              </button>
              <button
                onClick={() => setTimeFilter('night')}
                className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
                  timeFilter === 'night'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <i className="fas fa-moon mr-3"></i>
                Night Experience
              </button>
              <button
                onClick={() => setTimeFilter('all')}
                className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
                  timeFilter === 'all'
                    ? 'bg-gradient-to-r from-gray-700 to-blue-700 text-white shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <i className="fas fa-clock mr-3"></i>
                All Day
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Stats */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Always Active</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300">Skyscrapers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">85</div>
              <div className="text-gray-300">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">12km</div>
              <div className="text-gray-300">Underground Tunnels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spots Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.map(spot => (
              <div
                key={spot.id}
                className={`rounded-2xl overflow-hidden shadow-2xl cursor-pointer group ${
                  spot.time === 'night' 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
                    : 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50'
                }`}
                onClick={() => navigate(`/spot/${spot.id}`)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{spot.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      spot.time === 'night' ? 'bg-purple-700' : 'bg-blue-700'
                    }`}>
                      {spot.time === 'night' ? '🌙 Night' : '☀️ Day'}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{spot.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-location-dot text-cyan-400"></i>
                      <span>{spot.distance} away</span>
                    </div>
                    <button className={`px-4 py-2 rounded-full font-bold ${
                      spot.time === 'night'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                    }`}>
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Downtown Map */}
          <div className="mt-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Downtown Navigation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Getting Around</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                      <i className="fas fa-train"></i>
                    </div>
                    <div>
                      <div className="font-bold">Subway Access</div>
                      <div className="text-gray-300">12 stations within 1km radius</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center">
                      <i className="fas fa-walking"></i>
                    </div>
                    <div>
                      <div className="font-bold">Pedestrian Zone</div>
                      <div className="text-gray-300">8 blocks car-free 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-700 flex items-center justify-center">
                      <i className="fas fa-bicycle"></i>
                    </div>
                    <div>
                      <div className="font-bold">Bike Lanes</div>
                      <div className="text-gray-300">15km of protected bike paths</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-800 to-purple-800">
                {/* Simple Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 border-2 border-white/30 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-center">
                          <i className="fas fa-map-marker-alt text-3xl text-cyan-400"></i>
                          <div className="mt-2 font-bold">You Are Here</div>
                        </div>
                      </div>
                    </div>
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

export default Downtown;