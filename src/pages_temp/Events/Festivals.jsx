import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Festivals = () => {
  const [seasonFilter, setSeasonFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const navigate = useNavigate();

  const festivals = [
    {
      id: 1,
      name: "Spring Bloom Festival",
      season: "spring",
      type: "nature",
      date: "Apr 15-22",
      location: "Botanical Gardens",
      highlights: ["Flower shows", "Gardening workshops", "Picnic concerts"],
      tickets: "Free",
      image: "/Images/festivals/spring-bloom.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Summer Music Fest",
      season: "summer",
      type: "music",
      date: "Jul 28-30",
      location: "Waterfront Park",
      highlights: ["3 stages", "Food trucks", "Late-night parties"],
      tickets: "$99 Weekend Pass",
      image: "/Images/festivals/summer-music.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Harvest Food Fair",
      season: "fall",
      type: "food",
      date: "Oct 5-8",
      location: "Farmers Market",
      highlights: ["Local produce", "Cooking demos", "Wine tasting"],
      tickets: "$15 Entry",
      image: "/Images/festivals/harvest-food.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Winter Lights Festival",
      season: "winter",
      type: "lights",
      date: "Dec 15-Jan 5",
      location: "City Center",
      highlights: ["Light installations", "Ice skating", "Hot cocoa stalls"],
      tickets: "Free",
      image: "/Images/festivals/winter-lights.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Film & Arts Festival",
      season: "fall",
      type: "arts",
      date: "Sep 10-17",
      location: "Cinema District",
      highlights: ["Independent films", "Artist talks", "Gallery openings"],
      tickets: "$10 per screening",
      image: "/Images/festivals/film-arts.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Cultural Diversity Fest",
      season: "summer",
      type: "cultural",
      date: "Aug 12-13",
      location: "International Plaza",
      highlights: ["Global cuisine", "Traditional dances", "Craft markets"],
      tickets: "Free",
      image: "/Images/festivals/cultural-diversity.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const seasons = [
    { id: 'all', name: 'All Seasons', color: 'bg-gray-500' },
    { id: 'spring', name: 'Spring', color: 'bg-green-500' },
    { id: 'summer', name: 'Summer', color: 'bg-yellow-500' },
    { id: 'fall', name: 'Fall', color: 'bg-orange-600' },
    { id: 'winter', name: 'Winter', color: 'bg-blue-400' }
  ];

  const types = [
    { id: 'all', name: 'All Types', icon: 'fas fa-festival' },
    { id: 'music', name: 'Music', icon: 'fas fa-music' },
    { id: 'food', name: 'Food', icon: 'fas fa-utensils' },
    { id: 'arts', name: 'Arts', icon: 'fas fa-palette' },
    { id: 'cultural', name: 'Cultural', icon: 'fas fa-globe-americas' },
    { id: 'nature', name: 'Nature', icon: 'fas fa-leaf' },
    { id: 'lights', name: 'Lights', icon: 'fas fa-lightbulb' }
  ];

  const filteredFestivals = festivals.filter(festival => {
    if (seasonFilter !== 'all' && festival.season !== seasonFilter) return false;
    if (typeFilter !== 'all' && festival.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Celebration Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 C60,10 70,15 75,25 C80,35 85,45 85,55 C85,65 80,75 75,85 C70,95 60,100 50,100 C40,100 30,95 25,85 C20,75 15,65 15,55 C15,45 20,35 25,25 C30,15 40,10 50,10 Z' fill='%2310B981'/%3E%3C/svg%3E")`,
          backgroundSize: '80px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
                Festival Season
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Celebrate life, culture, and community at our city's vibrant festivals throughout the year
            </p>
            
            {/* Festival Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-calendar-alt text-3xl text-green-600 mb-3"></i>
                <div className="text-3xl font-bold">24+</div>
                <div className="text-gray-600">Annual Festivals</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-users text-3xl text-teal-600 mb-3"></i>
                <div className="text-3xl font-bold">500K+</div>
                <div className="text-gray-600">Annual Visitors</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-music text-3xl text-yellow-600 mb-3"></i>
                <div className="text-3xl font-bold">12</div>
                <div className="text-gray-600">Music Festivals</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-utensils text-3xl text-orange-600 mb-3"></i>
                <div className="text-3xl font-bold">8</div>
                <div className="text-gray-600">Food Festivals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Filter by Season</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {seasons.map(season => (
                  <button
                    key={season.id}
                    onClick={() => setSeasonFilter(season.id)}
                    className={`px-6 py-3 rounded-full flex items-center gap-3 ${
                      seasonFilter === season.id
                        ? `${season.color} text-white shadow-xl`
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={`fas fa-${
                      season.id === 'spring' ? 'seedling' :
                      season.id === 'summer' ? 'sun' :
                      season.id === 'fall' ? 'leaf' :
                      season.id === 'winter' ? 'snowflake' : 'calendar'
                    }`}></i>
                    <span>{season.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Filter by Type</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {types.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setTypeFilter(type.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      typeFilter === type.id
                        ? 'bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={type.icon}></i>
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festivals Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFestivals.map(festival => (
              <div
                key={festival.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/festival/${festival.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`px-3 py-1 rounded-full text-sm inline-block mb-3 ${
                        festival.season === 'spring' ? 'bg-green-100 text-green-800' :
                        festival.season === 'summer' ? 'bg-yellow-100 text-yellow-800' :
                        festival.season === 'fall' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {festival.season.toUpperCase()}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{festival.name}</h3>
                    </div>
                    <i className="fas fa-festival text-2xl text-green-600"></i>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-calendar-day mr-3 text-teal-500"></i>
                      <span className="font-bold">{festival.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt mr-3 text-green-500"></i>
                      <span>{festival.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-ticket-alt mr-3 text-yellow-500"></i>
                      <span>{festival.tickets}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {festival.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <i className="fas fa-star text-green-500 mr-3 text-sm"></i>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    View Festival Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Festival Calendar */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-teal-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Festival Calendar 2024</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Download our complete festival calendar with dates, locations, and ticket information 
                    for all major events throughout the year.
                  </p>
                  <button className="px-8 py-4 bg-white text-green-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Download Calendar
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-calendar text-8xl"></i>
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

export default Festivals;