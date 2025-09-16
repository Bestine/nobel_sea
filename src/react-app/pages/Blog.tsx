import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "AI-Powered Marine Research: Revolutionizing Ocean Conservation",
    excerpt: "Discover how artificial intelligence is transforming our understanding of marine ecosystems and accelerating conservation efforts along the East African coast.",
    author: "Bestine Okinda",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80",
    category: "Marine Research"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Plastic Mapping with Drones: Tracking Ocean Waste from Above",
      excerpt: "Learn about our innovative drone mapping program that identifies plastic pollution hotspots and guides cleanup efforts.",
      author: "Athuman Masoud",
      date: "December 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=500&q=80",
      category: "Technology"
    },
    {
      id: 3,
      title: "WasteShark Success: Our First Year of Automated Ocean Cleanup",
      excerpt: "A comprehensive review of our WasteShark deployment and the incredible impact on marine debris removal.",
      author: "Hamisi Bakari",
      date: "December 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80",
      category: "Conservation"
    },
    {
      id: 4,
      title: "Sustainable Tourism: Creating Economic Opportunities for Coastal Communities",
      excerpt: "How responsible tourism is empowering local communities while protecting marine environments.",
      author: "Bestine Okinda",
      date: "December 3, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80",
      category: "Community"
    },
    {
      id: 5,
      title: "The Science Behind Submerger Technology",
      excerpt: "Deep dive into the technology powering our underwater cleanup robots and their environmental impact.",
      author: "Athuman Masoud",
      date: "November 30, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
      category: "Technology"
    },
    {
      id: 6,
      title: "Community Voices: Stories from Our Conservation Heroes",
      excerpt: "Meet the local champions who are making a difference in marine conservation across East Africa.",
      author: "Ambra Mjumbe",
      date: "November 28, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80",
      category: "Community"
    },
    {
      id: 7,
      title: "Zero-Waste Travel: Your Guide to Sustainable Coastal Adventures",
      excerpt: "Practical tips for minimizing your environmental impact while exploring East Africa's stunning coastline.",
      author: "Bestine Okinda",
      date: "November 25, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
      category: "Sustainable Travel"
    }
  ];

  const categories = ["All", "Marine Research", "Technology", "Conservation", "Community", "Sustainable Travel"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Marine Research": "bg-blue-100 text-blue-800",
      "Technology": "bg-purple-100 text-purple-800",
      "Conservation": "bg-green-100 text-green-800",
      "Community": "bg-orange-100 text-orange-800",
      "Sustainable Travel": "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Nobel Sea Blog 📖
          </h1>
          <p 
            className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Stories of innovation, conservation, and community empowerment from the frontlines of marine protection.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {featuredPost.title}
                </h2>
                <p 
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === "All" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
                }`}
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors duration-300"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {post.title}
                  </h3>
                  
                  <p 
                    className="text-gray-600 mb-4 leading-relaxed"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
