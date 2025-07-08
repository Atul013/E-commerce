'use client';

import { Smartphone, Shirt, Home, Dumbbell, Book, Heart, Car, Baby } from 'lucide-react';

const categories = [
  { id: 1, name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
  { id: 2, name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-pink-600' },
  { id: 3, name: 'Home & Garden', icon: Home, color: 'from-green-500 to-green-600' },
  { id: 4, name: 'Sports', icon: Dumbbell, color: 'from-orange-500 to-orange-600' },
  { id: 5, name: 'Books', icon: Book, color: 'from-purple-500 to-purple-600' },
  { id: 6, name: 'Health', icon: Heart, color: 'from-red-500 to-red-600' },
  { id: 7, name: 'Automotive', icon: Car, color: 'from-gray-500 to-gray-600' },
  { id: 8, name: 'Toys', icon: Baby, color: 'from-yellow-500 to-yellow-600' },
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across different categories, all carefully curated for quality and value.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 text-center hover-lift premium-shadow hover:premium-shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}