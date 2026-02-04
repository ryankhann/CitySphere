import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CityData } from '../Data/CityData';
import { categories } from '../Data/categories';

const SearchResults = ({ query: propQuery }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('q') || propQuery || '';
    setSearchQuery(queryParam);
    
    if (queryParam) {
      performSearch(queryParam);
    }
  }, [location.search, propQuery]);

  const performSearch = (query) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const searchTerm = query.toLowerCase().trim();
      
      // Search in businesses
      const businessResults = cityData.businesses.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      ).map(business => ({ ...business, type: 'business' }));

      // Search in events
      const eventResults = cityData.events.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm)
      ).map(event => ({ ...event, type: 'event' }));

      // Search in categories
      const categoryResults = categories.filter(cat =>
        cat.title.toLowerCase().includes(searchTerm) ||
        cat.description.toLowerCase().includes(searchTerm) ||
        cat.id.toLowerCase().includes(searchTerm)
      ).map(cat => ({ ...cat, type: 'category' }));

      const allResults = [...businessResults, ...eventResults, ...categoryResults];
      
      setSearchResults(allResults);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const filterResults = (category) => {
    setActiveCategory(category);
  };

  const getFilteredResults = () => {
    if (activeCategory === 'all') return searchResults;
    return searchResults.filter(result => 
      result.category === activeCategory || 
      result.type === activeCategory
    );
  };

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'business':
        return '🏢';
      case 'event':
        return '🎉';
      case 'restaurant':
        return '🍽️';
      case 'park':
        return '🌳';
      case 'art':
        return '🎨';
      case 'nightlife':
        return '🌃';
      default:
        return '📍';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Search Results
            </h1>
            
            <form onSubmit={handleSearch} className="relative">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for events, restaurants, parks..."
                  className="flex-grow p-4 rounded-xl text-gray-800 text-lg shadow-lg outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container max-w-7xl mx-auto px-5 py-12">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600">Searching for "{searchQuery}"...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <>
            {/* Results Stats */}
            <div className="mb-8">
              <p className="text-gray-600">
                Found <span className="font-bold text-blue-600">{searchResults.length}</span> results for "{searchQuery}"
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => filterResults('all')}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                All Results
              </button>
              {['business', 'event', 'restaurant', 'park', 'art', 'nightlife'].map(cat => (
                <button
                  key={cat}
                  onClick={() => filterResults(cat)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredResults().map((result, index) => (
                <div
                  key={`${result.type}-${result.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Image Section */}
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-green-400 relative">
                    {result.image ? (
                      <img
                        src={result.image}
                        alt={result.name || result.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                        {getCategoryIcon(result.category || result.type)}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {result.type}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {result.name || result.title}
                      </h3>
                      {result.rating && (
                        <div className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          <i className="fas fa-star text-sm mr-1"></i>
                          <span className="font-bold">{result.rating}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4">
                      {result.description || result.category}
                    </p>

                    {result.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Details */}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between text-sm text-gray-500">
                        {result.date && (
                          <div className="flex items-center gap-1">
                            <i className="fas fa-calendar"></i>
                            <span>{result.date}</span>
                          </div>
                        )}
                        {result.location && (
                          <div className="flex items-center gap-1">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{result.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => alert(`Viewing details for: ${result.name || result.title}`)}
                      className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-eye"></i>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : searchQuery ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6 text-gray-300">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              No results found for "{searchQuery}"
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Try searching for different keywords or browse our categories below.
            </p>
            
            {/* Suggested Categories */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              {categories.slice(0, 5).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSearchQuery(cat.title);
                    navigate(`/search?q=${encodeURIComponent(cat.title)}`);
                  }}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-2 text-blue-600">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <p className="font-medium text-gray-800 text-sm">{cat.title}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Start your search
            </h3>
            <p className="text-gray-600">Enter a search term to discover city experiences</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
