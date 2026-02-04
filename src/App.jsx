import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Home from './Pages/Home';
import SearchResults from './Pages/SearchResults';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Explore Pages
import Advertise from './Pages/Advertise';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Submit from './Pages/Submit';
import Attractions from './Pages/Explore/Attractions';
import Landmarks from './Pages/Explore/Landmarks';
import ParksRecreation from './Pages/Explore/ParksRecreation';
import MuseumsGalleries from './Pages/Explore/MuseumsGalleries';
import Downtown from './Pages/Explore/Neighborhoods/Downtown';
import OldTown from './Pages/Explore/Neighborhoods/OldTown';
import Waterfront from './Pages/Explore/Neighborhoods/Waterfront';
import UptownDistrict from './Pages/Explore/Neighborhoods/UptownDistrict';

// Events Pages
import TodaysEvents from './Pages/Events/TodaysEvents';
import ThisWeekend from './Pages/Events/ThisWeekend';
import Festivals from './Pages/Events/Festivals';
import Concerts from './Pages/Events/Concerts';
import Sports from './Pages/Events/Sports';

// Dining Pages
import Restaurants from './Pages/Dining/Restaurants';
import CafesBakeries from './Pages/Dining/CafesBakeries';
import BarsPubs from './Pages/Dining/BarsPubs';
import FoodTrucks from './Pages/Dining/FoodTrucks';

// News Pages
import LocalNews from './Pages/News/LocalNews';
import CommunityUpdates from './Pages/News/CommunityUpdates';
import BusinessOpenings from './Pages/News/BusinessOpenings';

// Best-Of Pages
import TopAttractions from './Pages/Best-Of/TopAttractions';
import BestRestaurants from './Pages/Best-Of/BestRestaurants';
import HiddenGems from './Pages/Best-Of/HiddenGems';

import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
  <AuthProvider>
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-[110px]">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home onSearch={handleSearch} />} />
            
            {/* Search */}
            <Route path="/search" element={<SearchResults query={searchQuery} />} />
            
            {/* Explore Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/explore/attractions" element={<Attractions />} />
            <Route path="/explore/landmarks" element={<Landmarks />} />
            <Route path="/explore/parks-recreation" element={<ParksRecreation />} />
            <Route path="/explore/museums-galleries" element={<MuseumsGalleries />} />
            <Route path="/explore/neighborhoods/downtown" element={<Downtown />} />
            <Route path="/explore/neighborhoods/oldtown" element={<OldTown />} />
            <Route path="/explore/neighborhoods/waterfront" element={<Waterfront />} />
            <Route path="/explore/neighborhoods/uptown-district" element={<UptownDistrict />} />
            
            {/* Events Routes */}
            <Route path="/events/today" element={<TodaysEvents />} />
            <Route path="/events/weekend" element={<ThisWeekend />} />
            <Route path="/events/festivals" element={<Festivals />} />
            <Route path="/events/concerts" element={<Concerts />} />
            <Route path="/events/sports" element={<Sports />} />
            
            {/* Dining Routes */}
            <Route path="/dining/restaurants" element={<Restaurants />} />
            <Route path="/dining/cafes-bakeries" element={<CafesBakeries />} />
            <Route path="/dining/bars-pubs" element={<BarsPubs />} />
            <Route path="/dining/food-trucks" element={<FoodTrucks />} />
            
            {/* News Routes */}
            <Route path="/news/local" element={<LocalNews />} />
            <Route path="/news/community" element={<CommunityUpdates />} />
            <Route path="/news/business-openings" element={<BusinessOpenings />} />
            
            {/* Best-Of Routes */}
            <Route path="/best-of/top-attractions" element={<TopAttractions />} />
            <Route path="/best-of/best-restaurants" element={<BestRestaurants />} />
            <Route path="/best-of/hidden-gems" element={<HiddenGems />} />
            
            {/* Catch-all Route - Could be a 404 page */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
                <div className="text-center p-8">
                  <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-8">Page not found</p>
                  <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Return Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
