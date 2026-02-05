import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Restaurants = () => {
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "Nebula Dining",
      cuisine: ["fusion", "fine-dining"],
      price: "$$$$",
      rating: 4.9,
      description: "Molecular gastronomy with city views",
      special: "Tasting Menu",
      waitTime: "15-30 min",
      image: "/Images/restaurants/nebula.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Greenhouse Bistro",
      cuisine: ["vegetarian", "organic"],
      price: "$$",
      rating: 4.7,
      description: "Farm-to-table in a glass garden",
      special: "Daily Harvest Menu",
      waitTime: "5-15 min",
      image: "/Images/restaurants/greenhouse.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Coal & Craft",
      cuisine: ["bbq", "american"],
      price: "$$$",
      rating: 4.8,
      description: "Artisanal smoked meats",
      special: "Weekend Brisket",
      waitTime: "30-45 min",
      image: "/Images/restaurants/coal-craft.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Umami Alley",
      cuisine: ["asian", "fusion"],
      price: "$$",
      rating: 4.6,
      description: "Pan-Asian street food",
      special: "Ramen Wednesday",
      waitTime: "10-20 min",
      image: "/Images/restaurants/umami.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Pasta Nonna",
      cuisine: ["italian"],
      price: "$$",
      rating: 4.8,
      description: "Handmade pasta family recipes",
      special: "Fresh Truffle Pasta",
      waitTime: "20-35 min",
      image: "/Images/restaurants/pasta.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "La Marée",
      cuisine: ["seafood", "french"],
      price: "$$$$",
      rating: 4.9,
      description: "Coastal French cuisine",
      special: "Oyster Happy Hour",
      waitTime: "25-40 min",
      image: "/Images/restaurants/seafood.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const cuisines = [
    { id: 'all', name: 'All Cuisines', icon: 'fas fa-utensils' },
    { id: 'fusion', name: 'Fusion', icon: 'fas fa-globe-americas' },
    { id: 'vegetarian', name: 'Vegetarian', icon: 'fas fa-leaf' },
    { id: 'bbq', name: 'BBQ', icon: 'fas fa-fire' },
    { id: 'asian', name: 'Asian', icon: 'fas fa-utensil-spoon' },
    { id: 'italian', name: 'Italian', icon: 'fas fa-pizza-slice' },
    { id: 'seafood', name: 'Seafood', icon: 'fas fa-fish' }
  ];

  const prices = [
    { id: 'all', label: 'Any Price' },
    { id: '$', label: '$ Budget' },
    { id: '$$', label: '$$ Moderate' },
    { id: '$$$', label: '$$$ Expensive' },
    { id: '$$$$', label: '$$$$ Luxury' }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (cuisineFilter !== 'all' && !restaurant.cuisine.includes(cuisineFilter)) return false;
    if (priceFilter !== 'all' && restaurant.price !== priceFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Floating Food Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 24 + 16}px`,
              opacity: 0.1
            }}
          >
            <i className={`fas fa-${
              ['utensils', 'hamburger', 'pizza-slice', 'ice-cream', 'coffee', 'wine-glass-alt'][i % 6]
            } text-amber-400`}></i>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-500">
                Culinary Journey
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              From hidden gems to Michelin stars, explore the city's vibrant dining scene
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { number: "850+", label: "Restaurants", icon: "fas fa-store" },
                { number: "42", label: "Cuisine Types", icon: "fas fa-utensil-spoon" },
                { number: "18", label: "Michelin Stars", icon: "fas fa-star" },
                { number: "24/7", label: "Open Late", icon: "fas fa-moon" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Bar */}
      <section className="sticky top-20 z-40 py-6 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {cuisines.map(cuisine => (
                <button
                  key={cuisine.id}
                  onClick={() => setCuisineFilter(cuisine.id)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                    cuisineFilter === cuisine.id
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:shadow-md'
                  }`}
                >
                  <i className={cuisine.icon}></i>
                  <span className="font-medium">{cuisine.name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-full p-1">
                {prices.map(price => (
                  <button
                    key={price.id}
                    onClick={() => setPriceFilter(price.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      priceFilter === price.id
                        ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    {price.label}
                  </button>
                ))}
              </div>

              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-full ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-full ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Cards */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map(restaurant => (
                <div
                  key={restaurant.id}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  {/* Restaurant Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center">
                      <i className="fas fa-utensils text-8xl text-white opacity-30"></i>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="font-bold text-amber-600">{restaurant.price}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <i className="fas fa-star text-yellow-500"></i>
                        <span className="font-bold">{restaurant.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{restaurant.name}</h3>
                      <div className="flex gap-1">
                        {restaurant.cuisine.map((cuisine, index) => (
                          <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                            {cuisine}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{restaurant.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-crown text-amber-500 mr-2"></i>
                          <span className="font-medium">{restaurant.special}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-clock text-red-500 mr-2"></i>
                          <span>{restaurant.waitTime}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full mt-6 py-3 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                      Reserve Table
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredRestaurants.map(restaurant => (
                <div
                  key={restaurant.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 flex flex-col md:flex-row gap-6 cursor-pointer transition-all"
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  <div className="md:w-48 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center">
                    <i className="fas fa-utensils text-6xl text-white opacity-50"></i>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{restaurant.name}</h3>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-amber-600">{restaurant.price}</div>
                        <div className="bg-amber-100 px-3 py-1 rounded-full flex items-center gap-1">
                          <i className="fas fa-star text-yellow-500"></i>
                          <span className="font-bold">{restaurant.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{restaurant.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {restaurant.cuisine.map((cuisine, index) => (
                        <span key={index} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full">
                          {cuisine}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-crown text-amber-500 mr-3"></i>
                          <span>Special: {restaurant.special}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-clock text-red-500 mr-3"></i>
                          <span>Wait time: {restaurant.waitTime}</span>
                        </div>
                      </div>
                      <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-full font-bold hover:opacity-90">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Featured Chef Section */}
          <div className="mt-20 bg-gradient-to-r from-amber-500 to-red-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/3">
                  <h2 className="text-4xl font-bold mb-6">Chef's Special This Week</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Experience an exclusive 7-course tasting menu curated by award-winning chef Maria Rodriguez. 
                    Only available this week at participating restaurants.
                  </p>
                  <button className="px-8 py-4 bg-white text-amber-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    View Tasting Menu <i className="fas fa-arrow-right ml-3"></i>
                  </button>
                </div>
                <div className="lg:w-1/3 relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                    <i className="fas fa-chef-hat text-8xl"></i>
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

export default Restaurants;