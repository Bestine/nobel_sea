import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Bot, MapPin, Compass, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function AIAssistants() {
  const assistants = [
    {
      id: 1,
      name: "Travel Itinerary Assistant",
      description: "Plan your perfect sustainable travel experience along the East African coast",
      features: [
        "Personalized itinerary planning",
        "Eco-friendly accommodation recommendations",
        "Sustainable transportation options",
        "Marine conservation site visits",
        "Local community experiences"
      ],
      icon: MapPin,
      color: "from-emerald-500 to-green-600",
      buttonText: "Plan My Trip"
    },
    {
      id: 2,
      name: "Clean Travel Guide",
      description: "Get expert guidance on eco-friendly travel practices and marine conservation",
      features: [
        "Sustainable travel tips",
        "Marine conservation guidelines",
        "Eco-friendly packing lists",
        "Responsible wildlife viewing",
        "Carbon footprint reduction"
      ],
      icon: Compass,
      color: "from-blue-500 to-indigo-600",
      buttonText: "Get Travel Tips"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Bot className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            AI Travel Assistants 🤖
          </h1>
          <p 
            className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Let our intelligent assistants help you plan the perfect sustainable journey while protecting the marine ecosystems you'll explore.
          </p>
        </div>
      </section>

      {/* Assistants Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {assistants.map((assistant) => (
              <div 
                key={assistant.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${assistant.color} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <assistant.icon className="w-8 h-8" />
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      {assistant.name}
                    </h3>
                  </div>
                  <p 
                    className="text-lg opacity-90 leading-relaxed"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {assistant.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <h4 
                    className="text-xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    What I Can Help With:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {assistant.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${assistant.color} rounded-full`}></div>
                        <span 
                          className="text-gray-700"
                          style={{ fontFamily: 'Book Antiqua, serif' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full px-6 py-4 bg-gradient-to-r ${assistant.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <MessageCircle className="w-5 h-5" />
                    <span style={{ fontFamily: 'Book Antiqua, serif' }}>
                      {assistant.buttonText}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 border border-yellow-200">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 
                className="text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                More AI Assistants Coming Soon
              </h3>
              <p 
                className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                We're developing additional AI assistants for marine research, plastic mapping, and community engagement. Stay tuned for updates!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600" style={{ fontFamily: 'Book Antiqua, serif' }}>
                <span className="px-4 py-2 bg-white rounded-full shadow-sm">🔬 Marine Research Assistant</span>
                <span className="px-4 py-2 bg-white rounded-full shadow-sm">🗺️ Plastic Mapping Guide</span>
                <span className="px-4 py-2 bg-white rounded-full shadow-sm">🤝 Community Connector</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
