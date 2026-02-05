import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Explore Pages
import Advertise from './pages/Advertise';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Submit from './pages/Submit';
import Attractions from './pages/explore/Attractions';
import Landmarks from './pages/explore/Landmarks';
import ParksRecreation from './pages/explore/ParksRecreation';
import MuseumsGalleries from './pages/explore/MuseumsGalleries';
import Downtown from './pages/explore/neighborhoods/Downtown';
import OldTown from './pages/explore/neighborhoods/OldTown';
import Waterfront from './pages/explore/neighborhoods/Waterfront';
import UptownDistrict from './pages/explore/neighborhoods/UptownDistrict';

// Events Pages
import TodaysEvents from './pages/events/TodaysEvents';
import ThisWeekend from './pages/events/ThisWeekend';
import Festivals from './pages/events/Festivals';
import Concerts from './pages/events/Concerts';
import Sports from './pages/events/Sports';

// Dining Pages
import Restaurants from './pages/dining/Restaurants';
import CafesBakeries from './pages/dining/CafesBakeries';
import BarsPubs from './pages/dining/BarsPubs';
import FoodTrucks from './pages/dining/FoodTrucks';

// News Pages
import LocalNews from './pages/news/LocalNews';
import CommunityUpdates from './pages/news/CommunityUpdates';
import BusinessOpenings from './pages/news/BusinessOpenings';

// Best-Of Pages
import TopAttractions from './pages/best-of/TopAttractions';
import BestRestaurants from './pages/best-of/BestRestaurants';
import HiddenGems from './pages/best-of/HiddenGems';

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
