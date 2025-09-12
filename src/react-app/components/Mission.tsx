import { Heart, Shield, Users, BookOpen, Recycle, Map, Brain } from 'lucide-react';

export default function Mission() {
  const missions = [
    {
      icon: Heart,
      title: "Sustainable Travel",
      description: "Promote eco-friendly tourism practices that preserve the natural beauty of East Africa's coastline for future generations."
    },
    {
      icon: Shield,
      title: "Marine Protection",
      description: "Protect and restore marine ecosystems through innovative conservation initiatives and community-driven cleanup efforts."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Support local communities by creating economic opportunities through sustainable tourism and marine conservation projects."
    },
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "Educate travelers and locals about marine conservation, sustainable practices, and the importance of ocean health."
    }
  ];

  const features = [
    {
      icon: Recycle,
      title: "Upcycled Marketplace",
      description: "Shop unique crafts made from ocean waste - necklaces, wall décor, eco-bricks, and more."
    },
    {
      icon: Map,
      title: "Travel Assistant",
      description: "AI-powered itinerary planning for sustainable travel along the East African coast."
    },
    {
      icon: Brain,
      title: "Clean Travel Guide",
      description: "Get personalized eco-travel tips and guidance for responsible tourism."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Our Mission
          </h2>
          <p 
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            We are dedicated to creating a sustainable future where marine ecosystems thrive, 
            communities prosper, and travelers experience the wonder of our oceans responsibly.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <mission.icon className="w-7 h-7 text-white" />
              </div>
              <h3 
                className="text-xl font-bold text-blue-900 mb-3"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                {mission.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                {mission.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h3 
            className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            What We Offer
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-md group-hover:shadow-lg">
                <feature.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h4 
                className="text-2xl font-bold text-blue-900 mb-4"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                {feature.title}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Join Our Movement
          </button>
        </div>
      </div>
    </section>
  );
}
