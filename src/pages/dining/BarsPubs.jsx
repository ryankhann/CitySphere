import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BarsPubs = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [vibeFilter, setVibeFilter] = useState('all');
  const navigate = useNavigate();

  const bars = [
    {
      id: 1,
      name: "Craft Beer Hall",
      type: "brewery",
      vibe: "industrial",
      hours: "16:00-02:00",
      specialty: "40+ taps",
      rating: 4.8,
      feature: "House brews",
      image: "/Images/bars/craft-beer.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Speakeasy Cocktail Lounge",
      type: "cocktail",
      vibe: "luxury",
      hours: "18:00-02:00",
      specialty: "Classic cocktails",
      rating: 4.9,
      feature: "Hidden entrance",
      image: "/Images/bars/speakeasy.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Sports Bar Central",
      type: "sports",
      vibe: "casual",
      hours: "11:00-01:00",
      specialty: "Game day specials",
      rating: 4.5,
      feature: "20+ screens",
      image: "/Images/bars/sports-bar.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Wine Bar & Cellar",
      type: "wine",
      vibe: "sophisticated",
      hours: "17:00-00:00",
      specialty: "Natural wines",
      rating: 4.7,
      feature: "200+ labels",
      image: "/Images/bars/wine-bar.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Live Music Pub",
      type: "pub",
      vibe: "cozy",
      hours: "12:00-02:00",
      specialty: "Local bands",
      rating: 4.6,
      feature: "Nightly performances",
      image: "/Images/bars/live-music.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Rooftop Lounge",
      type: "lounge",
      vibe: "trendy",
      hours: "17:00-02:00",
      specialty: "City views",
      rating: 4.8,
      feature: "Skyline panorama",
      image: "/Images/bars/rooftop.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const types = [
    { id: 'all', name: 'All Venues', icon: 'fas fa-glass-cheers' },
    { id: 'brewery', name: 'Breweries', icon: 'fas fa-beer' },
    { id: 'cocktail', name: 'Cocktail Bars', icon: 'fas fa-cocktail' },
    { id: 'sports', name: 'Sports Bars', icon: 'fas fa-tv' },
    { id: 'wine', name: 'Wine Bars', icon: 'fas fa-wine-glass-alt' },
    { id: 'pub', name: 'Pubs', icon: 'fas fa-mug-hot' },
    { id: 'lounge', name: 'Lounges', icon: 'fas fa-couch' }
  ];

  const vibes = [
    { id: 'all', name: 'All Vibes' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'casual', name: 'Casual' },
    { id: 'sophisticated', name: 'Sophisticated' },
    { id: 'cozy', name: 'Cozy' },
    { id: 'trendy', name: 'Trendy' }
  ];

  const filteredBars = bars.filter(bar => {
    if (typeFilter !== 'all' && bar.type !== typeFilter) return false;
    if (vibeFilter !== 'all' && bar.vibe !== vibeFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      {/* Night Sky Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='white'/%3E%3Ccircle cx='50' cy='30' r='1.5' fill='white'/%3E%3Ccircle cx='80' cy='40' r='1' fill='white'/%3E%3Ccircle cx='30' cy='70' r='1' fill='white'/%3E%3Ccircle cx='60' cy='80' r='1.5' fill='white'/%3E%3Ccircle cx='90' cy='60' r='1' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: '100px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Nightlife
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              From cozy pubs to sophisticated cocktail lounges - discover the city's vibrant nightlife scene
            </p>
            
            {/* Nightlife Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-beer text-3xl text-yellow-400 mb-3"></i>
                <div className="text-2xl font-bold">85+</div>
                <div className="text-gray-300">Bars & Pubs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-cocktail text-3xl text-pink-400 mb-3"></i>
                <div className="text-2xl font-bold">42</div>
                <div className="text-gray-300">Cocktail Bars</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-wine-glass-alt text-3xl text-purple-400 mb-3"></i>
                <div className="text-2xl font-bold">28</div>
                <div className="text-gray-300">Wine Bars</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-music text-3xl text-blue-400 mb-3"></i>
                <div className="text-2xl font-bold">15</div>
                <div className="text-gray-300">Live Music Venues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Filters */}
      <section className="py-8 bg-white/10 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Bar Type</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {types.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setTypeFilter(type.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      typeFilter === type.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <i className={type.icon}></i>
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Atmosphere</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {vibes.map(vibe => (
                  <button
                    key={vibe.id}
                    onClick={() => setVibeFilter(vibe.id)}
                    className={`px-3 py-1 rounded-full ${
                      vibeFilter === vibe.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {vibe.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bars Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBars.map(bar => (
              <div
                key={bar.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 cursor-pointer border border-white/20"
                onClick={() => navigate(`/bar/${bar.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{bar.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-purple-500/30 rounded-full text-xs">
                          {bar.type}
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-star text-yellow-400 mr-1"></i>
                          <span className="font-bold">{bar.rating}</span>
                        </div>
                      </div>
                    </div>
                    <i className={`fas fa-${
                      bar.type === 'brewery' ? 'beer' :
                      bar.type === 'cocktail' ? 'cocktail' :
                      bar.type === 'sports' ? 'tv' :
                      bar.type === 'wine' ? 'wine-glass-alt' :
                      bar.type === 'pub' ? 'mug-hot' : 'couch'
                    } text-2xl text-purple-400`}></i>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <i className="fas fa-clock mr-3 text-pink-400"></i>
                      <span>{bar.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <i className="fas fa-star mr-3 text-yellow-400"></i>
                      <span className="font-medium">{bar.feature}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <i className="fas fa-glass-cheers mr-3 text-purple-400"></i>
                      <span>{bar.specialty}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Visit Bar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Nightlife Guide */}
          <div className="mt-20 bg-gradient-to-r from-purple-700 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Nightlife Guide</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Download our comprehensive nightlife guide featuring happy hour specials, 
                    live music schedules, and insider tips for the best nights out.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Happy Hours</div>
                      <div className="text-sm opacity-90">Best deals & times</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Live Music</div>
                      <div className="text-sm opacity-90">Weekly schedules</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Reservation Tips</div>
                      <div className="text-sm opacity-90">When to book</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Dress Codes</div>
                      <div className="text-sm opacity-90">What to wear</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-purple-700 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Download Guide
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-moon-stars text-8xl"></i>
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

export default BarsPubs;