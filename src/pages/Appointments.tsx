
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for donation centers
const donationCenters = [
  { id: 1, name: 'City Blood Center' },
  { id: 2, name: 'Community Blood Bank' },
  { id: 3, name: 'Regional Medical Center' },
  { id: 4, name: 'Downtown Blood Services' },
  { id: 5, name: 'University Hospital Blood Center' },
];

// Mock time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const Appointments = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedCenter, setSelectedCenter] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  // Mock appointments for the history tab
  const pastAppointments = [
    { id: 1, center: 'City Blood Center', date: '2025-04-15', time: '10:30', status: 'Completed' },
    { id: 2, center: 'Regional Medical Center', date: '2025-03-02', time: '14:00', status: 'Completed' },
    { id: 3, center: 'Community Blood Bank', date: '2025-01-20', time: '11:00', status: 'Cancelled' },
  ];
  
  const upcomingAppointments = [
    { id: 4, center: 'Downtown Blood Services', date: '2025-05-28', time: '15:30', status: 'Scheduled' },
  ];
  
  const handleBookAppointment = () => {
    if (!date || !selectedCenter || !selectedTime) {
      toast({
        title: "Incomplete Information",
        description: "Please select a date, center, and time for your appointment.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Appointment Booked",
      description: `Your appointment has been scheduled for ${format(date, 'PPP')} at ${selectedTime}.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Book a Donation Appointment</h1>
          <p className="text-gray-600 mb-8">
            Schedule your next blood donation appointment at a convenient time and location.
          </p>
          
          <Tabs defaultValue="book">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="book">Book Appointment</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="book">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Select a Date</CardTitle>
                    <CardDescription>Choose your preferred donation date</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today;
                      }}
                      className="rounded border p-3 pointer-events-auto"
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Appointment Details</CardTitle>
                    <CardDescription>Select your preferred location and time</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Selected Date
                      </label>
                      <Input 
                        value={date ? format(date, 'PPP') : 'Please select a date'} 
                        disabled 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Donation Center
                      </label>
                      <Select onValueChange={setSelectedCenter} value={selectedCenter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a center" />
                        </SelectTrigger>
                        <SelectContent>
                          {donationCenters.map((center) => (
                            <SelectItem key={center.id} value={center.id.toString()}>
                              {center.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Time Slot
                      </label>
                      <Select onValueChange={setSelectedTime} value={selectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Donation Type
                      </label>
                      <Select defaultValue="whole">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="whole">Whole Blood</SelectItem>
                          <SelectItem value="plasma">Plasma</SelectItem>
                          <SelectItem value="platelets">Platelets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Notes
                      </label>
                      <Input placeholder="Any special requirements or health updates" />
                    </div>
                    
                    <Button 
                      onClick={handleBookAppointment}
                      className="w-full bg-blood hover:bg-blood-dark"
                    >
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming">
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.center}</h3>
                            <p className="text-gray-600">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                          <div>
                            <span className="bg-blue-light text-blue-800 px-3 py-1 rounded-full">
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-4">
                          <Button variant="outline" className="border-blood text-blood hover:bg-blood-light">
                            Reschedule
                          </Button>
                          <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Appointments</h3>
                  <p className="text-gray-600 mb-6">You don't have any scheduled appointments.</p>
                  <Button 
                    onClick={() => document.querySelector('[value="book"]')?.click()}
                    className="bg-blood hover:bg-blood-dark"
                  >
                    Schedule a Donation
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history">
              {pastAppointments.length > 0 ? (
                <div className="space-y-4">
                  {pastAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.center}</h3>
                            <p className="text-gray-600">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                          <div>
                            <span className={`px-3 py-1 rounded-full ${
                              appointment.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No Donation History</h3>
                  <p className="text-gray-600">You haven't made any donations yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointments;
