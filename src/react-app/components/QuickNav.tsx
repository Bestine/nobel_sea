import { Link } from 'react-router';
import { ShoppingBag, Bot, BookOpen, ArrowRight } from 'lucide-react';

export default function QuickNav() {
  const navItems = [
    {
      title: "Marketplace",
      description: "Discover upcycled crafts and eco-friendly products made from ocean waste",
      icon: ShoppingBag,
      path: "/marketplace",
      color: "from-emerald-500 to-green-600",
      hoverColor: "hover:from-emerald-600 hover:to-green-700"
    },
    {
      title: "AI Assistants",
      description: "Get personalized travel planning and eco-travel guidance",
      icon: Bot,
      path: "/ai-assistants", 
      color: "from-purple-500 to-indigo-600",
      hoverColor: "hover:from-purple-600 hover:to-indigo-700"
    },
    {
      title: "Blog",
      description: "Read about marine conservation, sustainable tourism, and our initiatives",
      icon: BookOpen,
      path: "/blog",
      color: "from-orange-500 to-red-600", 
      hoverColor: "hover:from-orange-600 hover:to-red-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Explore Nobel Sea
          </h2>
          <p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Discover everything we offer to support sustainable travel and marine conservation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden relative">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} ${item.hoverColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed mb-6"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span 
                    className="font-semibold mr-2 group-hover:mr-4 transition-all duration-300"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    Explore
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
