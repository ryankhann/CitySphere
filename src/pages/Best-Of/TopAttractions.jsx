import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopAttractions = () => {
  const [awardFilter, setAwardFilter] = useState('all');
  const navigate = useNavigate();

  const topAttractions = [
    {
      id: 1,
      name: "Skyline Observatory",
      award: "visitor-choice",
      rank: 1,
      category: "viewpoint",
      description: "Breathtaking 360° city views",
      votes: 12500,
      image: "/Images/best/observatory.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Crystal Garden Conservatory",
      award: "family-friendly",
      rank: 2,
      category: "garden",
      description: "Tropical paradise under glass",
      votes: 9800,
      image: "/Images/best/conservatory.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Historical Museum",
      award: "cultural",
      rank: 3,
      category: "museum",
      description: "City's rich history preserved",
      votes: 8500,
      image: "/Images/best/historical-museum.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Riverwalk Experience",
      award: "outdoor",
      rank: 4,
      category: "walking",
      description: "Scenic waterfront pathway",
      votes: 7200,
      image: "/Images/best/riverwalk.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Modern Art Gallery",
      award: "artistic",
      rank: 5,
      category: "art",
      description: "Contemporary masterpieces",
      votes: 6500,
      image: "/Images/best/modern-art.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Food Market Square",
      award: "culinary",
      rank: 6,
      category: "food",
      description: "Gourmet local produce",
      votes: 5800,
      image: "/Images/best/food-market.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const awards = [
    { id: 'all', name: 'All Awards', icon: 'fas fa-trophy' },
    { id: 'visitor-choice', name: "Visitor's Choice", icon: 'fas fa-users' },
    { id: 'family-friendly', name: 'Family Friendly', icon: 'fas fa-child' },
    { id: 'cultural', name: 'Cultural', icon: 'fas fa-landmark' },
    { id: 'outdoor', name: 'Outdoor', icon: 'fas fa-tree' },
    { id: 'artistic', name: 'Artistic', icon: 'fas fa-palette' },
    { id: 'culinary', name: 'Culinary', icon: 'fas fa-utensils' }
  ];

  const filteredAttractions = awardFilter === 'all' 
    ? topAttractions 
    : topAttractions.filter(attraction => attraction.award === awardFilter);

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-amber-700 to-amber-900';
      default: return 'bg-gradient-to-r from-blue-500 to-blue-700';
    }
  };

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return '👑';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '🏆';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      {/* Trophy Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 C60,10 70,15 75,25 C80,35 85,45 85,55 C85,65 80,75 75,85 C70,95 60,100 50,100 C40,100 30,95 25,85 C20,75 15,65 15,55 C15,45 20,35 25,25 C30,15 40,10 50,10 Z' fill='none' stroke='%23f59e0b' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '80px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-white text-4xl">
                👑
              </div>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700">
                Top Attractions
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Award-winning destinations chosen by thousands of visitors and locals
            </p>
            
            {/* Voting Stats */}
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">25,000+</div>
                  <div className="text-gray-600">Total Votes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">48</div>
                  <div className="text-gray-600">Attractions Rated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">2024</div>
                  <div className="text-gray-600">Awards Edition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3">
            {awards.map(award => (
              <button
                key={award.id}
                onClick={() => setAwardFilter(award.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  awardFilter === award.id
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={award.icon}></i>
                <span className="font-medium">{award.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions Leaderboard */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-6">
            {filteredAttractions.map(attraction => (
              <div
                key={attraction.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/attraction/${attraction.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-6">
                    {/* Rank Badge */}
                    <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-white text-3xl font-bold ${getRankColor(attraction.rank)}`}>
                      <div className="text-center">
                        <div className="text-2xl">{getRankIcon(attraction.rank)}</div>
                        <div className="text-sm">#{attraction.rank}</div>
                      </div>
                    </div>
                    
                    {/* Attraction Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{attraction.name}</h3>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm capitalize">
                              {attraction.category}
                            </div>
                            <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {attraction.award.replace('-', ' ')}
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-600">{attraction.votes.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">votes</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{attraction.description}</p>
                      
                      <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-bold hover:opacity-90">
                        Visit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Voting Panel */}
          <div className="mt-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Cast Your Vote</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Help choose next year's top attractions by voting for your favorites. 
                    Your vote helps shape our city's must-visit destinations.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Monthly Voting</div>
                      <div className="text-sm opacity-90">New categories each month</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Special Prizes</div>
                      <div className="text-sm opacity-90">Win exclusive experiences</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Community Impact</div>
                      <div className="text-sm opacity-90">Your voice matters</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Annual Awards</div>
                      <div className="text-sm opacity-90">Grand ceremony event</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-amber-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Vote Now
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-trophy text-8xl"></i>
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

export default TopAttractions;