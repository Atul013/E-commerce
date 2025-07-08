'use client';

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-red-100 mb-6">Get the latest deals and exclusive offers delivered to your inbox</p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-0"
              />
              <Button className="bg-black hover:bg-gray-800 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
              EliteStore
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier destination for quality products at exceptional prices. We're committed to delivering 
              an outstanding shopping experience with every order.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">1-800-ELITE-STORE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">support@elitestore.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">123 Commerce St, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2">
              {[
                'Contact Us',
                'Shipping Info',
                'Returns & Exchanges',
                'Size Guide',
                'Track Your Order',
                'FAQs'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Careers',
                'Press',
                'Investor Relations',
                'Corporate Responsibility',
                'Store Locations'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Accessibility',
                'Security',
                'Sitemap'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2025 EliteStore. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-4">
              <img src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg" alt="Payment" className="h-6 w-auto" />
              <img src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg" alt="Security" className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}