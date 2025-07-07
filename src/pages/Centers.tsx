
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Phone, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for donation centers
const donationCenters = [
  {
    id: 1,
    name: 'City Blood Center',
    address: '123 Main Street, New York, NY 10001',
    phone: '(212) 555-1234',
    hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm',
    distance: '1.2 miles',
  },
  {
    id: 2,
    name: 'Community Blood Bank',
    address: '456 Park Avenue, New York, NY 10022',
    phone: '(212) 555-5678',
    hours: 'Mon-Fri: 9am-7pm, Sat: 10am-4pm, Sun: Closed',
    distance: '2.5 miles',
  },
  {
    id: 3,
    name: 'Regional Medical Center',
    address: '789 Broadway, New York, NY 10003',
    phone: '(212) 555-9012',
    hours: '24/7 - Call ahead for donation times',
    distance: '3.1 miles',
  },
  {
    id: 4,
    name: 'Downtown Blood Services',
    address: '321 Water Street, New York, NY 10004',
    phone: '(212) 555-3456',
    hours: 'Mon-Fri: 10am-6pm, Sat-Sun: Closed',
    distance: '3.8 miles',
  },
  {
    id: 5,
    name: 'University Hospital Blood Center',
    address: '654 College Road, New York, NY 10016',
    phone: '(212) 555-7890',
    hours: 'Mon-Sat: 7am-9pm, Sun: 9am-5pm',
    distance: '4.2 miles',
  }
];

const Centers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCenters = donationCenters.filter(center => 
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Find Donation Centers</h1>
          <p className="text-gray-600 mb-8">
            Locate blood donation centers near you and plan your visit.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      className="pl-10"
                      placeholder="Search by location or center name"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Your Location</h2>
                  <div className="mb-4">
                    <Input placeholder="Enter your address" />
                  </div>
                  <Button className="w-full bg-blood hover:bg-blood-dark">
                    Use Current Location
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Filters</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
                      <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blood focus:ring-blood">
                        <option>5 miles</option>
                        <option>10 miles</option>
                        <option>15 miles</option>
                        <option>25 miles</option>
                        <option>50 miles</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Open Now</label>
                      <input type="checkbox" className="rounded text-blood focus:ring-blood" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Required</label>
                      <input type="checkbox" className="rounded text-blood focus:ring-blood" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="mb-6 bg-gray-200 rounded-lg overflow-hidden shadow-md" style={{ height: '400px' }}>
                {/* Here would be the actual map component */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Interactive Map View</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredCenters.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No centers found matching your search.</p>
                  </div>
                ) : (
                  filteredCenters.map(center => (
                    <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{center.name}</h3>
                              <div className="space-y-2">
                                <div className="flex items-start">
                                  <MapPin className="h-5 w-5 text-blood mr-2 mt-0.5" />
                                  <span className="text-gray-600">{center.address}</span>
                                </div>
                                <div className="flex items-start">
                                  <Phone className="h-5 w-5 text-blood mr-2 mt-0.5" />
                                  <span className="text-gray-600">{center.phone}</span>
                                </div>
                                <div className="flex items-start">
                                  <Clock className="h-5 w-5 text-blood mr-2 mt-0.5" />
                                  <span className="text-gray-600">{center.hours}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="bg-purple-light text-purple-dark px-3 py-1 rounded-full text-sm">
                                {center.distance}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 flex space-x-4">
                            <Button variant="outline" className="border-blood text-blood hover:bg-blood-light">
                              View Details
                            </Button>
                            <Button className="bg-blood hover:bg-blood-dark">
                              Book Appointment
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Centers;
