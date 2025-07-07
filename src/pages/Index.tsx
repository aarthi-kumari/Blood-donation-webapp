
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Heart, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const bloodTypes = [
  { type: 'A+', compatibility: 'Can receive from: A+, A-, O+, O-' },
  { type: 'A-', compatibility: 'Can receive from: A-, O-' },
  { type: 'B+', compatibility: 'Can receive from: B+, B-, O+, O-' },
  { type: 'B-', compatibility: 'Can receive from: B-, O-' },
  { type: 'AB+', compatibility: 'Can receive from: All blood types' },
  { type: 'AB-', compatibility: 'Can receive from: A-, B-, AB-, O-' },
  { type: 'O+', compatibility: 'Can receive from: O+, O-' },
  { type: 'O-', compatibility: 'Can receive from: O- only' },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-light to-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                  Your Donation <span className="text-blood">Saves Lives</span>
                </h1>
                <p className="text-lg mb-8 text-gray-700">
                  Every blood donation can save up to three lives. Join our community of donors and make a difference today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/register">
                    <Button className="bg-blood hover:bg-blood-dark text-lg px-8 py-6">
                      Register to Donate
                    </Button>
                  </Link>
                  <Link to="/centers">
                    <Button variant="outline" className="text-lg px-8 py-6 border-blood text-blood hover:bg-blood-light">
                      Find Donation Center
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://placehold.co/600x400/f8d7da/ea384c?text=Blood+Donation+Illustration" 
                  alt="Blood Donation" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How BloodConnect Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blood-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <User className="text-blood h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Register</h3>
                <p className="text-gray-600">Create your donor profile with blood type and health information</p>
              </div>
              <div className="text-center">
                <div className="bg-blood-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="text-blood h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Centers</h3>
                <p className="text-gray-600">Locate nearby donation centers with our interactive map</p>
              </div>
              <div className="text-center">
                <div className="bg-blood-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="text-blood h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                <p className="text-gray-600">Book your appointment at your preferred time and location</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blood Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Blood Type Compatibility</h2>
            <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
              Understanding blood type compatibility is crucial for successful transfusions. 
              See which blood types are compatible with yours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {bloodTypes.map((blood) => (
                <Card key={blood.type} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-blood p-3 text-white text-center">
                      <h3 className="text-2xl font-bold">{blood.type}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">{blood.compatibility}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/education/compatibility">
                <Button variant="outline" className="border-blood text-blood hover:bg-blood-light">
                  Learn More About Blood Types
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why Donate Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Why Donate Blood?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Heart className="text-blood mr-3 h-6 w-6 flex-shrink-0" />
                    <span>One donation can save up to three lives</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="text-blood mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Blood cannot be manufactured – it can only come from donors</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="text-blood mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Every two seconds, someone in the U.S. needs blood</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="text-blood mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Regular blood donation reduces the risk of heart and liver ailments</span>
                  </li>
                </ul>
                <Link to="/education/benefits" className="mt-6 inline-block">
                  <Button className="bg-blood hover:bg-blood-dark">
                    Learn More Benefits
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://placehold.co/600x400/f8d7da/ea384c?text=Why+Donate+Blood" 
                  alt="Why Donate Blood" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blood text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of donors who are saving lives every day. 
              Register now to schedule your first donation appointment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-white text-blood hover:bg-gray-100 text-lg px-8 py-6">
                  Register to Donate
                </Button>
              </Link>
              <Link to="/appointments">
                <Button variant="outline" className="border-white text-white hover:bg-blood-dark text-lg px-8 py-6">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
