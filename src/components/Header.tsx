
import React, { useState } from 'react';
import { Menu, X, Home, FileText, DollarSign, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Notices', path: '/notices', icon: FileText },
    { name: 'Finance', path: '/finance', icon: DollarSign },
    { name: 'Meetings', path: '/meetings', icon: Users },
    { name: 'Grievances', path: '/grievances', icon: MessageSquare },
  ];

  return (
    <header className="bg-emerald-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">MAGNOLIA-SKYVIEW</h1>
              <p className="text-emerald-100 text-sm">Housing Society</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-emerald-600 mt-4 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 py-3 hover:bg-emerald-600 px-2 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
