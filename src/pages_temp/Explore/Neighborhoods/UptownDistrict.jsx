import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UptownDistrict = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const navigate = useNavigate();

  const uptownFeatures = [
    {
      id: 1,
      name: "Designer Boutique Row",
      category: "shopping",
      description: "Luxury fashion houses and exclusive designers",
      priceRange: "$$$$",
      vibe: "Luxury",
      image: "/Images/neighborhoods/boutique-row.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Michelin-Star Restaurant",
      category: "dining",
      description: "Award-winning fine dining experience",
      priceRange: "$$$$",
      vibe: "Elegant",
      image: "/Images/neighborhoods/michelin-restaurant.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Private Art Gallery",
      category: "art",
      description: "Exclusive contemporary art exhibitions",
      priceRange: "$$$",
      vibe: "Sophisticated",
      image: "/Images/neighborhoods/private-gallery.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Luxury Spa Retreat",
      category: "wellness",
      description: "Five-star wellness and relaxation center",
      priceRange: "$$$$",
      vibe: "Tranquil",
      image: "/Images/neighborhoods/luxury-spa.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "High-End Wine Bar",
      category: "nightlife",
      description: "Rare vintage wines and curated spirits",
      priceRange: "$$$",
      vibe: "Exclusive",
      image: "/Images/neighborhoods/wine-bar.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Design Hotel Lounge",
      category: "hotels",
      description: "Architectural masterpiece with rooftop views",
      priceRange: "$$$$",
      vibe: "Modern",
      image: "/Images/neighborhoods/design-hotel.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Luxury', icon: 'fas fa-crown' },
    { id: 'shopping', name: 'Shopping', icon: 'fas fa-shopping-bag' },
    { id: 'dining', name: 'Dining', icon: 'fas fa-utensils' },
    { id: 'art', name: 'Art & Culture', icon: 'fas fa-palette' },
    { id: 'wellness', name: 'Wellness', icon: 'fas fa-spa' },
    { id: 'nightlife', name: 'Nightlife', icon: 'fas fa-wine-glass-alt' },
    { id: 'hotels', name: 'Hotels', icon: 'fas fa-hotel' }
  ];

  const filteredFeatures = categoryFilter === 'all' 
    ? uptownFeatures 
    : uptownFeatures.filter(feature => feature.category === categoryFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Diamond Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,0 L100,50 L50,100 L0,50 Z' fill='%239C27B0'/%3E%3C/svg%3E")`,
          backgroundSize: '60px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
                Uptown District
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              The epitome of luxury, sophistication, and exclusive urban living
            </p>
            
            {/* Luxury Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-star text-3xl text-yellow-500 mb-3"></i>
                <div className="text-2xl font-bold">12</div>
                <div className="text-gray-600">Michelin Stars</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-gem text-3xl text-purple-600 mb-3"></i>
                <div className="text-2xl font-bold">48</div>
                <div className="text-gray-600">Designer Boutiques</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-building text-3xl text-pink-600 mb-3"></i>
                <div className="text-2xl font-bold">8</div>
                <div className="text-gray-600">Five-Star Hotels</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-paint-brush text-3xl text-blue-600 mb-3"></i>
                <div className="text-2xl font-bold">24</div>
                <div className="text-gray-600">Art Galleries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Categories */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg sticky top-20 z-40">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  categoryFilter === category.id
                    ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={category.icon}></i>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map(feature => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200"
                onClick={() => navigate(`/luxury-feature/${feature.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {feature.vibe}
                        </div>
                        <div className="text-yellow-600">
                          {feature.priceRange.split('').map((_, i) => (
                            <i key={i} className="fas fa-dollar-sign text-xs"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <i className={`fas fa-${
                      feature.category === 'shopping' ? 'shopping-bag' :
                      feature.category === 'dining' ? 'utensils' :
                      feature.category === 'art' ? 'palette' :
                      feature.category === 'wellness' ? 'spa' :
                      feature.category === 'nightlife' ? 'wine-glass-alt' :
                      'hotel'
                    } text-2xl text-purple-600`}></i>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Experience Luxury
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Exclusive Membership */}
          <div className="mt-20 bg-gradient-to-r from-purple-900 to-pink-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Uptown Elite Access</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join our exclusive membership program for VIP access to private events, 
                    priority reservations, and curated luxury experiences throughout the district.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-key text-2xl"></i>
                      <div>
                        <div className="font-bold">Private Access</div>
                        <div className="opacity-90">Members-only venues and events</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <i className="fas fa-calendar-star text-2xl"></i>
                      <div>
                        <div className="font-bold">Priority Booking</div>
                        <div className="opacity-90">Reserve exclusive experiences first</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <i className="fas fa-gift text-2xl"></i>
                      <div>
                        <div className="font-bold">Luxury Perks</div>
                        <div className="opacity-90">Complimentary services and gifts</div>
                      </div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-purple-700 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Apply for Membership
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-crown text-8xl"></i>
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

export default UptownDistrict;