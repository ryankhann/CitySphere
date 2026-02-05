import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LocalNews = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [trendingNews, setTrendingNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching trending news
    const mockTrending = [
      { id: 1, title: "New Park Opens Downtown", category: "community", time: "2h ago", hot: true },
      { id: 2, title: "Transportation System Upgrade", category: "transport", time: "4h ago", hot: false },
      { id: 3, title: "Local Business Awards", category: "business", time: "6h ago", hot: true }
    ];
    setTrendingNews(mockTrending);
  }, []);

  const newsArticles = [
    {
      id: 1,
      title: "Downtown Development Project Approved",
      category: "development",
      date: "2024-06-15",
      excerpt: "Major urban renewal project gets green light after community consultation",
      author: "Jane Smith",
      readTime: "3 min",
      image: "/Images/news/development.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Community Garden Initiative Thrives",
      category: "community",
      date: "2024-06-14",
      excerpt: "Residents transform vacant lots into productive green spaces",
      author: "Mike Johnson",
      readTime: "4 min",
      image: "/Images/news/community-garden.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      title: "New Public Transport Routes",
      category: "transport",
      date: "2024-06-13",
      excerpt: "Expanded bus and subway services to improve city connectivity",
      author: "Sarah Lee",
      readTime: "2 min",
      image: "/Images/news/transport.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      title: "Local Artists Exhibition Opens",
      category: "culture",
      date: "2024-06-12",
      excerpt: "Annual showcase features emerging talent from city's art scene",
      author: "David Chen",
      readTime: "5 min",
      image: "/Images/news/art-exhibition.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      title: "Sustainability Awards Winners",
      category: "environment",
      date: "2024-06-11",
      excerpt: "Local businesses recognized for eco-friendly initiatives",
      author: "Emma Wilson",
      readTime: "4 min",
      image: "/Images/news/sustainability.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      title: "Historical Building Restoration",
      category: "heritage",
      date: "2024-06-10",
      excerpt: "19th century landmark receives preservation funding",
      author: "Robert Brown",
      readTime: "3 min",
      image: "/Images/news/historical-restoration.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: 'fas fa-newspaper' },
    { id: 'community', name: 'Community', icon: 'fas fa-users' },
    { id: 'development', name: 'Development', icon: 'fas fa-building' },
    { id: 'transport', name: 'Transport', icon: 'fas fa-bus' },
    { id: 'culture', name: 'Culture', icon: 'fas fa-palette' },
    { id: 'environment', name: 'Environment', icon: 'fas fa-leaf' },
    { id: 'heritage', name: 'Heritage', icon: 'fas fa-landmark' }
  ];

  const filteredArticles = categoryFilter === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === categoryFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Newspaper Texture Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='%233b82f6' stroke-width='0.5' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
        backgroundSize: '50px'
      }}></div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
                Local News
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Stay informed with the latest updates from our vibrant community
            </p>
            
            {/* Breaking News Banner */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-bullhorn text-2xl"></i>
                    <div>
                      <div className="font-bold text-lg">Breaking News</div>
                      <div>Major infrastructure project announced for downtown area</div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending News */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
            <i className="fas fa-fire text-red-500 mr-3"></i>
            Trending Now
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {trendingNews.map(news => (
              <div
                key={news.id}
                className="group bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => navigate(`/news/${news.id}`)}
              >
                <div className="flex items-center gap-3">
                  {news.hot && <i className="fas fa-fire text-red-500"></i>}
                  <div>
                    <div className="font-bold text-gray-900">{news.title}</div>
                    <div className="text-sm text-gray-500">
                      <span className="capitalize">{news.category}</span> • {news.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-8">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  categoryFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={category.icon}></i>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-newspaper text-8xl text-white opacity-30"></i>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <div className="text-sm mb-2">FEATURED STORY</div>
                    <h2 className="text-2xl font-bold mb-2">City Unveils New Sustainability Plan</h2>
                    <div className="flex items-center gap-4 text-sm">
                      <span>By Mayor's Office</span>
                      <span>•</span>
                      <span>Today</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    The city announces ambitious new sustainability goals for 2025, including 
                    expanded green spaces, renewable energy initiatives, and waste reduction programs.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full font-bold hover:opacity-90">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>

            {/* News Updates */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Latest Updates</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="text-sm text-gray-500 min-w-12">10:30</div>
                  <div>
                    <div className="font-bold text-gray-900">Road Closure Alert</div>
                    <div className="text-sm text-gray-600">Main Street closed for maintenance</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="text-sm text-gray-500 min-w-12">09:15</div>
                  <div>
                    <div className="font-bold text-gray-900">Community Meeting</div>
                    <div className="text-sm text-gray-600">Park redesign discussion tonight</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="text-sm text-gray-500 min-w-12">08:00</div>
                  <div>
                    <div className="font-bold text-gray-900">Weather Update</div>
                    <div className="text-sm text-gray-600">Sunny skies expected all week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">{formatDate(article.date)}</div>
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
                      {article.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{article.title}</h3>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center text-white">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{article.author}</div>
                        <div className="text-sm text-gray-500">{article.readTime} read</div>
                      </div>
                    </div>
                    <i className="fas fa-arrow-right text-blue-600 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Subscribe to our daily newsletter for the latest local news, 
                    community updates, and important announcements delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-6 py-4 rounded-full text-gray-900"
                    />
                    <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                      Subscribe Now
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-envelope-open-text text-8xl"></i>
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

export default LocalNews;