import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MuseumsGalleries = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const navigate = useNavigate();

  const venues = [
    {
      id: 1,
      name: "Museum of Modern Light",
      type: "modern-art",
      price: "paid",
      highlights: ["Light installations", "Digital art", "Interactive exhibits"],
      hours: "10:00-18:00",
      image: "/Images/museums/modern-light.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Historical Archives Museum",
      type: "history",
      price: "free",
      highlights: ["Ancient artifacts", "City history", "Document archives"],
      hours: "09:00-17:00",
      image: "/Images/museums/historical-archives.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Science & Innovation Center",
      type: "science",
      price: "paid",
      highlights: ["VR experiences", "Hands-on labs", "Technology exhibits"],
      hours: "10:00-20:00",
      image: "/Images/museums/science-center.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Urban Street Art Gallery",
      type: "contemporary",
      price: "free",
      highlights: ["Graffiti art", "Local artists", "Rotating exhibits"],
      hours: "12:00-22:00",
      image: "/Images/museums/street-art.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Natural History Museum",
      type: "natural-history",
      price: "paid",
      highlights: ["Dinosaur fossils", "Mineral collection", "Planetarium"],
      hours: "09:00-19:00",
      image: "/Images/museums/natural-history.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Photography Institute",
      type: "photography",
      price: "free",
      highlights: ["Vintage cameras", "Photo exhibits", "Workshops"],
      hours: "11:00-21:00",
      image: "/Images/museums/photography.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const types = [
    { id: 'all', name: 'All Venues', icon: 'fas fa-building' },
    { id: 'modern-art', name: 'Modern Art', icon: 'fas fa-paint-brush' },
    { id: 'history', name: 'History', icon: 'fas fa-landmark' },
    { id: 'science', name: 'Science', icon: 'fas fa-flask' },
    { id: 'contemporary', name: 'Contemporary', icon: 'fas fa-spray-can' },
    { id: 'natural-history', name: 'Natural History', icon: 'fas fa-dinosaur' },
    { id: 'photography', name: 'Photography', icon: 'fas fa-camera' }
  ];

  const filteredVenues = venues.filter(venue => {
    if (typeFilter !== 'all' && venue.type !== typeFilter) return false;
    if (priceFilter !== 'all' && venue.price !== priceFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Abstract Art Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '200px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <h1 className="text-5xl lg:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                  Art & Knowledge
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Immerse yourself in creativity, history, and innovation across our city's cultural institutions
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                  <i className="fas fa-palette text-3xl text-purple-600 mb-3"></i>
                  <div className="text-2xl font-bold">24+</div>
                  <div className="text-gray-600">Galleries</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                  <i className="fas fa-university text-3xl text-pink-600 mb-3"></i>
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-gray-600">Museums</div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <i className="fas fa-museum text-8xl text-white opacity-40"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {types.map(type => (
              <button
                key={type.id}
                onClick={() => setTypeFilter(type.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  typeFilter === type.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={type.icon}></i>
                <span className="font-medium">{type.name}</span>
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'free', 'paid'].map(price => (
              <button
                key={price}
                onClick={() => setPriceFilter(price)}
                className={`px-6 py-3 rounded-full capitalize ${
                  priceFilter === price
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl'
                    : 'bg-white text-gray-700'
                }`}
              >
                {price === 'all' ? 'All Prices' : price === 'free' ? 'Free Entry' : 'Paid Entry'}
              </button>
            ))}
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map(venue => (
              <div
                key={venue.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/venue/${venue.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <i className="fas fa-landmark text-8xl text-white opacity-30"></i>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-purple-600">{venue.price === 'free' ? 'FREE' : 'TICKETED'}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-gray-700">{venue.hours}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{venue.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {venue.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <i className="fas fa-star text-purple-500 mr-3"></i>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    View Exhibits
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Exhibitions */}
          <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Special Exhibition</h2>
                  <p className="text-xl mb-8 opacity-90">
                    "Lights of the Future" - An immersive digital art experience featuring 
                    3D projections, interactive installations, and AI-generated artworks.
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                      Book Tickets
                    </button>
                    <div className="text-lg">
                      <div className="font-bold">Until Dec 15</div>
                      <div className="opacity-90">Museum of Modern Light</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-vr-cardboard text-8xl"></i>
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

export default MuseumsGalleries;