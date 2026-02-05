import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landmarks = () => {
  const [eraFilter, setEraFilter] = useState('all');
  const [viewMode, setViewMode] = useState('cards');
  const navigate = useNavigate();

  const landmarks = [
    {
      id: 1,
      name: "Granite Tower",
      era: "1920s",
      architect: "John Sterling",
      height: "285m",
      style: "Art Deco",
      built: 1929,
      image: "/Images/landmarks/granite-tower.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Crystal Bridge",
      era: "1960s",
      architect: "Maya Chen",
      length: "420m",
      style: "Modernist",
      built: 1964,
      image: "/Images/landmarks/crystal-bridge.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Old City Hall",
      era: "1880s",
      architect: "Victor Grant",
      height: "75m",
      style: "Neoclassical",
      built: 1888,
      image: "/Images/landmarks/city-hall.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Solar Spire",
      era: "2020s",
      architect: "Eco-Tech Group",
      height: "320m",
      style: "Sustainable",
      built: 2022,
      image: "/Images/landmarks/solar-spire.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Iron Market",
      era: "1890s",
      architect: "Industrial Guild",
      area: "12,000m²",
      style: "Victorian",
      built: 1895,
      image: "/Images/landmarks/iron-market.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Glass Opera House",
      era: "1980s",
      architect: "Renzo Luna",
      capacity: "1800",
      style: "Postmodern",
      built: 1987,
      image: "/Images/landmarks/opera-house.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const eras = [
    { id: 'all', name: 'All Eras', color: 'bg-gray-500' },
    { id: 'pre-1900', name: 'Pre-1900', color: 'bg-amber-800' },
    { id: '1900s', name: 'Early 1900s', color: 'bg-red-600' },
    { id: 'mid-1900', name: 'Mid-1900s', color: 'bg-blue-600' },
    { id: 'late-1900', name: 'Late 1900s', color: 'bg-purple-600' },
    { id: '2000s', name: 'Modern', color: 'bg-green-600' }
  ];

  const getEraCategory = (year) => {
    if (year < 1900) return 'pre-1900';
    if (year < 1930) return '1900s';
    if (year < 1960) return 'mid-1900';
    if (year < 2000) return 'late-1900';
    return '2000s';
  };

  const filteredLandmarks = eraFilter === 'all' 
    ? landmarks 
    : landmarks.filter(landmark => getEraCategory(landmark.built) === eraFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-stone-50 to-slate-100">
      {/* Architectural Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #888 1px, transparent 1px), linear-gradient(#888 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <h1 className="text-5xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-blue-800 mb-6">
                Urban Landmarks
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Architectural marvels that define our city's skyline and history
              </p>
              
              {/* Timeline Preview */}
              <div className="relative h-2 bg-gray-300 rounded-full mb-4">
                {[1880, 1920, 1960, 2000, 2024].map(year => (
                  <div
                    key={year}
                    className="absolute w-4 h-4 -mt-1 rounded-full bg-white border-2 border-gray-400"
                    style={{ left: `${((year - 1880) / (2024 - 1880)) * 100}%` }}
                  >
                    <div className="absolute -bottom-6 text-sm text-gray-600">{year}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-blue-700 flex items-center justify-center">
                  <i className="fas fa-archway text-8xl text-white opacity-40"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Era Timeline Navigation */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg sticky top-20 z-40">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-2">
            {eras.map(era => (
              <button
                key={era.id}
                onClick={() => setEraFilter(era.id)}
                className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                  eraFilter === era.id
                    ? `${era.color} text-white shadow-xl scale-105`
                    : 'bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${era.color}`}></div>
                <span className="font-bold">{era.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* View Mode Toggle */}
      <section className="py-8">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-6 py-3 rounded-full flex items-center gap-3 ${
                viewMode === 'cards' 
                  ? 'bg-gradient-to-r from-stone-700 to-blue-700 text-white' 
                  : 'bg-gray-100'
              }`}
            >
              <i className="fas fa-th-large"></i>
              <span>Card View</span>
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-3 rounded-full flex items-center gap-3 ${
                viewMode === 'timeline' 
                  ? 'bg-gradient-to-r from-stone-700 to-blue-700 text-white' 
                  : 'bg-gray-100'
              }`}
            >
              <i className="fas fa-timeline"></i>
              <span>Timeline View</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-6 py-3 rounded-full flex items-center gap-3 ${
                viewMode === 'map' 
                  ? 'bg-gradient-to-r from-stone-700 to-blue-700 text-white' 
                  : 'bg-gray-100'
              }`}
            >
              <i className="fas fa-map-marked-alt"></i>
              <span>Map View</span>
            </button>
          </div>

          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLandmarks.map(landmark => (
                <div
                  key={landmark.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => navigate(`/landmark/${landmark.id}`)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-blue-600 flex items-center justify-center">
                      <i className="fas fa-landmark text-8xl text-white opacity-30"></i>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-bold">{landmark.built}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-bold text-stone-700">{landmark.era}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{landmark.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500">Architect</div>
                        <div className="font-medium">{landmark.architect}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Style</div>
                        <div className="font-medium">{landmark.style}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Height</div>
                        <div className="font-medium">{landmark.height}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Built</div>
                        <div className="font-medium">{landmark.built}</div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-stone-700 to-blue-700 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                      Explore History
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : viewMode === 'timeline' ? (
            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-stone-400 to-blue-400"></div>
              
              {filteredLandmarks.map((landmark, index) => (
                <div
                  key={landmark.id}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 z-10"></div>
                  
                  <div className={`md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } ml-12 md:ml-0`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-4xl font-bold text-stone-700 mb-2">{landmark.built}</div>
                      <h3 className="text-xl font-bold mb-3">{landmark.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fas fa-user-architect text-blue-600"></i>
                        <span>{landmark.architect}</span>
                      </div>
                      <button className="text-blue-600 font-bold hover:text-blue-800">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-600 to-blue-600">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {filteredLandmarks.map((landmark, index) => {
                    const positions = [
                      { top: '20%', left: '30%' },
                      { top: '40%', left: '60%' },
                      { top: '60%', left: '40%' },
                      { top: '30%', left: '70%' },
                      { top: '70%', left: '20%' },
                      { top: '50%', left: '50%' }
                    ];
                    
                    return (
                      <div
                        key={landmark.id}
                        className="absolute cursor-pointer group"
                        style={positions[index]}
                        onClick={() => navigate(`/landmark/${landmark.id}`)}
                      >
                        <div className="w-6 h-6 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center group-hover:scale-150 transition-transform">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {landmark.name}
                        </div>
                      </div>
                    );
                  })}
                  <i className="fas fa-map text-8xl text-white opacity-30"></i>
                </div>
              </div>
            </div>
          )}

          {/* Architectural Facts */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-stone-700 to-blue-800 text-white p-8 rounded-3xl">
              <i className="fas fa-ruler-combined text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-3">Tallest Structure</h3>
              <p className="text-xl">Solar Spire - 320 meters</p>
            </div>
            <div className="bg-gradient-to-br from-stone-600 to-blue-700 text-white p-8 rounded-3xl">
              <i className="fas fa-history text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-3">Oldest Building</h3>
              <p className="text-xl">Old City Hall - 1888</p>
            </div>
            <div className="bg-gradient-to-br from-stone-500 to-blue-600 text-white p-8 rounded-3xl">
              <i className="fas fa-palette text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-3">Architectural Styles</h3>
              <p className="text-xl">12 distinct styles represented</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landmarks;