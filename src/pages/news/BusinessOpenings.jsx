import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessOpenings = () => {
  const [industryFilter, setIndustryFilter] = useState('all');
  const [upcomingOpenings, setUpcomingOpenings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate upcoming openings
    const mockUpcoming = [
      { id: 1, name: "Tech Startup Hub", date: "2024-07-01", industry: "tech" },
      { id: 2, name: "Organic Grocery Store", date: "2024-07-15", industry: "retail" },
      { id: 3, name: "Fitness Center", date: "2024-08-01", industry: "wellness" }
    ];
    setUpcomingOpenings(mockUpcoming);
  }, []);

  const newBusinesses = [
    {
      id: 1,
      name: "Digital Innovation Lab",
      industry: "tech",
      location: "Tech District",
      openingDate: "2024-06-01",
      description: "Co-working space for tech startups",
      jobs: "15 positions",
      investment: "$2M",
      image: "/Images/business/innovation-lab.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Artisan Bakery & Cafe",
      industry: "food",
      location: "Old Town",
      openingDate: "2024-05-25",
      description: "Traditional sourdough bakery",
      jobs: "8 positions",
      investment: "$300K",
      image: "/Images/business/artisan-bakery.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Sustainable Fashion Boutique",
      industry: "retail",
      location: "Uptown District",
      openingDate: "2024-06-05",
      description: "Eco-friendly clothing store",
      jobs: "6 positions",
      investment: "$150K",
      image: "/Images/business/sustainable-fashion.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Wellness Center",
      industry: "wellness",
      location: "Waterfront",
      openingDate: "2024-05-30",
      description: "Holistic health services",
      jobs: "12 positions",
      investment: "$500K",
      image: "/Images/business/wellness-center.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Creative Agency",
      industry: "creative",
      location: "Arts District",
      openingDate: "2024-06-10",
      description: "Full-service marketing agency",
      jobs: "20 positions",
      investment: "$1.5M",
      image: "/Images/business/creative-agency.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Microbrewery",
      industry: "food",
      location: "Industrial Zone",
      openingDate: "2024-06-15",
      description: "Craft beer production and taproom",
      jobs: "10 positions",
      investment: "$800K",
      image: "/Images/business/microbrewery.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: 'fas fa-building' },
    { id: 'tech', name: 'Technology', icon: 'fas fa-laptop-code' },
    { id: 'food', name: 'Food & Beverage', icon: 'fas fa-utensils' },
    { id: 'retail', name: 'Retail', icon: 'fas fa-shopping-bag' },
    { id: 'wellness', name: 'Wellness', icon: 'fas fa-spa' },
    { id: 'creative', name: 'Creative', icon: 'fas fa-paint-brush' },
    { id: 'services', name: 'Services', icon: 'fas fa-concierge-bell' }
  ];

  const filteredBusinesses = industryFilter === 'all' 
    ? newBusinesses 
    : newBusinesses.filter(business => business.industry === industryFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 7) return 'Recently Opened';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getDaysUntil = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date - now;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Business Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='20' y='20' width='60' height='60' rx='5' fill='none' stroke='%23f59e0b' stroke-width='2'/%3E%3Cline x1='20' y1='40' x2='80' y2='40' stroke='%23f59e0b' stroke-width='2'/%3E%3Cline x1='20' y1='60' x2='80' y2='60' stroke='%23f59e0b' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '80px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500">
                Business Openings
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Discover the latest businesses launching in our city and the opportunities they bring
            </p>
            
            {/* Business Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-store text-3xl text-amber-600 mb-3"></i>
                <div className="text-2xl font-bold">85+</div>
                <div className="text-gray-600">New Businesses</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-briefcase text-3xl text-orange-600 mb-3"></i>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-gray-600">New Jobs Created</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-chart-line text-3xl text-yellow-600 mb-3"></i>
                <div className="text-2xl font-bold">$15M</div>
                <div className="text-gray-600">Total Investment</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-lightbulb text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">42%</div>
                <div className="text-gray-600">Innovation Startups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Openings */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
            <i className="fas fa-calendar-plus text-orange-600 mr-3"></i>
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingOpenings.map(business => {
              const daysUntil = getDaysUntil(business.date);
              
              return (
                <div key={business.id} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{business.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="capitalize">{business.industry}</span>
                      <span className={`font-bold ${daysUntil <= 7 ? 'text-green-600' : 'text-amber-600'}`}>
                        {daysUntil <= 7 ? 'Opening Soon!' : `${daysUntil} days`}
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-amber-100 text-amber-800 rounded-xl font-medium hover:bg-amber-200">
                    Get Notified
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="py-8">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map(industry => (
              <button
                key={industry.id}
                onClick={() => setIndustryFilter(industry.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  industryFilter === industry.id
                    ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={industry.icon}></i>
                <span className="font-medium">{industry.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* New Businesses */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map(business => (
              <div
                key={business.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/business/${business.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">{formatDate(business.openingDate)}</div>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      business.industry === 'tech' ? 'bg-blue-100 text-blue-800' :
                      business.industry === 'food' ? 'bg-amber-100 text-amber-800' :
                      business.industry === 'retail' ? 'bg-purple-100 text-purple-800' :
                      business.industry === 'wellness' ? 'bg-green-100 text-green-800' :
                      business.industry === 'creative' ? 'bg-pink-100 text-pink-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {business.industry}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{business.name}</h3>
                  <p className="text-gray-600 mb-6">{business.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt mr-3 text-orange-500"></i>
                      <span>{business.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-briefcase mr-3 text-green-500"></i>
                      <span>{business.jobs}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-dollar-sign mr-3 text-yellow-500"></i>
                      <span className="font-bold">{business.investment}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Visit Business
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Business Resources */}
          <div className="mt-20 bg-gradient-to-r from-amber-600 to-orange-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Start Your Business</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Resources and support for entrepreneurs looking to start or grow 
                    their business in our city. From permits to funding opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Permit Assistance</div>
                      <div className="text-sm opacity-90">Streamlined process</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Funding Programs</div>
                      <div className="text-sm opacity-90">Grants & loans available</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Mentorship</div>
                      <div className="text-sm opacity-90">Expert guidance</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Networking Events</div>
                      <div className="text-sm opacity-90">Connect with peers</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-amber-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Explore Resources
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-rocket text-8xl"></i>
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

export default BusinessOpenings;