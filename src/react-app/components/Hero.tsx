import { useEffect, useState } from 'react';
import { ArrowDown, Waves, Heart, Globe, Users } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Brush+Script+MT&family=Book+Antiqua:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <Waves className="w-8 h-8 text-blue-200/30" />
        </div>
        <div className="absolute top-32 right-16 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Heart className="w-6 h-6 text-blue-300/40" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <Globe className="w-7 h-7 text-blue-200/35" />
        </div>
        <div className="absolute bottom-40 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
          <Users className="w-6 h-6 text-blue-300/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Logo/Title */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Nobel Sea
            <span className="ml-4 text-4xl sm:text-5xl lg:text-6xl">🌊💙</span>
          </h1>

          {/* Tagline */}
          <p 
            className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 drop-shadow-lg leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Sustainable Travel, Thriving Oceans
          </p>

          {/* Description */}
          <p 
            className="text-lg sm:text-xl text-blue-200/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Discover the beauty of East Africa's coastline while contributing to marine conservation. 
            Together, we protect our oceans, empower communities, and create a sustainable future for all.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToMission}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Discover Our Mission
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Explore Marketplace
            </button>
          </div>

          {/* Scroll indicator */}
          <div 
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={scrollToMission}
          >
            <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
          </div>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z">
            <animate attributeName="d" 
              values="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z;
                      M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z;
                      M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
              dur="4s" 
              repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </section>
  );
}
