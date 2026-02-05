import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThisWeekend = () => {
  const [dayFilter, setDayFilter] = useState('all');
  const [weather, setWeather] = useState({ temp: 22, condition: 'sunny' });
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate weather data
    const conditions = ['sunny', 'partly-cloudy', 'rainy', 'clear'];
    setWeather({
      temp: Math.floor(Math.random() * 10) + 18,
      condition: conditions[Math.floor(Math.random() * conditions.length)]
    });
  }, []);

  const weekendEvents = [
    {
      id: 1,
      title: "Farmers Market Festival",
      day: "saturday",
      time: "08:00 - 14:00",
      location: "Central Square",
      category: "food",
      weather: "outdoor",
      price: "Free",
      capacity: "500+",
      image: "/Images/events/farmers-market.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Indie Music Festival",
      day: "saturday",
      time: "14:00 - 23:00",
      location: "Riverside Park",
      category: "music",
      weather: "outdoor",
      price: "$25",
      capacity: "2000",
      image: "/Images/events/indie-festival.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      title: "Artisan Craft Fair",
      day: "sunday",
      time: "10:00 - 18:00",
      location: "Old Town Square",
      category: "shopping",
      weather: "outdoor",
      price: "Free",
      capacity: "300+",
      image: "/Images/events/craft-fair.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      title: "Sunday Jazz Brunch",
      day: "sunday",
      time: "11:00 - 15:00",
      location: "Grand Hotel Terrace",
      category: "food",
      weather: "indoor",
      price: "$45",
      capacity: "120",
      image: "/Images/events/jazz-brunch.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      title: "Tech Startup Expo",
      day: "saturday",
      time: "09:00 - 17:00",
      location: "Convention Center",
      category: "business",
      weather: "indoor",
      price: "$30",
      capacity: "1500",
      image: "/Images/events/tech-expo.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      title: "Midnight Cinema",
      day: "saturday",
      time: "22:00 - 02:00",
      location: "Rooftop Cinema Club",
      category: "entertainment",
      weather: "indoor",
      price: "$20",
      capacity: "200",
      image: "/Images/events/midnight-cinema.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const filteredEvents = dayFilter === 'all' 
    ? weekendEvents 
    : weekendEvents.filter(event => event.day === dayFilter);

  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'sunny': return 'fas fa-sun';
      case 'partly-cloudy': return 'fas fa-cloud-sun';
      case 'rainy': return 'fas fa-cloud-rain';
      default: return 'fas fa-cloud';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      {/* Weekend Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23f59e0b' stroke-width='2' fill='none' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px'
        }}></div>
      </div>

      {/* Hero with Weekend Countdown */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
                This Weekend
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Your curated guide to the best events happening Saturday and Sunday
            </p>
            
            {/* Weekend Weather */}
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600 mb-2">{weather.temp}°C</div>
                  <div className="text-gray-600">Weekend Forecast</div>
                </div>
                <div className="text-center">
                  <i className={`${getWeatherIcon(weather.condition)} text-5xl text-yellow-500 mb-2`}></i>
                  <div className="text-gray-600 capitalize">{weather.condition.replace('-', ' ')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">48+</div>
                  <div className="text-gray-600">Events Planned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Day Filter */}
          <div className="flex justify-center gap-6 mb-12">
            <button
              onClick={() => setDayFilter('all')}
              className={`px-8 py-4 rounded-full text-lg font-bold ${
                dayFilter === 'all'
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:shadow-lg'
              }`}
            >
              <i className="fas fa-calendar-week mr-3"></i>
              Whole Weekend
            </button>
            <button
              onClick={() => setDayFilter('saturday')}
              className={`px-8 py-4 rounded-full text-lg font-bold ${
                dayFilter === 'saturday'
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:shadow-lg'
              }`}
            >
              <i className="fas fa-sun mr-3"></i>
              Saturday
            </button>
            <button
              onClick={() => setDayFilter('sunday')}
              className={`px-8 py-4 rounded-full text-lg font-bold ${
                dayFilter === 'sunday'
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:shadow-lg'
              }`}
            >
              <i className="fas fa-cloud-sun mr-3"></i>
              Sunday
            </button>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-yellow-400"></div>
            
            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={event.id} className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-yellow-500 z-10"></div>
                    
                    {/* Event Card */}
                    <div className={`md:w-5/12 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    } ml-16 md:ml-0`}>
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                           onClick={() => navigate(`/event/${event.id}`)}>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="text-sm text-gray-500 mb-1">{event.day.toUpperCase()}</div>
                              <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm ${
                              event.weather === 'outdoor' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {event.weather === 'outdoor' ? 'Outdoor' : 'Indoor'}
                            </div>
                          </div>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-gray-600">
                              <i className="fas fa-clock mr-3 text-orange-500"></i>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <i className="fas fa-map-marker-alt mr-3 text-yellow-500"></i>
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <i className="fas fa-users mr-3 text-green-500"></i>
                              <span>Capacity: {event.capacity}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-orange-600">{event.price}</div>
                            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold hover:opacity-90">
                              Get Tickets
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Time Display */}
                    <div className={`md:w-2/12 text-center mt-4 md:mt-0 ${
                      isEven ? 'md:text-left' : 'md:text-right'
                    }`}>
                      <div className="text-2xl font-bold text-gray-900">{event.time.split(' - ')[0]}</div>
                      <div className="text-gray-500">Starts</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekend Planner */}
          <div className="mt-20 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Weekend Planner</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Create your perfect weekend itinerary with our interactive planner. 
                    Mix and match events, add transportation times, and share with friends.
                  </p>
                  <button className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Start Planning
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-calendar-plus text-8xl"></i>
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

export default ThisWeekend;