import React, { useEffect, useRef } from 'react';
import { 
  FaCheck, FaPhoneAlt, FaEnvelope, FaCalendarCheck,
  FaChartBar, FaImage, FaSearch, FaBullhorn, FaUserTie,
  FaInfinity, FaNewspaper, FaStar
} from 'react-icons/fa';

const Advertise = () => {
  const floatingBgRef = useRef(null);
  const priceBadgeRef = useRef(null);
  const tiersRef = useRef([]);

  useEffect(() => {
    // Parallax effect for floating shapes
    const handleScroll = () => {
      if (!floatingBgRef.current) return;
      const scrolled = window.pageYOffset;
      const shapes = floatingBgRef.current.querySelectorAll('.floating-shape');
      
      shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
      });
    };

    // Price counter animation
    if (priceBadgeRef.current) {
      let price = 99;
      let targetPrice = 99;
      let interval = setInterval(() => {
        price += 1;
        if (price >= 150) {
          clearInterval(interval);
          price = targetPrice;
        }
        priceBadgeRef.current.textContent = `$${price}/month`;
      }, 20);
      
      setTimeout(() => {
        clearInterval(interval);
        priceBadgeRef.current.textContent = `$${targetPrice}/month`;
      }, 1000);
    }

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp');
        }
      });
    }, { threshold: 0.1 });

    // Observe all fade-up elements
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleContactClick = (method, detail) => {
    console.log(`Selected: ${method} - ${detail}`);
    // In a real app, this would trigger contact action
    alert(`Contact method selected: ${method}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Floating Background */}
      <div ref={floatingBgRef} className="floating-bg fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="floating-shape shape-1 absolute w-[600px] h-[600px] -top-40 -right-40 rounded-full opacity-5 blur-3xl bg-gradient-to-br from-blue-600 to-transparent"></div>
        <div className="floating-shape shape-2 absolute w-[500px] h-[500px] -bottom-32 -left-32 rounded-full opacity-5 blur-3xl bg-gradient-to-tr from-green-500 to-transparent"></div>
      </div>

      {/* Custom styles for floating background and animations */}
      <style jsx>{`
        .floating-bg {
          pointer-events: none;
        }
        .floating-shape {
          transition: transform 0.1s linear;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-5 py-24 relative bg-gradient-to-br from-blue-600 to-green-500">
        <div className="hero-content max-w-4xl text-center relative z-10">
          <div className="price-badge inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white text-lg mb-8 animate-pulse-custom fade-up opacity-0">
            Packages start at <strong ref={priceBadgeRef} className="text-cyan-300 text-xl">$99/month</strong>
          </div>
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white fade-up opacity-0">
            Advertise with CitySphere
            <span className="block bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Reach Urban Explorers
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light fade-up opacity-0 delay-100">
            Connect with active city dwellers who discover and support local businesses daily
          </p>
        </div>
      </section>

      {/* Advertising Plans Section */}
      <section className="minimal-section px-5 py-20 max-w-7xl mx-auto relative">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 text-gray-900 fade-up opacity-0 relative inline-block">
          Advertising Packages
          <span className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full"></span>
        </h2>
        <p className="section-subtitle text-xl md:text-2xl text-gray-600 mb-16 font-light fade-up opacity-0 delay-100">
          Choose the perfect advertising solution for your business needs
        </p>

        <div className="price-tiers flex flex-col md:flex-row justify-center gap-8 mb-16">
          {/* Basic Tier */}
          <div className="tier flex-1 min-w-[280px] max-w-[350px] bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-400 hover:border-blue-600 hover:-translate-y-3 fade-up opacity-0">
            <h3 className="tier-name text-2xl md:text-3xl font-bold mb-3 text-gray-900">Basic</h3>
            <div className="tier-price text-4xl md:text-5xl font-black mb-2 text-blue-600 transition-colors duration-300">$99</div>
            <div className="tier-period text-gray-600 mb-8 text-lg">per month</div>
            <ul className="tier-features space-y-4 mb-8">
              {[
                { text: 'Featured listing', icon: FaStar },
                { text: 'Basic analytics', icon: FaChartBar },
                { text: 'Up to 10 photos', icon: FaImage },
                { text: 'Contact display', icon: FaPhoneAlt },
                { text: 'Category listing', icon: FaSearch }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 py-3 border-b border-gray-200 text-gray-800">
                  <item.icon className="text-green-500" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Tier */}
          <div className="tier tier-popular flex-1 min-w-[280px] max-w-[350px] bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-green-500 hover:-translate-y-3 fade-up opacity-0 delay-100 relative overflow-hidden">
            <div className="absolute top-5 -right-10 bg-green-500 text-white px-10 py-2 rotate-45 text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="tier-name text-2xl md:text-3xl font-bold mb-3 text-gray-900">Professional</h3>
            <div className="tier-price text-4xl md:text-5xl font-black mb-2 text-blue-600 transition-colors duration-300">$249</div>
            <div className="tier-period text-gray-600 mb-8 text-lg">per month</div>
            <ul className="tier-features space-y-4 mb-8">
              {[
                { text: 'Premium placement', icon: FaStar },
                { text: 'Advanced analytics', icon: FaChartBar },
                { text: '25 photos + video', icon: FaImage },
                { text: 'Priority in search', icon: FaSearch },
                { text: 'Event promotion', icon: FaBullhorn }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 py-3 border-b border-gray-200 text-gray-800">
                  <item.icon className="text-green-500" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="tier flex-1 min-w-[280px] max-w-[350px] bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-400 hover:border-blue-600 hover:-translate-y-3 fade-up opacity-0 delay-200">
            <h3 className="tier-name text-2xl md:text-3xl font-bold mb-3 text-gray-900">Enterprise</h3>
            <div className="tier-price text-4xl md:text-5xl font-black mb-2 text-blue-600 transition-colors duration-300">$499</div>
            <div className="tier-period text-gray-600 mb-8 text-lg">per month</div>
            <ul className="tier-features space-y-4 mb-8">
              {[
                { text: 'Top placement', icon: FaStar },
                { text: 'Dedicated manager', icon: FaUserTie },
                { text: 'Unlimited media', icon: FaInfinity },
                { text: 'Newsletter feature', icon: FaNewspaper },
                { text: 'Custom solutions', icon: FaCheck }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 py-3 border-b border-gray-200 text-gray-800">
                  <item.icon className="text-green-500" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 text-lg md:text-xl mt-10 fade-up opacity-0 delay-300">
          All plans include a dedicated account manager and performance analytics.
          <br className="hidden md:block" />
          Annual plans available at 15% discount.
        </p>
      </section>

      {/* Contact Emphasis Section */}
      <section className="contact-emphasis px-5 py-20 bg-gradient-to-br from-blue-600 to-green-500 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}>
        </div>
        
        <h2 className="emphasis-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white fade-up opacity-0 relative z-10">
          Ready to Advertise?
        </h2>
        <p className="emphasis-text text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto fade-up opacity-0 delay-100 relative z-10">
          Contact our advertising team to discuss your business needs and get started today
        </p>

        <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
          {[
            {
              icon: FaPhoneAlt,
              method: 'Call Us',
              detail: '(555) 123-ADVERT',
              hours: 'Mon-Fri, 9AM-6PM'
            },
            {
              icon: FaEnvelope,
              method: 'Email Us',
              detail: 'advertise@citysphere.com',
              hours: 'Response within 24 hours'
            },
            {
              icon: FaCalendarCheck,
              method: 'Schedule Call',
              detail: 'Book a consultation',
              hours: '30-min free strategy session'
            }
          ].map((contact, index) => (
            <div 
              key={index}
              onClick={() => handleContactClick(contact.method, contact.detail)}
              className="contact-item bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 cursor-pointer fade-up opacity-0"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <contact.icon className="contact-icon text-4xl text-white mb-5 mx-auto" />
              <h3 className="contact-method text-xl font-semibold text-white mb-3">{contact.method}</h3>
              <p className="contact-detail text-lg text-white/80 mb-2">{contact.detail}</p>
              <p className="contact-hours text-sm text-white/60">{contact.hours}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Note */}
      <div className="cta-note bg-gray-50 px-5 py-16 text-center">
        <p className="cta-text text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed fade-up opacity-0">
          "To advertise your business and reach thousands of active urban explorers, 
          <strong className="text-blue-600 font-semibold"> contact our advertising team today</strong>. 
          We'll help you choose the perfect package for your needs."
        </p>
      </div>
    </div>
  );
};

export default Advertise;