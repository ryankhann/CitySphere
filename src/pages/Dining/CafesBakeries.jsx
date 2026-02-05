import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CafesBakeries = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const navigate = useNavigate();

  const cafes = [
    {
      id: 1,
      name: "Artisan Coffee Roasters",
      type: "coffee",
      specialty: "single-origin",
      hours: "06:00-20:00",
      rating: 4.8,
      feature: "House-roasted beans",
      image: "/Images/cafes/artisan-coffee.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "French Patisserie",
      type: "bakery",
      specialty: "pastries",
      hours: "07:00-19:00",
      rating: 4.9,
      feature: "Croissant expert",
      image: "/Images/cafes/french-patisserie.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Third Wave Cafe",
      type: "coffee",
      specialty: "pour-over",
      hours: "07:30-22:00",
      rating: 4.7,
      feature: "Brewing workshops",
      image: "/Images/cafes/third-wave.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Sourdough Bakery",
      type: "bakery",
      specialty: "bread",
      hours: "06:00-18:00",
      rating: 4.8,
      feature: "Wild yeast starters",
      image: "/Images/cafes/sourdough.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Vegan Dessert Cafe",
      type: "cafe",
      specialty: "vegan",
      hours: "08:00-21:00",
      rating: 4.6,
      feature: "Plant-based treats",
      image: "/Images/cafes/vegan-dessert.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Tea House & Study",
      type: "tea",
      specialty: "tea",
      hours: "09:00-23:00",
      rating: 4.7,
      feature: "300+ tea varieties",
      image: "/Images/cafes/tea-house.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const types = [
    { id: 'all', name: 'All Types', icon: 'fas fa-mug-hot' },
    { id: 'coffee', name: 'Coffee Shops', icon: 'fas fa-coffee' },
    { id: 'bakery', name: 'Bakeries', icon: 'fas fa-bread-slice' },
    { id: 'cafe', name: 'Cafes', icon: 'fas fa-utensils' },
    { id: 'tea', name: 'Tea Houses', icon: 'fas fa-mug-saucer' }
  ];

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'single-origin', name: 'Single Origin' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'pour-over', name: 'Pour Over' },
    { id: 'bread', name: 'Artisan Bread' },
    { id: 'vegan', name: 'Vegan Options' },
    { id: 'tea', name: 'Premium Tea' }
  ];

  const filteredCafes = cafes.filter(cafe => {
    if (typeFilter !== 'all' && cafe.type !== typeFilter) return false;
    if (specialtyFilter !== 'all' && cafe.specialty !== specialtyFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-brown-50">
      {/* Coffee Bean Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,30 Q65,20 80,30 Q95,40 95,55 Q95,70 80,80 Q65,90 50,90 Q35,90 20,80 Q5,70 5,55 Q5,40 20,30 Q35,20 50,30 Z' fill='%237c2d12'/%3E%3C/svg%3E")`,
          backgroundSize: '80px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-brown-700">
                Cafés & Bakeries
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Discover the city's finest coffee, tea, and baked goods - perfect for every moment
            </p>
            
            {/* Cafe Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-coffee text-3xl text-amber-700 mb-3"></i>
                <div className="text-2xl font-bold">85+</div>
                <div className="text-gray-600">Coffee Shops</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-bread-slice text-3xl text-brown-600 mb-3"></i>
                <div className="text-2xl font-bold">42</div>
                <div className="text-gray-600">Artisan Bakeries</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-mug-hot text-3xl text-amber-600 mb-3"></i>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-gray-600">Late Night Cafes</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-leaf text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">18</div>
                <div className="text-gray-600">Vegan Options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cafe Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Establishment Type</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {types.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setTypeFilter(type.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      typeFilter === type.id
                        ? 'bg-gradient-to-r from-amber-700 to-brown-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={type.icon}></i>
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Specialty Focus</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {specialties.map(specialty => (
                  <button
                    key={specialty.id}
                    onClick={() => setSpecialtyFilter(specialty.id)}
                    className={`px-3 py-1 rounded-full ${
                      specialtyFilter === specialty.id
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {specialty.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cafes Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCafes.map(cafe => (
              <div
                key={cafe.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/cafe/${cafe.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{cafe.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          cafe.type === 'coffee' ? 'bg-amber-100 text-amber-800' :
                          cafe.type === 'bakery' ? 'bg-brown-100 text-brown-800' :
                          cafe.type === 'tea' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {cafe.type}
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-star text-yellow-500 mr-1"></i>
                          <span className="font-bold">{cafe.rating}</span>
                        </div>
                      </div>
                    </div>
                    <i className={`fas fa-${
                      cafe.type === 'coffee' ? 'coffee' :
                      cafe.type === 'bakery' ? 'bread-slice' :
                      cafe.type === 'tea' ? 'mug-saucer' : 'utensils'
                    } text-2xl text-amber-600`}></i>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-clock mr-3 text-brown-500"></i>
                      <span>{cafe.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-star mr-3 text-amber-500"></i>
                      <span className="font-medium">{cafe.feature}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-mug-hot mr-3 text-amber-600"></i>
                      <span className="capitalize">{cafe.specialty.replace('-', ' ')}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-amber-700 to-brown-600 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Visit Cafe
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Coffee Club */}
          <div className="mt-20 bg-gradient-to-r from-amber-800 to-brown-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Coffee Club Membership</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join our exclusive coffee club for monthly deliveries of premium beans, 
                    discounts at partner cafes, and invitations to tasting events.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Monthly Delivery</div>
                      <div className="text-sm opacity-90">Freshly roasted beans</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Cafe Discounts</div>
                      <div className="text-sm opacity-90">15% off at partners</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Tasting Events</div>
                      <div className="text-sm opacity-90">Monthly gatherings</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Brewing Guides</div>
                      <div className="text-sm opacity-90">Expert tips & recipes</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-amber-800 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Join Coffee Club
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-mug-hot text-8xl"></i>
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

export default CafesBakeries;