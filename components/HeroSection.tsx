'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Premium Shopping
              <span className="block bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-6 leading-relaxed">
              Discover Exceptional Quality at Unbeatable Prices
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Discover exceptional products at unbeatable prices. From cutting-edge electronics to premium fashion, 
              we bring you the best selection with guaranteed quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.location.href = '/#products'}>
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.location.href = '/#deals'}>
                View Details
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Free Shipping</p>
                  <p className="text-xs md:text-sm text-gray-400">Orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Secure Payment</p>
                  <p className="text-xs md:text-sm text-gray-400">100% Protected</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Fast Delivery</p>
                  <p className="text-xs md:text-sm text-gray-400">2-day shipping</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
                alt="Premium Shopping"
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}