'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { allProducts, featuredProducts, bestSellers } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategorySection />
      
      {/* Featured Products */}
      <section id="products" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600 text-sm md:text-base">Handpicked selections just for you</p>
            </div>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full sm:w-auto" onClick={() => window.location.href = '/#all-products'}>
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="deals" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 md:mb-10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Best Sellers</h2>
                <p className="text-gray-600 text-sm md:text-base">Customer favorites that keep selling out</p>
              </div>
            </div>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full lg:w-auto" onClick={() => window.location.href = '/#all-products'}>
              See All Best Sellers
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="all-products" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">All Products</h2>
              <p className="text-gray-600 text-sm md:text-base">Explore our complete collection</p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-xs md:text-sm text-gray-600">Rated 4.8/5 by customers</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {allProducts.slice(0, 12).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" onClick={() => alert('Loading more products...')}>
              Load More Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter & CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-red-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Join Over 100,000 Happy Customers
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Get exclusive access to new arrivals, special offers, and member-only deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.location.href = '/#products'}>
              Start Shopping
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => alert('Learn more about EliteStore...')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}