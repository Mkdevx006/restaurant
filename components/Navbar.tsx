
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 tracking-tight flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              TravelBite
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-6">
                <Link 
                  to="/profile" 
                  className="group flex items-center space-x-2 text-slate-700 hover:text-orange-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    {user.firstName.charAt(0)}
                  </div>
                  <span className="hidden sm:inline font-medium">
                    Hi, <span className="font-bold">{user.firstName}</span>
                  </span>
                </Link>
                <button
                  onClick={onLogout}
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-slate-700 hover:text-orange-600 px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
