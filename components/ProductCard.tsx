'use client';

import { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isFavorite?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  isFavorite = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [favorite, setFavorite] = useState(isFavorite);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover-lift premium-shadow hover:premium-shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <Badge className="bg-red-600 hover:bg-red-700 text-white font-medium">
              {badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="font-medium">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            favorite
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-600'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setFavorite(!favorite);
            if (!favorite) {
              alert('Added to wishlist!');
            } else {
              alert('Removed from wishlist!');
            }
          }}
        >
          <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick actions */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row gap-2">
          <Button 
            size="sm"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              alert(`Added ${name} to cart!`);
            }}
          >
            <ShoppingCart className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white hover:bg-gray-50 border-gray-200 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              alert(`View details for ${name}`);
            }}
          >
            <span className="hidden sm:inline">Details</span>
            <span className="sm:hidden">Info</span>
          </Button>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="font-medium text-gray-900 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors text-sm md:text-base">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs md:text-sm text-gray-600">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-bold text-red-600">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-xs md:text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}