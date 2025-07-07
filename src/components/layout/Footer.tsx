
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="blood-drop-shape"></div>
              <span className="text-xl font-bold text-blood">BloodConnect</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Connecting blood donors with those in need. Every donation counts.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blood transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/centers" className="text-gray-600 hover:text-blood transition-colors text-sm">Find Centers</Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-600 hover:text-blood transition-colors text-sm">Book Appointment</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-600 hover:text-blood transition-colors text-sm">Learn</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/education/eligibility" className="text-gray-600 hover:text-blood transition-colors text-sm">Eligibility</Link>
              </li>
              <li>
                <Link to="/education/faqs" className="text-gray-600 hover:text-blood transition-colors text-sm">FAQs</Link>
              </li>
              <li>
                <Link to="/education/benefits" className="text-gray-600 hover:text-blood transition-colors text-sm">Benefits</Link>
              </li>
              <li>
                <Link to="/education/process" className="text-gray-600 hover:text-blood transition-colors text-sm">Donation Process</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Email: info@bloodconnect.org</li>
              <li className="text-gray-600 text-sm">Phone: (123) 456-7890</li>
              <li className="mt-4">
                <button className="flex items-center space-x-2 bg-blood text-white px-4 py-2 rounded-md hover:bg-blood-dark transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>Emergency Request</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BloodConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
