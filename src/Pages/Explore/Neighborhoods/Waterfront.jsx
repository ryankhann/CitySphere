import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Waterfront = () => {
  const [activityFilter, setActivityFilter] = useState('all');
  const navigate = useNavigate();

  const waterfrontSpots = [
    {
      id: 1,
      name: "Marina Walk",
      activity: "walking",
      description: "Scenic path along luxury yachts",
      distance: "2.5km",
      bestTime: "sunrise",
      image: "/Images/neighborhoods/marina-walk.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Kayak Rental Center",
      activity: "water-sports",
      description: "Explore hidden coves by kayak",
      distance: "0.1km",
      bestTime: "morning",
      image: "/Images/neighborhoods/kayak-rental.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Fisherman's Wharf",
      activity: "food",
      description: "Fresh seafood market & restaurants",
      distance: "0.8km",
      bestTime: "lunch",
      image: "/Images/neighborhoods/fishermans-wharf.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Sunset Pier",
      activity: "relaxation",
      description: "Perfect sunset viewing spot",
      distance: "1.2km",
      bestTime: "sunset",
      image: "/Images/neighborhoods/sunset-pier.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Waterfront Yoga",
      activity: "fitness",
      description: "Morning yoga with ocean views",
      distance: "0.5km",
      bestTime: "dawn",
      image: "/Images/neighborhoods/waterfront-yoga.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Sailing Club",
      activity: "water-sports",
      description: "Learn to sail in protected waters",
      distance: "0.3km",
      bestTime: "afternoon",
      image: "/Images/neighborhoods/sailing-club.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const activities = [
    { id: 'all', name: 'All Activities', icon: 'fas fa-water' },
    { id: 'walking', name: 'Walking', icon: 'fas fa-walking' },
    { id: 'water-sports', name: 'Water Sports', icon: 'fas fa-ship' },
    { id: 'food', name: 'Dining', icon: 'fas fa-utensils' },
    { id: 'relaxation', name: 'Relaxation', icon: 'fas fa-umbrella-beach' },
    { id: 'fitness', name: 'Fitness', icon: 'fas fa-running' }
  ];

  const filteredSpots = activityFilter === 'all' 
    ? waterfrontSpots 
    : waterfrontSpots.filter(spot => spot.activity === activityFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Wave Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%2300b4d8'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%2300b4d8'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%2300b4d8'/%3E%3C/svg%3E")`,
          backgroundSize: '1200px 120px',
          backgroundPosition: 'bottom'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Waterfront District
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Where the city meets the sea - a vibrant blend of maritime heritage and modern recreation
            </p>
            
            {/* Tide Information */}
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Current Tide</div>
                  <div className="text-3xl font-bold text-blue-600">High Tide</div>
                  <div className="text-gray-600">↑ Rising</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Water Temp</div>
                  <div className="text-3xl font-bold text-cyan-600">18°C</div>
                  <div className="text-gray-600">Comfortable</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Wind Speed</div>
                  <div className="text-3xl font-bold text-blue-500">12 km/h</div>
                  <div className="text-gray-600">Light Breeze</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Filter */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3">
            {activities.map(activity => (
              <button
                key={activity.id}
                onClick={() => setActivityFilter(activity.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  activityFilter === activity.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={activity.icon}></i>
                <span className="font-medium">{activity.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Waterfront Spots */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.map(spot => (
              <div
                key={spot.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/waterfront-spot/${spot.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{spot.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <i className="fas fa-location-dot text-blue-500"></i>
                        <span className="text-gray-600">{spot.distance} from center</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      <i className={`fas fa-${
                        spot.bestTime === 'sunrise' ? 'sun' :
                        spot.bestTime === 'sunset' ? 'moon' :
                        spot.bestTime === 'dawn' ? 'cloud-sun' :
                        spot.bestTime === 'morning' ? 'coffee' :
                        spot.bestTime === 'afternoon' ? 'sun' : 'utensils'
                      } mr-2`}></i>
                      {spot.bestTime}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{spot.description}</p>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Explore Spot
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Water Activities */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Water Activities Guide</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Discover the best water-based activities with our comprehensive guide. 
                    From paddleboarding to sunset cruises, find your perfect aquatic adventure.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Kayaking</div>
                      <div className="text-sm opacity-90">From $15/hour</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Sailing Lessons</div>
                      <div className="text-sm opacity-90">From $45/session</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Fishing Trips</div>
                      <div className="text-sm opacity-90">From $75/person</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Sunset Cruise</div>
                      <div className="text-sm opacity-90">From $30/person</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    View All Activities
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                    <i className="fas fa-ship text-8xl"></i>
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

export default Waterfront;