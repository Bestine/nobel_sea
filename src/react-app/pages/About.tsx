import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Users, Heart, Globe, Target, Waves, MapPin } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: "Athman Masudi",
      role: "Strategic $ Operations Lead",
      image: "https://raw.githubusercontent.com/Bestine/nobel_sea/refs/heads/main/public/assets/images/athman.jpeg?auto=format&fit=crop&w=400&q=80",
      bio: "Oversees execution of company activities, coordinates field operations, optimizes workflows, and aligns teams with strategy and timelines. Ensures smooth rollout of MVP, pilots, cleanup programs, and community initiatives.",
      specialties: ["Operations Management", "Strategy Execution", "Project Coordination"]
    },
    {
      name: "Hamisi Bakari",
      role: "Finance & Budgeting Lead",
      image: "https://raw.githubusercontent.com/Bestine/nobel_sea/refs/heads/main/public/assets/images/hamisi.jpeg?auto=format&fit=crop&w=400&q=80",
      bio: "Manages financial planning, budgeting, and cost control. Oversees accounting, projections, and grant or investor fund allocation to ensure sustainability, transparency, and smart use of resources for each phase of growth.",
      specialties: ["Financial Planning", "Budgeting", "Cost Management"]
    },
    {
      name: "Ambra Mjumbe",
      role: "Corporate Relations & Partnerships Lead",
      image: "https://raw.githubusercontent.com/Bestine/nobel_sea/refs/heads/main/public/assets/images/ambra.jpeg?auto=format&fit=crop&w=400&q=80",
      bio: "Develops strategic partnerships, secures MOUs, manages investor and stakeholder relations, and expands corporate networks. Represents the company with institutions, NGOs, hotels, and government bodies to grow Nobel Sea’s ecosystem and influence.",
      specialties: ["Partnerships", "Investor Relations", "Investor Outreach", "Stakeholder Engagement"]
    },
    {
      name: "Bestine Okinda",
      role: "Machine Learning & Research Specialist",
      image: "https://raw.githubusercontent.com/Bestine/nobel_sea/refs/heads/main/public/assets/images/white-BestineOkinda.png?auto=format&fit=crop&w=400&q=80",
      bio: "Leads AI development, drone mapping models, and research initiatives. Builds data pipelines, trains agents, and prototypes intelligent systems that power cleanup, mapping, sustainable tourism, and analytics for informed decision-making",
      specialties: ["AI Development", "Data Collection", "Drone Mapping"]
    },
    {
      name: "Salim Bwanamwaka",
      role: "Branding & Product Design Lead",
      image: "https://raw.githubusercontent.com/Bestine/nobel_sea/refs/heads/main/public/assets/images/salim.jpeg?auto=format&fit=crop&w=400&q=80",
      bio: "Shapes brand identity, designs product experience, and ensures visual consistency across digital and physical touchpoints. Guides creative campaigns, marketplace branding, eco-product design, and user experience elements that attract tourists and partners.",
      specialties: ["Brand Design", "Product Design", "Creative Direction"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Oceans",
      description: "Deep commitment to protecting and preserving marine ecosystems for future generations."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Empowering local communities through sustainable economic opportunities and education."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Local action with global reach, contributing to worldwide marine conservation efforts."
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology to solve marine conservation challenges."
    }
  ];

  const achievements = [
    { number: "500+", label: "Kg of Ocean Plastic Removed" },
    { number: "50+", label: "Local Artisans Empowered" },
    { number: "10", label: "Coastal Communities Engaged" },
    { number: "1000+", label: "Travelers Educated" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80)'
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Users className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            About Nobel Sea 🌊
          </h1>
          <p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            We are a passionate team of marine conservationists, technologists, and community advocates based in beautiful Mtwapa, dedicated to protecting East Africa's precious coastline.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-4xl font-bold text-blue-900 mb-6"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                Our Story
              </h2>
              <p 
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Born from a deep love for East Africa's stunning coastline and growing concern about marine pollution, Nobel Sea was founded to bridge the gap between conservation and community empowerment. Located in Mtwapa, near the pristine Mtwapa Beach, we witness daily both the beauty and the challenges facing our marine ecosystems.
              </p>
              <p 
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Our innovative approach combines cutting-edge technology with traditional community values, creating sustainable solutions that benefit both the environment and local livelihoods. Through our marketplace of upcycled products, AI-powered travel assistance, and educational initiatives, we're transforming how people interact with our oceans.
              </p>
              <div className="flex items-center space-x-3 text-blue-600">
                <MapPin className="w-5 h-5" />
                <span 
                  className="font-semibold"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  Mtwapa, Kenya - Near Mtwapa Beach
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80"
                alt="Mtwapa Beach coastline"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: 'Brush Script MT, cursive' }}
            >
              Our Values
            </h2>
            <p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              The principles that guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 
                  className="text-xl font-bold text-blue-900 mb-4"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: 'Brush Script MT, cursive' }}
            >
              Meet Our Team
            </h2>
            <p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Passionate individuals working together to create a sustainable future for our oceans and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-blue-100"
              >
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 
                    className="text-2xl font-bold text-blue-900 mb-2"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-blue-600 font-semibold mb-4"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 
                      className="font-semibold text-gray-900 mb-3"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      Specialties:
                    </h4>
                    {member.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2 mb-2"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-4xl font-bold text-white mb-16"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Our Impact So Far
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Book Antiqua, serif' }}>
                  {achievement.number}
                </div>
                <div className="text-xl text-blue-100" style={{ fontFamily: 'Book Antiqua, serif' }}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                <Waves className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 
              className="text-3xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: 'Brush Script MT, cursive' }}
            >
              Join Our Mission
            </h3>
            <p 
              className="text-xl text-blue-700 mb-8 leading-relaxed"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Whether you're a traveler, conservationist, or community member, there's a place for you in our movement to protect and preserve our beautiful coastline.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Get Involved
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
