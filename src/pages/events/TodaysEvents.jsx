import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TodaysEvents = () => {
  const [timeFilter, setTimeFilter] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const events = [
    {
      id: 1,
      title: "Morning Yoga at City Park",
      time: "07:00 - 08:00",
      category: "wellness",
      location: "Central Park Pavilion",
      attendees: 45,
      image: "/Images/events/yoga.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Tech Startup Pitch",
      time: "10:30 - 12:30",
      category: "business",
      location: "Innovation Hub",
      attendees: 120,
      image: "/Images/events/pitch.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      title: "Food Truck Festival",
      time: "12:00 - 20:00",
      category: "food",
      location: "Waterfront District",
      attendees: 500,
      image: "/Images/events/food-truck.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      title: "Art Gallery Opening",
      time: "18:00 - 21:00",
      category: "art",
      location: "Modern Art Museum",
      attendees: 200,
      image: "/Images/events/gallery.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      title: "Jazz Night Live",
      time: "20:00 - 23:00",
      category: "music",
      location: "Blue Note Club",
      attendees: 150,
      image: "/Images/events/jazz.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      title: "Midnight Stargazing",
      time: "23:30 - 02:00",
      category: "nature",
      location: "Observatory Hill",
      attendees: 80,
      image: "/Images/events/stargazing.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const getTimeStatus = (eventTime) => {
    const [start, end] = eventTime.split(' - ');
    const now = formatTime(currentTime);
    if (now < start) return 'upcoming';
    if (now >= start && now <= end) return 'ongoing';
    return 'past';
  };

  const filteredEvents = events.filter(event => {
    if (timeFilter === 'all') return true;
    return getTimeStatus(event.time) === timeFilter;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      {/* Animated Time Display */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Current Time</div>
            <div className="text-2xl font-bold text-indigo-600">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </div>

      {/* Hero with Live Countdown */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-10"></div>
        <div className="container max-w-7xl mx-auto px-5 relative">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
                Today's Events
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real-time updates on what's happening right now across the city
            </p>
          </div>

          {/* Time Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'upcoming', 'ongoing', 'past'].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-8 py-4 rounded-full text-lg font-bold capitalize transition-all duration-300 ${
                  timeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={`fas fa-${
                  filter === 'upcoming' ? 'clock' :
                  filter === 'ongoing' ? 'play-circle' :
                  filter === 'past' ? 'check-circle' : 'calendar-day'
                } mr-3`}></i>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Events Section */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-2 h-full bg-gradient-to-b from-indigo-400 to-pink-400"></div>

            {/* Events */}
            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const status = getTimeStatus(event.time);
                const isEven = index % 2 === 0;
                
                return (
                  <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline dot */}
                    <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white z-10 ${
                      status === 'ongoing' ? 'bg-green-500 animate-pulse' :
                      status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-400'
                    }`}></div>

                    {/* Event Card */}
                    <div className={`md:w-5/12 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    } ml-16 md:ml-0`}>
                      <div className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                        status === 'ongoing' ? 'ring-2 ring-green-500' : ''
                      }`}>
                        <div className="p-6">
                          {/* Status Badge */}
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                            status === 'ongoing' ? 'bg-green-100 text-green-800' :
                            status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            <i className={`fas fa-${
                              status === 'ongoing' ? 'play' :
                              status === 'upcoming' ? 'clock' : 'check'
                            } mr-2`}></i>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </div>

                          <h3 className="text-2xl font-bold mb-3 text-gray-900">{event.title}</h3>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-gray-600">
                              <i className="fas fa-clock mr-3 text-indigo-500"></i>
                              <span className="font-medium">{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <i className="fas fa-map-marker-alt mr-3 text-pink-500"></i>
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <i className="fas fa-users mr-3 text-green-500"></i>
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>

                          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                            {status === 'ongoing' ? 'Join Now' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Time Display */}
                    <div className={`md:w-2/12 text-center mt-4 md:mt-0 ${
                      isEven ? 'md:text-left' : 'md:text-right'
                    }`}>
                      <div className="text-3xl font-bold text-indigo-600">{event.time.split(' - ')[0]}</div>
                      <div className="text-gray-500">Starts</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Updates Panel */}
          <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              <i className="fas fa-broadcast-tower text-indigo-500 mr-3"></i>
              Live Updates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Active Events</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-5xl font-bold text-indigo-600">12</div>
                <div className="text-gray-600">Happening now</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Upcoming</h3>
                  <i className="fas fa-hourglass-half text-blue-500"></i>
                </div>
                <div className="text-5xl font-bold text-blue-600">24</div>
                <div className="text-gray-600">Next 6 hours</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Total Today</h3>
                  <i className="fas fa-calendar-check text-pink-500"></i>
                </div>
                <div className="text-5xl font-bold text-pink-600">48</div>
                <div className="text-gray-600">Events scheduled</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodaysEvents;