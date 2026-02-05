import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Attractions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const attractions = [
    {
      id: 1,
      name: "Skyline Observatory",
      category: "viewpoint",
      description: "360° panoramic view of the city",
      rating: 4.8,
      image: "/Images/attractions/observatory.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Crystal Garden Conservatory",
      category: "garden",
      description: "Glass-domed tropical paradise",
      rating: 4.9,
      image: "/Images/attractions/conservatory.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Urban Art Maze",
      category: "art",
      description: "Interactive street art installation",
      rating: 4.7,
      image: "/Images/attractions/art-maze.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Historic Clock Tower",
      category: "historical",
      description: "19th century mechanical marvel",
      rating: 4.6,
      image: "/Images/attractions/clock-tower.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Underground Tunnels",
      category: "historical",
      description: "Prohibition-era secret passages",
      rating: 4.5,
      image: "/Images/attractions/tunnels.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Floating Market",
      category: "shopping",
      description: "Waterfront vendor boats",
      rating: 4.4,
      image: "/Images/attractions/floating-market.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Attractions', icon: 'fas fa-star' },
    { id: 'viewpoint', name: 'Viewpoints', icon: 'fas fa-mountain' },
    { id: 'garden', name: 'Gardens', icon: 'fas fa-leaf' },
    { id: 'art', name: 'Art Installations', icon: 'fas fa-palette' },
    { id: 'historical', name: 'Historical', icon: 'fas fa-landmark' },
    { id: 'shopping', name: 'Shopping', icon: 'fas fa-shopping-bag' }
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(attr => attr.category === selectedCategory);

  const handleImageError = (e, fallbackColor) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    if (parent) {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'w-full h-full flex items-center justify-center text-white text-2xl font-bold';
      fallbackDiv.style.background = fallbackColor;
      fallbackDiv.textContent = 'No Image';
      parent.appendChild(fallbackDiv);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hexagonal Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 25V75L50 100L0 75V25L50 0Z' fill='%23666'/%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <h1 className="text-5xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                City Attractions
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Discover the most breathtaking, unusual, and memorable experiences our city has to offer.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <i className="fas fa-map-pin text-xl"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold">48+</div>
                  <div className="text-gray-600">Unique Attractions</div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <i className="fas fa-compass text-8xl text-white opacity-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <i className={category.icon}></i>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map(attraction => (
              <div
                key={attraction.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/attraction/${attraction.id}`)}
              >
                {/* Tilt Effect Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => handleImageError(e, attraction.color)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <i className="fas fa-star text-yellow-500"></i>
                    <span className="font-bold">{attraction.rating}</span>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  
                  {/* Interactive Preview */}
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                      Explore More
                    </button>
                    <div className="text-blue-600">
                      <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Preview */}
          <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-100 to-purple-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Explore Attractions Map</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Use our interactive map to discover attractions near you. Filter by distance, rating, or category.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-bold hover:shadow-xl transition-all">
                  <i className="fas fa-map-marked-alt mr-3"></i>
                  Open Interactive Map
                </button>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                {/* Map placeholder with pins */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Map pins */}
                    <div className="absolute -top-8 -left-8 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-yellow-500 rounded-full animate-pulse"></div>
                    <i className="fas fa-map text-8xl text-white opacity-30"></i>
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

export default Attractions;