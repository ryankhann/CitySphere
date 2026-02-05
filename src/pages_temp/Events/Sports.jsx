import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sports = () => {
  const [sportFilter, setSportFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const navigate = useNavigate();

  const sportsEvents = [
    {
      id: 1,
      title: "City Marathon 2024",
      sport: "running",
      level: "professional",
      date: "2024-07-21",
      location: "City Streets",
      participants: "5000",
      entry: "$75 Registration",
      image: "/Images/sports/marathon.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Beach Volleyball Championship",
      sport: "volleyball",
      level: "amateur",
      date: "2024-06-30",
      location: "North Beach",
      participants: "128 teams",
      entry: "Free to watch",
      image: "/Images/sports/volleyball.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      title: "Professional Basketball Finals",
      sport: "basketball",
      level: "professional",
      date: "2024-06-25",
      location: "City Arena",
      participants: "2 teams",
      entry: "$45-150",
      image: "/Images/sports/basketball.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      title: "Cycling Grand Prix",
      sport: "cycling",
      level: "professional",
      date: "2024-07-08",
      location: "Mountain Circuit",
      participants: "200 cyclists",
      entry: "Free to watch",
      image: "/Images/sports/cycling.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      title: "Community Soccer League",
      sport: "soccer",
      level: "amateur",
      date: "Every Saturday",
      location: "Community Park",
      participants: "16 teams",
      entry: "Free to watch",
      image: "/Images/sports/soccer.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      title: "Triathlon Challenge",
      sport: "triathlon",
      level: "amateur",
      date: "2024-08-12",
      location: "Lake District",
      participants: "800 athletes",
      entry: "$120 Registration",
      image: "/Images/sports/triathlon.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const sports = [
    { id: 'all', name: 'All Sports', icon: 'fas fa-running' },
    { id: 'running', name: 'Running', icon: 'fas fa-person-running' },
    { id: 'volleyball', name: 'Volleyball', icon: 'fas fa-volleyball' },
    { id: 'basketball', name: 'Basketball', icon: 'fas fa-basketball' },
    { id: 'cycling', name: 'Cycling', icon: 'fas fa-bicycle' },
    { id: 'soccer', name: 'Soccer', icon: 'fas fa-futbol' },
    { id: 'triathlon', name: 'Triathlon', icon: 'fas fa-swimmer' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'professional', name: 'Professional' },
    { id: 'amateur', name: 'Amateur/Community' }
  ];

  const formatDate = (dateString) => {
    if (dateString === 'Every Saturday') return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredEvents = sportsEvents.filter(event => {
    if (sportFilter !== 'all' && event.sport !== sportFilter) return false;
    if (levelFilter !== 'all' && event.level !== levelFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Athletic Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,0 L100,50 L50,100 L0,50 Z' stroke='%23dc2626' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
                Sports Events
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              From professional competitions to community games - experience the thrill of sports
            </p>
            
            {/* Sports Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-trophy text-3xl text-red-600 mb-3"></i>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-600">Professional Events</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-users text-3xl text-orange-600 mb-3"></i>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-gray-600">Community Games</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-calendar-alt text-3xl text-yellow-600 mb-3"></i>
                <div className="text-2xl font-bold">52</div>
                <div className="text-gray-600">Weeks of Sports</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-flag-checkered text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">12</div>
                <div className="text-gray-600">Annual Tournaments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Sport Type</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {sports.map(sport => (
                  <button
                    key={sport.id}
                    onClick={() => setSportFilter(sport.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      sportFilter === sport.id
                        ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={sport.icon}></i>
                    <span>{sport.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Competition Level</h3>
              <div className="flex justify-center gap-4">
                {levels.map(level => (
                  <button
                    key={level.id}
                    onClick={() => setLevelFilter(level.id)}
                    className={`px-6 py-3 rounded-full ${
                      levelFilter === level.id
                        ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-xl'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Events */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/sports-event/${event.id}`)}
              >
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">{formatDate(event.date)}</div>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        event.level === 'professional' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.level}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt mr-3 text-red-500"></i>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-users mr-3 text-orange-500"></i>
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-ticket-alt mr-3 text-yellow-500"></i>
                      <span>{event.entry}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-xl font-bold ${
                    event.entry.includes('Free to watch') || event.entry.includes('Registration')
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:opacity-90'
                      : 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:opacity-90'
                  }`}>
                    {event.entry.includes('Free to watch') ? 'Learn More' : event.entry.includes('Registration') ? 'Register Now' : 'Get Tickets'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sports Facilities */}
          <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">City Sports Facilities</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Access our world-class sports facilities for training, practice, or organizing 
                    your own events. From Olympic-sized pools to professional-grade fields.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Training Facilities</div>
                      <div className="text-sm opacity-90">Open to public</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Equipment Rental</div>
                      <div className="text-sm opacity-90">Affordable rates</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Coaching Services</div>
                      <div className="text-sm opacity-90">Professional trainers</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Event Organization</div>
                      <div className="text-sm opacity-90">Help with planning</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-red-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    View Facilities
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-dumbbell text-8xl"></i>
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

export default Sports;