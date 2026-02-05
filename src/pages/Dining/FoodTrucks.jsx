import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodTrucks = () => {
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const navigate = useNavigate();

  const foodTrucks = [
    {
      id: 1,
      name: "Taco Revolution",
      cuisine: "mexican",
      location: "downtown",
      hours: "11:00-22:00",
      price: "$",
      rating: 4.8,
      specialty: "Gourmet tacos",
      image: "/Images/foodtrucks/taco-truck.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Burger Beast",
      cuisine: "american",
      location: "waterfront",
      hours: "12:00-21:00",
      price: "$$",
      rating: 4.7,
      specialty: "Double patty burgers",
      image: "/Images/foodtrucks/burger-truck.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      name: "Noodle Express",
      cuisine: "asian",
      location: "business-district",
      hours: "10:00-20:00",
      price: "$",
      rating: 4.6,
      specialty: "Hand-pulled noodles",
      image: "/Images/foodtrucks/noodle-truck.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      name: "Pizza on Wheels",
      cuisine: "italian",
      location: "parks",
      hours: "16:00-23:00",
      price: "$$",
      rating: 4.5,
      specialty: "Wood-fired pizza",
      image: "/Images/foodtrucks/pizza-truck.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      name: "Falafel Street",
      cuisine: "middle-eastern",
      location: "university",
      hours: "11:00-19:00",
      price: "$",
      rating: 4.8,
      specialty: "Fresh falafel wraps",
      image: "/Images/foodtrucks/falafel-truck.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      name: "Ice Cream Truck",
      cuisine: "dessert",
      location: "residential",
      hours: "14:00-22:00",
      price: "$",
      rating: 4.9,
      specialty: "Artisan ice cream",
      image: "/Images/foodtrucks/icecream-truck.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const cuisines = [
    { id: 'all', name: 'All Cuisines', icon: 'fas fa-utensils' },
    { id: 'mexican', name: 'Mexican', icon: 'fas fa-pepper-hot' },
    { id: 'american', name: 'American', icon: 'fas fa-hamburger' },
    { id: 'asian', name: 'Asian', icon: 'fas fa-bowl-rice' },
    { id: 'italian', name: 'Italian', icon: 'fas fa-pizza-slice' },
    { id: 'middle-eastern', name: 'Middle Eastern', icon: 'fas fa-lemon' },
    { id: 'dessert', name: 'Dessert', icon: 'fas fa-ice-cream' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'downtown', name: 'Downtown' },
    { id: 'waterfront', name: 'Waterfront' },
    { id: 'business-district', name: 'Business District' },
    { id: 'parks', name: 'Parks' },
    { id: 'university', name: 'University Area' },
    { id: 'residential', name: 'Residential' }
  ];

  const filteredTrucks = foodTrucks.filter(truck => {
    if (cuisineFilter !== 'all' && truck.cuisine !== cuisineFilter) return false;
    if (locationFilter !== 'all' && truck.location !== locationFilter) return false;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Food Truck Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='30' width='80' height='40' rx='5' fill='%23f97316'/%3E%3Crect x='20' y='10' width='20' height='20' rx='5' fill='%23ea580c'/%3E%3Ccircle cx='30' cy='70' r='8' fill='%23454'/%3E%3Ccircle cx='70' cy='70' r='8' fill='%23454'/%3E%3C/svg%3E")`,
          backgroundSize: '100px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
                Food Trucks
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Delicious street food on wheels - find your favorite mobile eateries across the city
            </p>
            
            {/* Food Truck Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-truck text-3xl text-orange-600 mb-3"></i>
                <div className="text-2xl font-bold">65+</div>
                <div className="text-gray-600">Active Trucks</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-utensils text-3xl text-red-600 mb-3"></i>
                <div className="text-2xl font-bold">18</div>
                <div className="text-gray-600">Cuisine Types</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-map-marked-alt text-3xl text-yellow-600 mb-3"></i>
                <div className="text-2xl font-bold">12</div>
                <div className="text-gray-600">Regular Locations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-dollar-sign text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-gray-600">Under $10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Truck Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Cuisine Type</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cuisines.map(cuisine => (
                  <button
                    key={cuisine.id}
                    onClick={() => setCuisineFilter(cuisine.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      cuisineFilter === cuisine.id
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <i className={cuisine.icon}></i>
                    <span>{cuisine.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Common Locations</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {locations.map(location => (
                  <button
                    key={location.id}
                    onClick={() => setLocationFilter(location.id)}
                    className={`px-3 py-1 rounded-full ${
                      locationFilter === location.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Trucks Grid */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrucks.map(truck => (
              <div
                key={truck.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/foodtruck/${truck.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{truck.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          {truck.cuisine}
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-star text-yellow-500 mr-1"></i>
                          <span className="font-bold">{truck.rating}</span>
                        </div>
                        <div className="text-green-600 font-bold">
                          {truck.price.split('').map((_, i) => (
                            <i key={i} className="fas fa-dollar-sign text-xs"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <i className="fas fa-truck text-2xl text-red-500"></i>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-clock mr-3 text-orange-500"></i>
                      <span>{truck.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt mr-3 text-red-500"></i>
                      <span className="capitalize">{truck.location.replace('-', ' ')}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-utensils mr-3 text-yellow-500"></i>
                      <span className="font-medium">{truck.specialty}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Find Truck Location
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Live Truck Tracker */}
          <div className="mt-20 bg-gradient-to-r from-orange-600 to-red-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Live Food Truck Tracker</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Use our real-time tracker to see exactly where your favorite food trucks 
                    are located right now, along with current wait times and menu updates.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Real-time GPS</div>
                      <div className="text-sm opacity-90">Live truck locations</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Wait Times</div>
                      <div className="text-sm opacity-90">Current queue status</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Menu Updates</div>
                      <div className="text-sm opacity-90">Daily specials</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Schedule Alerts</div>
                      <div className="text-sm opacity-90">Location changes</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Open Live Tracker
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-map-marked-alt text-8xl"></i>
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

export default FoodTrucks;