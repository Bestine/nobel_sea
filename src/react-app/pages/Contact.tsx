import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart, Globe } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Mtwapa, Kenya", "Near Mtwapa Beach", "Kilifi County"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@nobelsea.com", "partnerships@nobelsea.com", "support@nobelsea.com"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 707 494 278", "+254 721 880 015", "WhatsApp Available"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: By Appointment"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const reasons = [
    {
      icon: Heart,
      title: "Join Our Conservation Efforts",
      description: "Participate in beach cleanups, marine research, and community conservation projects."
    },
    {
      icon: Globe,
      title: "Partnership Opportunities",
      description: "Collaborate with us on sustainable tourism, research initiatives, or community development."
    },
    {
      icon: MessageCircle,
      title: "Share Your Story",
      description: "Tell us about your sustainable travel experiences or conservation ideas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-teal-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80)'
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Get in Touch 📞
          </h1>
          <p 
            className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            We'd love to hear from you! Whether you're interested in our products, want to partner with us, or need travel guidance, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: 'Brush Script MT, cursive' }}
            >
              How to Reach Us
            </h2>
            <p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Located in the beautiful coastal town of Mtwapa, we're always ready to connect with fellow ocean lovers and conservation enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p 
                      key={detailIndex}
                      className="text-gray-600"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 
                className="text-3xl font-bold text-blue-900 mb-6"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                Send Us a Message
              </h3>
              <p 
                className="text-gray-600 mb-8"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      First Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      Last Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    Email Address
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Product Support</option>
                    <option>Travel Assistance</option>
                    <option>Conservation Project</option>
                    <option>Media & Press</option>
                  </select>
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span style={{ fontFamily: 'Book Antiqua, serif' }}>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h4 
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: 'Brush Script MT, cursive' }}
                    >
                      Mtwapa, Kenya
                    </h4>
                    <p style={{ fontFamily: 'Book Antiqua, serif' }}>
                      Near beautiful Mtwapa Beach
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 
                    className="text-xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    Our Location
                  </h4>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    We're proudly based in Mtwapa, a vibrant coastal town in Kilifi County, Kenya. Our location near Mtwapa Beach gives us direct access to the marine ecosystems we work to protect and allows us to collaborate closely with local coastal communities.
                  </p>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8">
                <h4 
                  className="text-2xl font-bold text-blue-900 mb-6"
                  style={{ fontFamily: 'Brush Script MT, cursive' }}
                >
                  Why Get in Touch?
                </h4>
                <div className="space-y-6">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <reason.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 
                          className="font-bold text-gray-900 mb-2"
                          style={{ fontFamily: 'Book Antiqua, serif' }}
                        >
                          {reason.title}
                        </h5>
                        <p 
                          className="text-gray-600 text-sm leading-relaxed"
                          style={{ fontFamily: 'Book Antiqua, serif' }}
                        >
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Visit Mtwapa Beach
          </h3>
          <p 
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            When you're in the area, come visit us at beautiful Mtwapa Beach. Experience the natural beauty we're working to protect while learning about our conservation efforts firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Plan Your Visit
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Learn About Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
