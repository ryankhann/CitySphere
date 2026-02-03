import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BestRestaurants = () => {
  const [awardFilter, setAwardFilter] = useState('all');
  const navigate = useNavigate();

  const bestRestaurants = [
    {
      id: 1,
      name: "Nebula Dining",
      award: "michelin",
      stars: 3,
      cuisine: "molecular gastronomy",
      price: "$$$$",
      ranking: 1,
      feature: "Tasting menu experience",
      votes: 9800,
      image: "/Images/best/nebula-dining.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Greenhouse Bistro",
      award: "sustainable",
      stars: 2,
      cuisine: "farm-to-table",
      price: "$$$",
      ranking: 2,
      feature: "Organic garden onsite",
      votes: 8500,
      image: "/Images/best/greenhouse-bistro.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Umami Alley",
      award: "street-food",
      stars: 1,
      cuisine: "pan-asian",
      price: "$$",
      ranking: 3,
      feature: "Authentic street flavors",
      votes: 7500,
      image: "/Images/best/umami-alley.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Coal & Craft",
      award: "meat-lovers",
      stars: 1,
      cuisine: "american bbq",
      price: "$$$",
      ranking: 4,
      feature: "Artisanal smoked meats",
      votes: 6800,
      image: "/Images/best/coal-craft.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Pasta Nonna",
      award: "traditional",
      stars: 1,
      cuisine: "italian",
      price: "$$",
      ranking: 5,
      feature: "Handmade pasta daily",
      votes: 6200,
      image: "/Images/best/pasta-nonna.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "La Marée",
      award: "seafood",
      stars: 2,
      cuisine: "french seafood",
      price: "$$$$",
      ranking: 6,
      feature: "Daily fresh catch",
      votes: 5800,
      image: "/Images/best/la-maree.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const awards = [
    { id: 'all', name: 'All Awards', icon: 'fas fa-award' },
    { id: 'michelin', name: 'Michelin Stars', icon: 'fas fa-star' },
    { id: 'sustainable', name: 'Sustainable', icon: 'fas fa-leaf' },
    { id: 'street-food', name: 'Street Food', icon: 'fas fa-utensils' },
    { id: 'meat-lovers', name: 'Meat Lovers', icon: 'fas fa-drumstick-bite' },
    { id: 'traditional', name: 'Traditional', icon: 'fas fa-history' },
    { id: 'seafood', name: 'Seafood', icon: 'fas fa-fish' }
  ];

  const filteredRestaurants = awardFilter === 'all' 
    ? bestRestaurants 
    : bestRestaurants.filter(restaurant => restaurant.award === awardFilter);

  const renderStars = (count) => {
    return (
      <div className="flex">
        {[...Array(count)].map((_, i) => (
          <i key={i} className="fas fa-star text-yellow-500"></i>
        ))}
      </div>
    );
  };

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-amber-500';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-amber-700 to-amber-900';
      default: return 'bg-gradient-to-r from-red-500 to-pink-500';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      {/* Chef Hat Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 C60,10 70,20 70,30 C70,40 60,50 50,50 C40,50 30,40 30,30 C30,20 40,10 50,10 Z' fill='none' stroke='%23ef4444' stroke-width='2'/%3E%3Crect x='30' y='50' width='40' height='20' rx='5' fill='none' stroke='%23ec4899' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '80px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-4xl">
                🍽️
              </div>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-500">
                Best Restaurants
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Award-winning culinary experiences that define our city's food scene
            </p>
            
            {/* Restaurant Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-star text-3xl text-yellow-500 mb-3"></i>
                <div className="text-2xl font-bold">18</div>
                <div className="text-gray-600">Michelin Stars</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-utensils text-3xl text-red-600 mb-3"></i>
                <div className="text-2xl font-bold">850+</div>
                <div className="text-gray-600">Restaurants Rated</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-users text-3xl text-pink-600 mb-3"></i>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-gray-600">Foodie Votes</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-globe text-3xl text-orange-600 mb-3"></i>
                <div className="text-2xl font-bold">42</div>
                <div className="text-gray-600">Cuisine Types</div>
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
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-xl'
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

      {/* Top Restaurants */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            {filteredRestaurants.map(restaurant => (
              <div
                key={restaurant.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Rank Badge */}
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold ${getRankColor(restaurant.ranking)}`}>
                      #{restaurant.ranking}
                    </div>
                    
                    {/* Restaurant Info */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{restaurant.name}</h3>
                            {renderStars(restaurant.stars)}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <div className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                              {restaurant.cuisine}
                            </div>
                            <div className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                              {restaurant.award.replace('-', ' ')}
                            </div>
                            <div className="text-red-600 font-bold">
                              {restaurant.price.split('').map((_, i) => (
                                <i key={i} className="fas fa-dollar-sign"></i>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-2xl font-bold text-red-600">{restaurant.votes.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">foodie votes</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{restaurant.feature}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-bold hover:opacity-90">
                          Reserve Table
                        </button>
                        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
                          View Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Foodie Club */}
          <div className="mt-20 bg-gradient-to-r from-red-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Foodie Club Membership</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join our exclusive foodie club for priority reservations, 
                    tasting events, chef meetups, and special discounts at award-winning restaurants.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Priority Reservations</div>
                      <div className="text-sm opacity-90">Book hard-to-get tables</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Tasting Events</div>
                      <div className="text-sm opacity-90">Exclusive chef experiences</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Special Discounts</div>
                      <div className="text-sm opacity-90">Up to 20% off</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Chef Meetups</div>
                      <div className="text-sm opacity-90">Personal interactions</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-red-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Join Foodie Club
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-utensils text-8xl"></i>
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

export default BestRestaurants;