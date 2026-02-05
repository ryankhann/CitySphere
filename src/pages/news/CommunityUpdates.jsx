import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityUpdates = () => {
  const [updateType, setUpdateType] = useState('all');
  const [activeProjects, setActiveProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching active projects
    const mockProjects = [
      { id: 1, name: "Park Renovation", progress: 75, support: 1200 },
      { id: 2, name: "Community Center", progress: 30, support: 850 },
      { id: 3, name: "Bike Lane Expansion", progress: 50, support: 950 }
    ];
    setActiveProjects(mockProjects);
  }, []);

  const communityUpdates = [
    {
      id: 1,
      title: "Neighborhood Cleanup Day",
      type: "event",
      date: "2024-06-22",
      organizer: "Green City Initiative",
      participants: "150 volunteers",
      description: "Join your neighbors for a community cleanup day",
      image: "/Images/community/cleanup.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Food Drive Success",
      type: "achievement",
      date: "2024-06-20",
      organizer: "Local Food Bank",
      participants: "500+ donations",
      description: "Record-breaking food collection for local families",
      image: "/Images/community/food-drive.jpg",
      color: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
    },
    {
      id: 3,
      title: "Youth Sports Program",
      type: "program",
      date: "2024-06-18",
      organizer: "City Parks Department",
      participants: "200 children",
      description: "Free sports activities for local youth",
      image: "/Images/community/youth-sports.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 4,
      title: "Community Garden Harvest",
      type: "event",
      date: "2024-06-15",
      organizer: "Urban Farmers Collective",
      participants: "Community members",
      description: "First harvest from neighborhood garden project",
      image: "/Images/community/garden-harvest.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 5,
      title: "Local Artist Mural Project",
      type: "project",
      date: "2024-06-12",
      organizer: "Arts Council",
      participants: "Local artists",
      description: "Transforming blank walls into community art",
      image: "/Images/community/mural-project.jpg",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 6,
      title: "Elderly Support Initiative",
      type: "program",
      date: "2024-06-10",
      organizer: "Senior Care Network",
      participants: "100+ seniors",
      description: "Weekly activities and support for elderly residents",
      image: "/Images/community/elderly-support.jpg",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const updateTypes = [
    { id: 'all', name: 'All Updates', icon: 'fas fa-bullhorn' },
    { id: 'event', name: 'Events', icon: 'fas fa-calendar-day' },
    { id: 'achievement', name: 'Achievements', icon: 'fas fa-trophy' },
    { id: 'program', name: 'Programs', icon: 'fas fa-hands-helping' },
    { id: 'project', name: 'Projects', icon: 'fas fa-project-diagram' }
  ];

  const filteredUpdates = updateType === 'all' 
    ? communityUpdates 
    : communityUpdates.filter(update => update.type === updateType);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Community Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='15' fill='%2310B981'/%3E%3Ccircle cx='50' cy='50' r='20' fill='%230D9488'/%3E%3Ccircle cx='80' cy='80' r='15' fill='%2310B981'/%3E%3C/svg%3E")`,
          backgroundSize: '150px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
                Community Updates
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Celebrating the achievements and initiatives that make our community stronger
            </p>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-users text-3xl text-green-600 mb-3"></i>
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-gray-600">Active Volunteers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-calendar-check text-3xl text-teal-600 mb-3"></i>
                <div className="text-2xl font-bold">120</div>
                <div className="text-gray-600">Monthly Events</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-hands-helping text-3xl text-blue-600 mb-3"></i>
                <div className="text-2xl font-bold">85</div>
                <div className="text-gray-600">Active Programs</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <i className="fas fa-heart text-3xl text-red-600 mb-3"></i>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container max-w-7xl mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
            <i className="fas fa-tasks text-green-600 mr-3"></i>
            Active Community Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeProjects.map(project => (
              <div key={project.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-thumbs-up text-green-600"></i>
                    <span>{project.support} supporters</span>
                  </div>
                  <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200">
                    Support Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Types */}
      <section className="py-8">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {updateTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setUpdateType(type.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  updateType === type.id
                    ? 'bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                }`}
              >
                <i className={type.icon}></i>
                <span className="font-medium">{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Community Updates */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpdates.map(update => (
              <div
                key={update.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/community-update/${update.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      update.type === 'event' ? 'bg-blue-100 text-blue-800' :
                      update.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' :
                      update.type === 'program' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {update.type}
                    </div>
                    <div className="text-sm text-gray-500">{formatDate(update.date)}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{update.title}</h3>
                  <p className="text-gray-600 mb-6">{update.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-user-friends mr-3 text-green-500"></i>
                      <span>Organized by: {update.organizer}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-users mr-3 text-teal-500"></i>
                      <span>{update.participants}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Get Involved */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-teal-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Join our community initiatives, volunteer for local projects, 
                    or start your own community program with our support and resources.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Volunteer Opportunities</div>
                      <div className="text-sm opacity-90">Weekly openings</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Community Grants</div>
                      <div className="text-sm opacity-90">Funding available</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Skill Sharing</div>
                      <div className="text-sm opacity-90">Teach & learn</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="font-bold">Event Organization</div>
                      <div className="text-sm opacity-90">Plan community events</div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-white text-green-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    View Opportunities
                  </button>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <i className="fas fa-hands-helping text-8xl"></i>
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

export default CommunityUpdates;