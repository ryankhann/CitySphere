import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HiddenGems = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const navigate = useNavigate();

  const hiddenGems = [
    {
      id: 1,
      name: "Secret Rooftop Garden",
      type: "viewpoint",
      discoveredBy: "Local Photographer",
      description: "Hidden garden with city views, accessible through old apartment building",
      tip: "Visit at sunset for magical lighting",
      difficulty: "Medium",
      image: "/Images/gems/rooftop-garden.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Underground Bookstore",
      type: "shopping",
      discoveredBy: "Literature Student",
      description: "Basement bookstore with rare editions and cozy reading nooks",
      tip: "Ask about the secret poetry section",
      difficulty: "Easy",
      image: "/Images/gems/bookstore.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Abandoned Train Tunnel Art",
      type: "art",
      discoveredBy: "Urban Explorer",
      description: "Disused railway tunnel transformed into underground art gallery",
      tip: "Bring flashlight and good walking shoes",
      difficulty: "Hard",
      image: "/Images/gems/tunnel-art.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Family Recipe Pasta Shop",
      type: "food",
      discoveredBy: "Food Blogger",
      description: "Tiny family-run pasta shop with generations-old recipes",
      tip: "Try the secret sauce only on weekends",
      difficulty: "Easy",
      image: "/Images/gems/pasta-shop.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Hidden Courtyard Jazz",
      type: "entertainment",
      discoveredBy: "Music Lover",
      description: "Intimate jazz sessions in secluded courtyard behind unmarked door",
      tip: "Cash only, no reservations",
      difficulty: "Medium",
      image: "/Images/gems/courtyard-jazz.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Miniature Museum",
      type: "museum",
      discoveredBy: "Curiosity Collector",
      description: "World's smallest museum in former phone booth",
      tip: "Visit on Tuesday for curator talks",
      difficulty: "Easy",
      image: "/Images/gems/mini-museum.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const gemTypes = [
    { id: 'all', name: 'All Gems', icon: 'fas fa-gem' },
    { id: 'viewpoint', name: 'Viewpoints', icon: 'fas fa-binoculars' },
    { id: 'shopping', name: 'Shopping', icon: 'fas fa-shopping-bag' },
    { id: 'art', name: 'Art', icon: 'fas fa-paint-brush' },
    { id: 'food', name: 'Food', icon: 'fas fa-utensils' },
    { id: 'entertainment', name: 'Entertainment', icon: 'fas fa-music' },
    { id: 'museum', name: 'Museums', icon: 'fas fa-university' }
  ];

  const filteredGems = typeFilter === 'all' 
    ? hiddenGems 
    : hiddenGems.filter(gem => gem.type === typeFilter);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Gem Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,0 L100,50 L50,100 L0,50 Z' fill='none' stroke='%238b5cf6' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-4xl">
                💎
              </div>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                Hidden Gems
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Secret spots known only to locals - discover the city's best kept secrets
            </p>
            
            {/* Exploration Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-map-signs text-3xl text-purple-600 mb-3"></i>
                <div className="text-2xl font-bold">85+</div>
                <div className="text-gray-600">Secret Locations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-user-secret text-3xl text-indigo-600 mb-3"></i>
                <div className="text-2xl font-bold">Local</div>
                <div className="text-gray-600">Exclusive Discovery</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-star text-3xl text-yellow-500 mb-3"></i>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-lock-open text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">2024</div>
                <div className="text-gray-600">Newly Revealed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gem Types */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3">
            {gemTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setTypeFilter(type.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  typeFilter === type.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={type.icon}></i>
                <span className="font-medium">{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Gems */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGems.map(gem => (
              <div
                key={gem.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-purple-400"
                onClick={() => navigate(`/hidden-gem/${gem.id}`)}
              >
                <div className="p-6">
                  {/* Secret Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-user-secret text-purple-600"></i>
                      <span className="text-sm text-gray-500">Discovered by {gem.discoveredBy}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(gem.difficulty)}`}>
                      {gem.difficulty}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{gem.name}</h3>
                  <p className="text-gray-600 mb-6">{gem.description}</p>
                  
                  {/* Insider Tip */}
                  <div className="bg-purple-50 p-4 rounded-xl mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="fas fa-lightbulb text-yellow-500"></i>
                      <span className="font-bold text-purple-800">Insider Tip</span>
                    </div>
                    <p className="text-purple-700">{gem.tip}</p>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Reveal Location
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Explorer's Club */}
          <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Explorer's Club</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join our exclusive community of urban explorers. Get early access to newly discovered 
                    hidden gems, participate in secret tours, and connect with fellow adventurers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Secret Tours</div>
                      <div className="text-sm opacity-90">Guided hidden location tours</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Early Access</div>
                      <div className="text-sm opacity-90">First to know new discoveries</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Explorer Network</div>
                      <div className="text-sm opacity-90">Connect with adventurers</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Discovery Rewards</div>
                      <div className="text-sm opacity-90">Earn points for finds</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Join Explorer's Club
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-compass text-8xl"></i>
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

export default HiddenGems;