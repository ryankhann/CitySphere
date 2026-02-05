import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OldTown = () => {
  const [eraFilter, setEraFilter] = useState('all');
  const navigate = useNavigate();

  const historicalSites = [
    {
      id: 1,
      name: "Founder's Square",
      era: "1700s",
      type: "square",
      description: "Original city settlement point",
      significance: "First public gathering space",
      image: "/Images/neighborhoods/founders-square.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Victorian Row Houses",
      era: "1800s",
      type: "architecture",
      description: "Colorful preserved residences",
      significance: "Best preserved Victorian street",
      image: "/Images/neighborhoods/victorian-houses.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Old Port District",
      era: "1700s",
      type: "port",
      description: "Historical trading docks",
      significance: "International trade hub 1750-1900",
      image: "/Images/neighborhoods/old-port.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Clock Tower Inn",
      era: "1800s",
      type: "inn",
      description: "Operational since 1824",
      significance: "Oldest continuously operating hotel",
      image: "/Images/neighborhoods/clock-inn.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Printing Press Museum",
      era: "1900s",
      type: "museum",
      description: "Working vintage printing presses",
      significance: "First city newspaper location",
      image: "/Images/neighborhoods/printing-museum.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Cobblestone Alley",
      era: "1700s",
      type: "street",
      description: "Original stone paving",
      significance: "Only remaining cobblestone street",
      image: "/Images/neighborhoods/cobblestone-alley.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const eras = [
    { id: 'all', name: 'All Eras', color: 'bg-amber-800' },
    { id: '1700s', name: '1700s', color: 'bg-amber-900' },
    { id: '1800s', name: '1800s', color: 'bg-amber-700' },
    { id: '1900s', name: '1900s', color: 'bg-amber-600' }
  ];

  const filteredSites = eraFilter === 'all' 
    ? historicalSites 
    : historicalSites.filter(site => site.era === eraFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Vintage Paper Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '200px'
      }}></div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-orange-700">
                Old Town District
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Where history comes alive through preserved architecture and centuries-old stories
            </p>
            
            {/* Historical Timeline */}
            <div className="relative h-2 bg-gray-300 rounded-full max-w-4xl mx-auto mb-4">
              {[1700, 1750, 1800, 1850, 1900, 1950].map(year => (
                <div
                  key={year}
                  className="absolute w-4 h-4 -mt-1 rounded-full bg-white border-2 border-amber-800"
                  style={{ left: `${((year - 1700) / (1950 - 1700)) * 100}%` }}
                >
                  <div className="absolute -bottom-6 text-sm text-gray-600">{year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Era Navigation */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-4">
            {eras.map(era => (
              <button
                key={era.id}
                onClick={() => setEraFilter(era.id)}
                className={`px-8 py-4 rounded-2xl flex items-center gap-4 transition-all ${
                  eraFilter === era.id
                    ? `${era.color} text-white shadow-xl scale-105`
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={`fas fa-${
                  era.id === '1700s' ? 'horse' :
                  era.id === '1800s' ? 'train' :
                  era.id === '1900s' ? 'car' : 'history'
                } text-2xl`}></i>
                <div>
                  <div className="text-xl font-bold">{era.name}</div>
                  <div className="text-sm opacity-80">Historical Period</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Sites */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSites.map(site => (
              <div
                key={site.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-amber-200"
                onClick={() => navigate(`/historical-site/${site.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`px-3 py-1 ${site.era === '1700s' ? 'bg-amber-900' : site.era === '1800s' ? 'bg-amber-700' : 'bg-amber-600'} text-white rounded-full text-sm inline-block mb-3`}>
                        {site.era}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{site.name}</h3>
                    </div>
                    <i className="fas fa-landmark text-2xl text-amber-600"></i>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{site.description}</p>
                  
                  <div className="bg-amber-50 p-4 rounded-xl mb-6">
                    <div className="text-sm text-amber-800 font-bold mb-1">Historical Significance</div>
                    <div className="text-gray-700">{site.significance}</div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Learn History
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Walking Tour */}
          <div className="mt-20 bg-gradient-to-r from-amber-800 to-orange-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Guided Historical Tour</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join our 2-hour walking tour led by local historians. Discover hidden stories, 
                    architectural secrets, and the fascinating history of Old Town.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-clock text-2xl"></i>
                      <div>
                        <div className="font-bold">Daily at 10:00 & 14:00</div>
                        <div className="opacity-90">2-hour duration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <i className="fas fa-map-marker-alt text-2xl"></i>
                      <div>
                        <div className="font-bold">Starts at Founder's Square</div>
                        <div className="opacity-90">Free with reservation</div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 px-8 py-4 bg-white text-amber-700 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Reserve Your Spot
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-walking text-8xl"></i>
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

export default OldTown;