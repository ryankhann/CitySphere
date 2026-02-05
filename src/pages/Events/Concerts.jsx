import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Concerts = () => {
  const [genreFilter, setGenreFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('upcoming');
  const navigate = useNavigate();

  const concerts = [
    {
      id: 1,
      artist: "The Midnight Echoes",
      genre: "rock",
      venue: "Stadium Arena",
      date: "2024-06-15",
      time: "20:00",
      price: "$65-150",
      availability: "Limited",
      image: "/Images/concerts/midnight-echoes.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      artist: "Jazz Collective Trio",
      genre: "jazz",
      venue: "Blue Note Club",
      date: "2024-06-18",
      time: "21:00",
      price: "$40-80",
      availability: "Good",
      image: "/Images/concerts/jazz-collective.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      artist: "Synthwave Dreams",
      genre: "electronic",
      venue: "Warehouse 54",
      date: "2024-06-22",
      time: "22:00",
      price: "$35-70",
      availability: "Sold Out",
      image: "/Images/concerts/synthwave.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      artist: "Orchestral Symphony",
      genre: "classical",
      venue: "Grand Concert Hall",
      date: "2024-06-25",
      time: "19:30",
      price: "$50-120",
      availability: "Available",
      image: "/Images/concerts/orchestra.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      artist: "Indie Folk Band",
      genre: "folk",
      venue: "Intimate Theater",
      date: "2024-06-28",
      time: "20:30",
      price: "$30-60",
      availability: "Limited",
      image: "/Images/concerts/indie-folk.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      artist: "Hip-Hop Legends",
      genre: "hip-hop",
      venue: "Outdoor Amphitheater",
      date: "2024-07-02",
      time: "19:00",
      price: "$75-200",
      availability: "Good",
      image: "/Images/concerts/hip-hop.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const genres = [
    { id: 'all', name: 'All Genres', icon: 'fas fa-music' },
    { id: 'rock', name: 'Rock', icon: 'fas fa-guitar' },
    { id: 'jazz', name: 'Jazz', icon: 'fas fa-trumpet' },
    { id: 'electronic', name: 'Electronic', icon: 'fas fa-sliders-h' },
    { id: 'classical', name: 'Classical', icon: 'fas fa-violin' },
    { id: 'folk', name: 'Folk', icon: 'fas fa-feather-alt' },
    { id: 'hip-hop', name: 'Hip-Hop', icon: 'fas fa-microphone-alt' }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const filteredConcerts = concerts.filter(concert => {
    if (genreFilter !== 'all' && concert.genre !== genreFilter) return false;
    
    if (dateFilter === 'upcoming') {
      const concertDate = new Date(concert.date);
      const today = new Date();
      return concertDate >= today;
    }
    
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Sound Wave Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 C20,30 40,70 60,50 C80,30 100,70 100,50' stroke='%239C27B0' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 100px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                Live Concerts
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Experience the energy of live music with upcoming performances across all genres
            </p>
            
            {/* Concert Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-calendar-day text-3xl text-purple-600 mb-3"></i>
                <div className="text-2xl font-bold">28</div>
                <div className="text-gray-600">This Month</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-music text-3xl text-pink-600 mb-3"></i>
                <div className="text-2xl font-bold">12</div>
                <div className="text-gray-600">Venues</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-microphone-alt text-3xl text-blue-600 mb-3"></i>
                <div className="text-2xl font-bold">45+</div>
                <div className="text-gray-600">Artists</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-ticket-alt text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-gray-600">Sold Out Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concert Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Music Genre</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {genres.map(genre => (
                  <button
                    key={genre.id}
                    onClick={() => setGenreFilter(genre.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      genreFilter === genre.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={genre.icon}></i>
                    <span>{genre.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Date Filter</h3>
              <div className="flex justify-center gap-4">
                {['upcoming', 'all'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setDateFilter(filter)}
                    className={`px-6 py-3 rounded-full capitalize ${
                      dateFilter === filter
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {filter === 'upcoming' ? 'Upcoming Shows' : 'All Concerts'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerts Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConcerts.map(concert => (
              <div
                key={concert.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/concert/${concert.id}`)}
              >
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-1">{formatDate(concert.date)}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{concert.artist}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        concert.genre === 'rock' ? 'bg-red-100 text-red-800' :
                        concert.genre === 'jazz' ? 'bg-blue-100 text-blue-800' :
                        concert.genre === 'electronic' ? 'bg-purple-100 text-purple-800' :
                        concert.genre === 'classical' ? 'bg-yellow-100 text-yellow-800' :
                        concert.genre === 'folk' ? 'bg-green-100 text-green-800' :
                        'bg-pink-100 text-pink-800'
                      }`}>
                        {concert.genre}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        concert.availability === 'Sold Out' ? 'bg-gray-100 text-gray-800' :
                        concert.availability === 'Limited' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {concert.availability}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-clock mr-3 text-purple-500"></i>
                      <span>{concert.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt mr-3 text-pink-500"></i>
                      <span>{concert.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-tag mr-3 text-green-500"></i>
                      <span className="font-bold">{concert.price}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-xl font-bold ${
                    concert.availability === 'Sold Out'
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90'
                  }`}>
                    {concert.availability === 'Sold Out' ? 'Sold Out' : 'Get Tickets'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* VIP Experience */}
          <div className="mt-20 bg-gradient-to-r from-purple-900 to-pink-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">VIP Concert Experience</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Upgrade to VIP for exclusive benefits: premium seating, backstage access, 
                    meet & greets, and complimentary drinks. Limited packages available.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Gold Package</div>
                      <div className="text-sm opacity-90">Premium seating + drinks</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Platinum Package</div>
                      <div className="text-sm opacity-90">Backstage access included</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-purple-700 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    View VIP Packages
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-crown text-8xl"></i>
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

export default Concerts;