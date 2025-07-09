'use client';

import { useState } from 'react';
import { Smartphone, Shirt, Home, Dumbbell, Book, Heart, Car, Baby } from 'lucide-react';
import ProductCard from './ProductCard';
import { getProductsByCategory, categories as categoryNames } from '@/lib/products';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 1, name: 'Tech & Gadgets', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
  { id: 2, name: 'Style & Apparel', icon: Shirt, color: 'from-pink-500 to-pink-600' },
  { id: 3, name: 'Living Spaces', icon: Home, color: 'from-green-500 to-green-600' },
  { id: 4, name: 'Active Life', icon: Dumbbell, color: 'from-orange-500 to-orange-600' },
  { id: 5, name: 'Reads & Media', icon: Book, color: 'from-purple-500 to-purple-600' },
  { id: 6, name: 'Wellness', icon: Heart, color: 'from-red-500 to-red-600' },
  { id: 7, name: 'Auto & Tools', icon: Car, color: 'from-gray-500 to-gray-600' },
  { id: 8, name: 'Kids & Family', icon: Baby, color: 'from-yellow-500 to-yellow-600' },
];

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowAllProducts(false);
  };

  const selectedProducts = selectedCategory ? getProductsByCategory(selectedCategory) : [];
  const displayProducts = showAllProducts ? selectedProducts : selectedProducts.slice(0, 8);

  return (
    <section className="py-12 bg-gray-50" id="categories">
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
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 border border-transparent group-hover:border-red-100">
                  <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-xs md:text-sm group-hover:text-red-600 transition-all duration-300 group-hover:font-semibold">
                    {category.name}
                  </h3>
                  <div className="w-0 h-0.5 bg-red-600 mx-auto mt-1 md:mt-2 transition-all duration-300 group-hover:w-6 md:group-hover:w-8"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Products Display */}
        {selectedCategory && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCategory}</h3>
                <p className="text-gray-600">{selectedProducts.length} products available</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                View All Categories
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            {selectedProducts.length > 8 && !showAllProducts && (
              <div className="text-center mt-8">
                <Button 
                  onClick={() => setShowAllProducts(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                >
                  Show All {selectedCategory} Products ({selectedProducts.length - 8} more)
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}