'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const categories = [
    'Tech & Gadgets', 'Style & Apparel', 'Living Spaces', 'Active Life', 'Reads & Media', 'Wellness', 'Auto & Tools', 'Kids & Family'
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Deliver to</span> NY 10001
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="hidden md:inline">Free shipping on orders over $50</span>
            <span className="hidden md:inline">|</span>
            <span className="text-xs md:text-sm">Support</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              EliteStore
            </h1>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-r-none border-r-0 px-3 bg-gray-50 hover:bg-gray-100">
                      All
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All Categories</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {categories.map((category) => (
                      <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="relative flex-1">
                  <Input
                    placeholder="Search products..."
                    className="rounded-none border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                  />
                </div>
                <Button className="rounded-l-none bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="flex-1 md:hidden mx-4">
            <div className="relative">
              <Input
                placeholder="Search..."
                className="pr-10 text-sm"
              />
              <Button size="sm" className="absolute right-1 top-1 h-7 w-7 bg-red-600 hover:bg-red-700 p-0">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex flex-col items-center p-2 h-auto">
                  <User className="w-5 h-5" />
                  <span className="text-xs">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => window.location.href = '/account'}>Sign In</DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/account'}>Create Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => window.location.href = '/account'}>Your Orders</DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/account'}>Your Account</DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/account'}>Your Wishlist</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" className="hidden sm:flex flex-col items-center p-2 h-auto" onClick={() => window.location.href = '/account'}>
              <Heart className="w-5 h-5" />
              <span className="text-xs">Wishlist</span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" className="flex flex-col items-center p-2 h-auto relative" onClick={() => window.location.href = '/cart'}>
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white sticky top-0 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-3 overflow-x-auto">
            {categories.slice(0, 6).map((category) => (
              <a
                key={category}
                href="#categories"
                className="whitespace-nowrap hover:text-red-400 transition-all duration-500 py-2 text-sm font-semibold relative group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#categories" 
              className="whitespace-nowrap hover:text-red-400 transition-all duration-500 py-2 text-sm font-semibold relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile category navigation */}
          <div className="md:hidden py-3">
            <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide">
              {categories.slice(0, 4).map((category) => (
                <a
                  key={category}
                  href="#categories"
                  className="whitespace-nowrap hover:text-red-400 transition-all duration-500 py-2 text-sm font-medium relative group flex-shrink-0"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {category}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#categories" 
                className="whitespace-nowrap hover:text-red-400 transition-all duration-500 py-2 text-sm font-medium relative group flex-shrink-0"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                More
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg absolute w-full z-50">
          <div className="px-4 py-4 space-y-1">
            {/* Mobile search in menu */}
            <div className="mb-4">
              <div className="relative">
                <Input placeholder="Search products..." className="pr-10" />
                <Button size="sm" className="absolute right-1 top-1 h-7 w-7 bg-red-600 hover:bg-red-700 p-0">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Mobile account links */}
            <div className="border-b pb-3 mb-3">
              <Button variant="ghost" className="w-full justify-start p-2" onClick={() => { setIsMenuOpen(false); window.location.href = '/account'; }}>
                <User className="w-4 h-4 mr-3" />
                My Account
              </Button>
              <Button variant="ghost" className="w-full justify-start p-2" onClick={() => { setIsMenuOpen(false); window.location.href = '/account'; }}>
                <Heart className="w-4 h-4 mr-3" />
                Wishlist
              </Button>
            </div>
            
            {categories.map((category) => (
              <a
                key={category}
                href="#categories"
                className="block py-3 px-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}