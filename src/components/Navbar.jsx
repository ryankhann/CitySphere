import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 


const Navbar = () => {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  
  // State for header scroll effect
  const [headerShadow, setHeaderShadow] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  
  // State for welcome modal
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  // State for logout modal
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  
  // Get auth state
  const { user, logout } = useAuth();
console.log('Navbar user:', user);
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add shadow when scrolled
      if (currentScrollY > 50) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show welcome modal on first visit (session-based)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('urbancity_session_popup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowWelcomeModal(true);
        sessionStorage.setItem('urbancity_session_popup', 'true');
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile submenu toggle
  const handleSubmenuToggle = (submenuId) => {
    if (activeSubmenu === submenuId) {
      setActiveSubmenu(null);
      setActiveNestedSubmenu(null);
    } else {
      setActiveSubmenu(submenuId);
      setActiveNestedSubmenu(null);
    }
  };

  // Handle nested submenu toggle
  const handleNestedSubmenuToggle = (nestedId) => {
    if (activeNestedSubmenu === nestedId) {
      setActiveNestedSubmenu(null);
    } else {
      setActiveNestedSubmenu(nestedId);
    }
  };

  // Close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    setActiveNestedSubmenu(null);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
    navigate('/');
    closeAllMenus();
  };

  // navigation data structure with correct routes
  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    {
      id: 'explore',
      label: 'Explore',
      hasDropdown: true,
      items: [
        {
          label: 'Neighborhoods',
          hasNested: true,
          nestedItems: [
            { label: 'Downtown', href: '/explore/neighborhoods/downtown' },
            { label: 'Old Town', href: '/explore/neighborhoods/oldtown' },
            { label: 'Waterfront', href: '/explore/neighborhoods/waterfront' },
            { label: 'Uptown District', href: '/explore/neighborhoods/uptown-district' },
          ]
        },
        { label: 'Attractions', href: '/explore/attractions' },
        { label: 'Landmarks', href: '/explore/landmarks' },
        { label: 'Parks & Recreation', href: '/explore/parks-recreation' },
        { label: 'Museums & Galleries', href: '/explore/museums-galleries' },
      ]
    },
    {
      id: 'events',
      label: 'Events',
      hasDropdown: true,
      items: [
        { label: "Today's Events", href: '/events/today' },
        { label: 'This Weekend', href: '/events/weekend' },
        { label: 'Festivals', href: '/events/festivals' },
        { label: 'Concerts', href: '/events/concerts' },
        { label: 'Sports', href: '/events/sports' },
      ]
    },
    {
      id: 'dining',
      label: 'Dining',
      hasDropdown: true,
      items: [
        { label: 'Restaurants', href: '/dining/restaurants' },
        { label: 'Cafés & Bakeries', href: '/dining/cafes-bakeries' },
        { label: 'Bars & Pubs', href: '/dining/bars-pubs' },
        { label: 'Food Trucks', href: '/dining/food-trucks' },
      ]
    },
    {
      id: 'news',
      label: 'News',
      hasDropdown: true,
      items: [
        { label: 'Local News', href: '/news/local' },
        { label: 'Community Updates', href: '/news/community' },
        { label: 'Business Openings', href: '/news/business-openings' },
      ]
    },
    {
      id: 'best-of',
      label: 'Best Of',
      hasDropdown: true,
      items: [
        { label: 'Top Attractions', href: '/best-of/top-attractions' },
        { label: 'Best Restaurants', href: '/best-of/best-restaurants' },
        { label: 'Hidden Gems', href: '/best-of/hidden-gems' },
      ]
    },
  ];

  // Announcement items
  const announcementItems = [
    { icon: 'fa-star', text: 'CitySphere Named "Best Local Directory 2023"' },
    { icon: 'fa-calendar-alt', text: 'Summer Festival: June 15-18 in Downtown' },
    { icon: 'fa-utensils', text: 'New Restaurant Week: 50+ Participating Venues' },
    { icon: 'fa-map-marker-alt', text: 'Updated Neighborhood Guides Now Available' },
    { icon: 'fa-star', text: 'CitySphere Named "Best Local Directory 2023"' },
    { icon: 'fa-calendar-alt', text: 'Summer Festival: June 15-18 in Downtown' },
  ];

  return (
    <>
      <header 
        ref={headerRef}
        className={`urbancity-header-container fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
          headerShadow ? 'shadow-lg' : 'shadow-md'
        } ${headerHidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        {/* Top Announcement Bar */}
        <div className="urbancity-announcement-bar bg-gradient-to-r from-[#1a5fb4] to-[#26a269] text-white py-2 overflow-hidden relative h-10 flex items-center">
          <div className="urbancity-announcement-content flex whitespace-nowrap animate-urbancity-scroll-announcement pl-[100%]">
            {announcementItems.map((item, index) => (
              <span key={index} className="urbancity-announcement-item inline-flex items-center mx-10 text-sm font-medium">
                <i className={`fas ${item.icon} mr-2 text-xs`}></i> {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="urbancity-main-navigation max-w-7xl mx-auto py-[0.9rem] px-5 md:px-8 flex items-center justify-between h-18 transition-all duration-300">
          
          {/* Logo Area */}
          <div className="urbancity-logo-section flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <div className="urbancity-logo-icon w-11 h-11 bg-gradient-to-br from-[#1a5fb4] to-[#26a269] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:rotate-12 hover:scale-105">
                CS
              </div>
              <div className="urbancity-brand-text flex flex-col">
                <div className="urbancity-brand-name text-2xl font-bold bg-gradient-to-r from-[#1a5fb4] to-[#26a269] bg-clip-text text-transparent tracking-tight">
                  CitySphere
                </div>
                <div className="urbancity-brand-tagline text-xs text-gray-500 font-medium tracking-wider">
                  DISCOVER YOUR CITY
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="urbancity-desktop-nav hidden lg:flex items-center gap-8">
            <ul className="urbancity-nav-list flex list-none gap-7">
              {navItems.map((item) => (
                <li key={item.id} className="urbancity-nav-item relative group">
                  {item.hasDropdown ? (
                    <>
                      <a 
                        href="#" 
                        className="urbancity-nav-link no-underline text-gray-800 font-semibold text-sm py-2 relative flex items-center gap-1.5 hover:text-[#1a5fb4] transition-colors duration-200"
                      >
                        {item.label} <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
                      </a>
                      <ul className="urbancity-dropdown-menu absolute top-full left-0 bg-white shadow-xl rounded-lg min-w-56 opacity-0 invisible z-40 py-3 list-none">
                        {item.items.map((dropdownItem, idx) => (
                          <li key={idx} className={`urbancity-dropdown-item relative group ${dropdownItem.hasNested ? 'has-nested' : ''}`}>
                            {dropdownItem.hasNested ? (
                              <>
                                <a 
                                  href="#" 
                                  className="urbancity-dropdown-link flex items-center justify-between px-5 py-2.5 no-underline text-gray-800 font-medium text-sm hover:bg-gray-100 hover:text-[#1a5fb4] hover:pl-6 transition-all duration-200"
                                >
                                  {dropdownItem.label} <i className="fas fa-chevron-right text-xs opacity-70"></i>
                                </a>
                                <ul className="urbancity-nested-dropdown absolute top-0 left-full bg-white shadow-xl rounded-lg min-w-52">
                                  {dropdownItem.nestedItems.map((nestedItem, nestedIdx) => (
                                    <li key={nestedIdx}>
                                      <Link 
                                        to={nestedItem.href} 
                                        className="urbancity-dropdown-link block px-5 py-2.5 no-underline text-gray-800 font-medium text-sm hover:bg-gray-100 hover:text-[#1a5fb4] hover:pl-6 transition-all duration-200"
                                      >
                                        {nestedItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link 
                                to={dropdownItem.href} 
                                className="urbancity-dropdown-link block px-5 py-2.5 no-underline text-gray-800 font-medium text-sm hover:bg-gray-100 hover:text-[#1a5fb4] hover:pl-6 transition-all duration-200"
                              >
                                {dropdownItem.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="urbancity-nav-link no-underline text-gray-800 font-semibold text-sm py-2 relative flex items-center gap-1.5 hover:text-[#1a5fb4] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Desktop Action Buttons */}
            <div className="urbancity-action-buttons flex gap-3 items-center">
              {user ? (
                <button onClick={() => setShowLogoutModal(true)} className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 
                  bg-green-600 text-white hover:bg-green-700 transition">
                  <span className="font-bold">✓</span>
                  <span>{user.name}</span>
                </button>
                ) : (
                <Link
                to="/login" className="urbancity-btn px-5 py-2 rounded-lg font-semibold flex items-center gap-2 
                bg-white text-[#1a5fb4] border-2 border-[#1a5fb4]
                hover:bg-[#1a5fb4] hover:text-white transition"
                >
                  <i className="fa-regular fa-circle-user"></i> Log In
                  </Link>
                )}

              <Link 
                to="/submit" 
                className="urbancity-btn urbancity-btn-primary px-5 py-2.5 rounded-lg font-semibold text-sm no-underline transition-all duration-300 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a5fb4] to-[#0d4b97] text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <i className="fas fa-plus-circle"></i> Submit Business
              </Link>
              <Link 
                to="/advertise" 
                className="urbancity-btn urbancity-btn-secondary px-5 py-2 rounded-lg font-semibold text-sm no-underline transition-all duration-300 inline-flex items-center justify-center gap-2 bg-white text-[#1a5fb4] border-2 border-[#1a5fb4] hover:bg-[#1a5fb4] hover:text-white hover:-translate-y-0.5"
              >
                <i className="fas fa-bullhorn"></i> Advertise
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className={`urbancity-mobile-toggle lg:hidden flex flex-col justify-between w-7 h-6 bg-transparent border-0 cursor-pointer p-0 z-50 ${
              isMobileMenuOpen ? 'active' : ''
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-full h-1 bg-gradient-to-r from-[#1a5fb4] to-[#26a269] rounded transition-all duration-300"></span>
            <span className="block w-full h-1 bg-gradient-to-r from-[#1a5fb4] to-[#26a269] rounded transition-all duration-300"></span>
            <span className="block w-full h-1 bg-gradient-to-r from-[#1a5fb4] to-[#26a269] rounded transition-all duration-300"></span>
          </button>
        </nav>

        {/* Mobile Navigation Panel */}
        <div 
          className={`urbancity-mobile-panel fixed top-0 h-screen bg-white shadow-2xl z-40 p-8 pt-24 overflow-y-auto lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'right-0 w-80' : '-right-full w-0'
          }`}
        >
          <ul className="urbancity-mobile-nav list-none mb-8">
            {navItems.map((item) => (
              <li key={item.id} className="urbancity-mobile-nav-item mb-2 border-b border-gray-200">
                {item.hasDropdown ? (
                  <>
                    <a 
                      href="#" 
                      className="urbancity-mobile-nav-link flex items-center justify-between py-4 no-underline text-gray-800 font-semibold text-base hover:text-[#1a5fb4] transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmenuToggle(item.id);
                      }}
                    >
                      {item.label} <i 
                        className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                          activeSubmenu === item.id ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </a>
                    <ul 
                      className={`urbancity-mobile-submenu pl-0 list-none ${
                        activeSubmenu === item.id ? 'active' : ''
                      }`}
                    >
                      {item.items.map((dropdownItem, idx) => (
                        <li key={idx} className="urbancity-mobile-submenu-item mb-0 border-b-0">
                          {dropdownItem.hasNested ? (
                            <>
                              <a 
                                href="#" 
                                className="urbancity-mobile-submenu-link has-nested flex justify-between items-center py-3 pl-5 no-underline text-gray-500 font-medium text-sm hover:text-[#1a5fb4] transition-colors duration-200 relative"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNestedSubmenuToggle(`${item.id}-${idx}`);
                                }}
                              >
                                {dropdownItem.label} <i 
                                  className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                                    activeNestedSubmenu === `${item.id}-${idx}` ? 'rotate-180' : ''
                                  }`}
                                ></i>
                              </a>
                              <ul 
                                className={`urbancity-mobile-nested-submenu pl-5 list-none ${
                                  activeNestedSubmenu === `${item.id}-${idx}` ? 'active' : ''
                                }`}
                              >
                                {dropdownItem.nestedItems.map((nestedItem, nestedIdx) => (
                                  <li key={nestedIdx}>
                                    <Link 
                                      to={nestedItem.href} 
                                      className="urbancity-mobile-nested-submenu-link block py-2.5 pl-4 no-underline text-gray-500 font-normal text-sm hover:text-[#1a5fb4] transition-colors duration-200 border-l border-gray-200 hover:border-[#1a5fb4]"
                                      onClick={closeAllMenus}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link 
                              to={dropdownItem.href} 
                              className="urbancity-mobile-submenu-link block py-3 pl-5 no-underline text-gray-500 font-medium text-sm hover:text-[#1a5fb4] transition-colors duration-200"
                              onClick={closeAllMenus}
                            >
                              {dropdownItem.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link 
                    to={item.href} 
                    className="urbancity-mobile-nav-link block py-4 no-underline text-gray-800 font-semibold text-base hover:text-[#1a5fb4] transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile Action Buttons */}
          <div className="urbancity-mobile-buttons flex flex-col gap-3 mt-5">
            {user ? (
              <button onClick={() => {
                setShowLogoutModal(true);
                closeAllMenus();}}
                className="w-full px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2
                bg-green-600 text-white hover:bg-green-700 transition">
                  <span className="text-lg font-bold">✓</span>
                  <span className="truncate">{user.name}</span>
                </button>
                ) : (
                <Link
                to="/login"
                className="w-full px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2
                 bg-white text-[#1a5fb4] border-2 border-[#1a5fb4]
                 hover:bg-[#1a5fb4] hover:text-white transition"
                 onClick={closeAllMenus}>
                  <i className="fa-regular fa-circle-user"></i>Log In</Link>
                )}

  {/* Submit Business */}
  <Link
    to="/submit"
    className="w-full px-5 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2
               bg-gradient-to-r from-[#1a5fb4] to-[#0d4b97] text-white shadow-lg"
    onClick={closeAllMenus}
  >
    <i className="fas fa-plus-circle"></i> Submit Business
  </Link>

  {/* Advertise */}
  <Link
    to="/advertise"
    className="w-full px-5 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2
               bg-white text-[#1a5fb4] border-2 border-[#1a5fb4]
               hover:bg-[#1a5fb4] hover:text-white transition"
    onClick={closeAllMenus}
  >
    <i className="fas fa-bullhorn"></i> Advertise
  </Link>
</div>

        </div>

        {/* Overlay for Mobile */}
        {isMobileMenuOpen && (
          <div 
            className="urbancity-overlay fixed inset-0 bg-black/50 z-30"
            onClick={closeAllMenus}
          ></div>
        )}
      </header>

      {/* First Visit Popup */}
      {showWelcomeModal && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowWelcomeModal(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-[90%] p-8 relative animate-fadeIn">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              onClick={() => setShowWelcomeModal(false)}
            >
              <i className="fas fa-times text-lg"></i>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1a5fb4] to-[#26a269] flex items-center justify-center text-white text-2xl shadow-lg">
              <i className="fas fa-city"></i>
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-[#1a5fb4] to-[#26a269] bg-clip-text text-transparent">
              Welcome to CitySphere
            </h2>

            <p className="text-gray-600 text-center text-sm mb-6">
              Discover neighborhoods, events, dining, and hidden gems in your city —
              all in one modern directory.
            </p>

            {/* Actions */}
            <div className="flex gap-3 justify-center">
              <button 
                className="px-6 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#1a5fb4] to-[#0d4b97] shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition"
                onClick={() => setShowWelcomeModal(false)}
              >
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Do you want to log out?</h3>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                onClick={() => setShowLogoutModal(false)}
              >
                No
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;