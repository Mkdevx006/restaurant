
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">TravelBite</h3>
            <p className="max-w-md">
              Your perfect culinary companion for every journey. We bridge the gap between your route and the best meals available, ensuring you never have to settle for average food on the road.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Highway Plaza, Food City</li>
              <li>State Expressway, CA 90210</li>
              <li>support@travelbite.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TravelBite Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
