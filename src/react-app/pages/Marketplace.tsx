import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { ShoppingBag, Star, Heart, Filter } from 'lucide-react';

export default function Marketplace() {
  const products = [
    {
      id: 1,
      name: "Ocean Wave Necklace",
      price: "$45",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
      description: "Beautiful handcrafted necklace made from upcycled ocean plastic",
      rating: 4.9,
      category: "Jewelry"
    },
    {
      id: 2,
      name: "Coral Wall Art",
      price: "$85",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
      description: "Stunning wall décor inspired by coral reefs, made from recycled materials",
      rating: 4.8,
      category: "Wall Décor"
    },
    {
      id: 3,
      name: "Eco-Brick Planter",
      price: "$28",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80",
      description: "Sustainable planter made from compressed plastic waste",
      rating: 4.7,
      category: "Home & Garden"
    },
    {
      id: 4,
      name: "Marine Life Mobile",
      price: "$65",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
      description: "Delicate mobile featuring sea creatures made from recycled ocean debris",
      rating: 4.9,
      category: "Décor"
    },
    {
      id: 5,
      name: "Seashell Wind Chimes",
      price: "$38",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
      description: "Melodic wind chimes crafted from natural shells and recycled materials",
      rating: 4.6,
      category: "Garden"
    },
    {
      id: 6,
      name: "Ocean Blue Bowl Set",
      price: "$95",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80",
      description: "Set of handmade bowls with ocean-inspired glazes",
      rating: 4.8,
      category: "Kitchenware"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Upcycled Marketplace 🌊
          </h1>
          <p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Book Antiqua, serif' }}
          >
            Discover unique handcrafted products made from ocean waste. Every purchase supports marine conservation and empowers local communities.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Featured Products
            </h2>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <Filter className="w-5 h-5 text-gray-600" />
              <span 
                className="text-gray-700"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Filter & Sort
              </span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p 
                    className="text-gray-600 mb-4 leading-relaxed"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-2xl font-bold text-blue-600"
                      style={{ fontFamily: 'Book Antiqua, serif' }}
                    >
                      {product.price}
                    </span>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <ShoppingBag className="w-4 h-4 inline mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
              <h3 
                className="text-3xl font-bold text-blue-900 mb-4"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                Join the Movement
              </h3>
              <p 
                className="text-xl text-blue-700 mb-6 max-w-2xl mx-auto"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Every purchase makes a difference. Support marine conservation while getting unique, beautiful products.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
