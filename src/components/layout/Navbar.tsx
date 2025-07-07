
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Search, MapPin, Calendar, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="blood-drop-shape"></div>
          <span className="text-xl font-bold text-blood">BloodConnect</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blood transition-colors">Home</Link>
          <Link to="/centers" className="text-gray-700 hover:text-blood transition-colors">Find Centers</Link>
          <Link to="/appointments" className="text-gray-700 hover:text-blood transition-colors">Book Appointment</Link>
          <Link to="/education" className="text-gray-700 hover:text-blood transition-colors">Learn</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-blood hover:bg-blood-dark">
              Register
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="md:hidden bg-white shadow-sm">
        <div className="container flex justify-around py-2">
          <Link to="/" className="flex flex-col items-center text-xs text-gray-700">
            <Heart className="h-5 w-5 text-blood" />
            <span>Home</span>
          </Link>
          <Link to="/centers" className="flex flex-col items-center text-xs text-gray-700">
            <MapPin className="h-5 w-5 text-blood" />
            <span>Centers</span>
          </Link>
          <Link to="/appointments" className="flex flex-col items-center text-xs text-gray-700">
            <Calendar className="h-5 w-5 text-blood" />
            <span>Appointments</span>
          </Link>
          <Link to="/education" className="flex flex-col items-center text-xs text-gray-700">
            <Search className="h-5 w-5 text-blood" />
            <span>Learn</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
