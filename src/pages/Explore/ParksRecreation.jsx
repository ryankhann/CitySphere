import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ParksRecreation = () => {
  const [activityFilter, setActivityFilter] = useState('all');
  const [seasonFilter, setSeasonFilter] = useState('all');
  const navigate = useNavigate();

  const parks = [
    {
      id: 1,
      name: "Whispering Pines Park",
      size: "85 acres",
      activities: ["hiking", "picnic", "bird-watching"],
      season: "year-round",
      features: "Ancient redwoods, serene lake",
      image: "/Images/parks/whispering-pines.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Urban Oasis Gardens",
      size: "12 acres",
      activities: ["meditation", "yoga", "botany"],
      season: "spring-summer",
      features: "Zen gardens, koi ponds",
      image: "/Images/parks/urban-oasis.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Riverside Adventure Park",
      size: "120 acres",
      activities: ["cycling", "kayaking", "rock-climbing"],
      season: "year-round",
      features: "Whitewater rapids, climbing walls",
      image: "/Images/parks/riverside.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Sunset Bluffs",
      size: "45 acres",
      activities: ["photography", "stargazing", "hiking"],
      season: "summer-fall",
      features: "Cliffside views, observatory",
      image: "/Images/parks/sunset-bluffs.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Children's Wonderland",
      size: "8 acres",
      activities: ["playground", "family", "education"],
      season: "year-round",
      features: "Interactive sculptures, water play",
      image: "/Images/parks/wonderland.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Winter Gardens",
      size: "22 acres",
      activities: ["ice-skating", "hot-springs", "winter-sports"],
      season: "winter",
      features: "Heated pathways, ice rink",
      image: "/Images/parks/winter-gardens.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const activities = [
    { id: 'all', name: 'All Activities', icon: 'fas fa-compass' },
    { id: 'hiking', name: 'Hiking', icon: 'fas fa-hiking' },
    { id: 'cycling', name: 'Cycling', icon: 'fas fa-bicycle' },
    { id: 'water', name: 'Water Sports', icon: 'fas fa-water' },
    { id: 'picnic', name: 'Picnic', icon: 'fas fa-utensils' },
    { id: 'family', name: 'Family Fun', icon: 'fas fa-child' },
    { id: 'meditation', name: 'Meditation', icon: 'fas fa-spa' }
  ];

  const seasons = [
    { id: 'all', name: 'All Seasons', icon: 'fas fa-calendar-alt' },
    { id: 'spring', name: 'Spring', icon: 'fas fa-seedling', color: 'bg-green-500' },
    { id: 'summer', name: 'Summer', icon: 'fas fa-sun', color: 'bg-yellow-500' },
    { id: 'fall', name: 'Fall', icon: 'fas fa-leaf', color: 'bg-orange-600' },
    { id: 'winter', name: 'Winter', icon: 'fas fa-snowflake', color: 'bg-blue-400' }
  ];

  const filteredParks = parks.filter(park => {
    if (activityFilter !== 'all' && !park.activities.includes(activityFilter)) return false;
    if (seasonFilter !== 'all' && park.season !== 'year-round' && !park.season.includes(seasonFilter)) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Leaf Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '200px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                Urban Green Spaces
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Escape the urban jungle in our city's vibrant parks and recreational areas
            </p>
            
            {/* Interactive Nature Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-tree text-3xl text-emerald-600 mb-3"></i>
                <div className="text-3xl font-bold text-gray-900">1,200+</div>
                <div className="text-gray-600">Acres of Green</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-dog text-3xl text-amber-600 mb-3"></i>
                <div className="text-3xl font-bold text-gray-900">24</div>
                <div className="text-gray-600">Dog Parks</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-bicycle text-3xl text-blue-600 mb-3"></i>
                <div className="text-3xl font-bold text-gray-900">85km</div>
                <div className="text-gray-600">Bike Trails</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-water text-3xl text-cyan-600 mb-3"></i>
                <div className="text-3xl font-bold text-gray-900">12</div>
                <div className="text-gray-600">Lakes & Ponds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Activity</h2>
              <div className="flex flex-wrap gap-3">
                {activities.map(activity => (
                  <button
                    key={activity.id}
                    onClick={() => setActivityFilter(activity.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                      activityFilter === activity.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <i className={activity.icon}></i>
                    <span>{activity.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Season</h2>
              <div className="flex flex-wrap gap-2">
                {seasons.map(season => (
                  <button
                    key={season.id}
                    onClick={() => setSeasonFilter(season.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      seasonFilter === season.id
                        ? `${season.color || 'bg-emerald-500'} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={season.icon}></i>
                    <span>{season.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredParks.map(park => (
              <div
                key={park.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/park/${park.id}`)}
              >
                {/* Park Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <i className="fas fa-tree text-8xl text-white opacity-30"></i>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-emerald-700">{park.size}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{park.name}</h3>
                  <p className="text-gray-600 mb-6">{park.features}</p>
                  
                  {/* Activities Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {park.activities.map(activity => (
                      <span key={activity} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                  
                  {/* Seasonal Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <i className={`fas fa-${
                        park.season === 'year-round' ? 'calendar-alt' :
                        park.season.includes('winter') ? 'snowflake' :
                        park.season.includes('summer') ? 'sun' :
                        'leaf'
                      } text-emerald-600`}></i>
                      <span className="text-gray-700">
                        {park.season === 'year-round' ? 'Year Round' : park.season.replace('-', ' & ')}
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Plan Your Visit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Nature Guide */}
          <div className="mt-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Nature Guide</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Download our free seasonal guide to discover blooming flowers, wildlife spotting locations, 
                    and the best times to visit each park throughout the year.
                  </p>
                  <button className="px-8 py-4 bg-white text-emerald-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-3">
                    <i className="fas fa-download"></i>
                    Download Guide
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                    <i className="fas fa-book-open text-8xl"></i>
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

export default ParksRecreation;