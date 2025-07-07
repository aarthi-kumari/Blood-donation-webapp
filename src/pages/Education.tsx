
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Education = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Learn About Blood Donation</h1>
          <p className="text-gray-600 mb-8">
            Discover the importance of blood donation, eligibility requirements, and more.
          </p>
          
          <Tabs defaultValue="about">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="about">About Donation</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Why Blood Donation Matters</h2>
                  <p className="text-gray-700 mb-4">
                    Blood donation is a vital lifeline for many people needing long-term treatments, as well as in emergency situations. Your donation can help:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>People undergoing cancer treatments</li>
                    <li>Accident and burn victims</li>
                    <li>Patients undergoing surgery</li>
                    <li>Newborn babies and mothers with pregnancy complications</li>
                    <li>People with blood disorders like anemia or hemophilia</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Every two seconds, someone in the United States needs blood, and a single car accident victim can require as many as 100 units of blood. Your donation is essential to maintaining a healthy and reliable blood supply.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://placehold.co/600x400/f8d7da/ea384c?text=Blood+Donation+Impact" 
                    alt="Blood Donation Impact" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Types of Blood Donations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="bg-blood p-4">
                      <h3 className="text-xl font-semibold text-white">Whole Blood</h3>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        The most common type of donation where we collect a pint of whole blood. This type of donation usually takes about 10 minutes.
                      </p>
                      <p className="text-gray-700 mb-4">
                        <strong>Who it helps:</strong> Whole blood can be transfused in its original form or separated into red cells, plasma and platelets.
                      </p>
                      <p className="text-gray-700">
                        <strong>Time required:</strong> About 1 hour
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-blood p-4">
                      <h3 className="text-xl font-semibold text-white">Plasma</h3>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        During plasma donation, we collect the liquid portion of blood, returning red cells and platelets back to your body.
                      </p>
                      <p className="text-gray-700 mb-4">
                        <strong>Who it helps:</strong> Patients with severe burns, trauma, shock, and other critical conditions.
                      </p>
                      <p className="text-gray-700">
                        <strong>Time required:</strong> About 1-2 hours
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="bg-blood p-4">
                      <h3 className="text-xl font-semibold text-white">Platelets</h3>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        This donation collects only platelets — tiny cells that help blood clot — returning other blood components back to your body.
                      </p>
                      <p className="text-gray-700 mb-4">
                        <strong>Who it helps:</strong> Cancer patients, organ transplant recipients, and patients with clotting disorders.
                      </p>
                      <p className="text-gray-700">
                        <strong>Time required:</strong> About 2-3 hours
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-blood hover:bg-blood-dark text-lg px-8 py-6">
                  Schedule Your Donation
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="eligibility">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold mb-6">Basic Eligibility Requirements</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold mb-3">Age & Weight</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Be at least 17 years old in most states (16 years old with parental consent in some states)</li>
                        <li>Weigh at least 110 lbs (50 kg)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold mb-3">General Health</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Be in good general health and feeling well</li>
                        <li>No symptoms of illness like cold, flu, or fever on donation day</li>
                        <li>Adequate iron levels in your blood</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold mb-3">Waiting Periods</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>After receiving a tattoo (varies by state)</li>
                        <li>After certain vaccinations</li>
                        <li>After traveling to certain countries</li>
                        <li>After having certain medical conditions or procedures</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold mb-3">Donation Frequency</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Whole blood: Every 56 days (up to 6 times per year)</li>
                        <li>Plasma: Every 28 days (up to 13 times per year)</li>
                        <li>Platelets: Every 7 days (up to 24 times per year)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-gray-700 italic">
                      Note: Eligibility criteria may vary slightly between donation centers and countries. Always check with your local blood donation center for the most up-to-date information.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white p-6 rounded-lg shadow sticky top-24">
                    <h3 className="text-xl font-semibold mb-6">Am I Eligible?</h3>
                    <p className="text-gray-700 mb-4">
                      Take our quick eligibility quiz to find out if you're likely to be eligible to donate blood.
                    </p>
                    <Button className="w-full bg-blood hover:bg-blood-dark">
                      Start Eligibility Quiz
                    </Button>
                    
                    <div className="mt-8 pt-6 border-t">
                      <h4 className="font-semibold mb-3">Common Reasons for Deferral</h4>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                        <li>Low hemoglobin or iron levels</li>
                        <li>Recent travel to certain regions</li>
                        <li>Certain medications</li>
                        <li>Recent illness</li>
                        <li>High-risk behaviors</li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-600">
                        Many deferral reasons are temporary. If you've been deferred before, you may be eligible to donate now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="process">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">The Blood Donation Process</h2>
                <p className="text-gray-700 mb-8 text-center">
                  From registration to recovery, here's what to expect during your blood donation.
                </p>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-blood-light rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                        <span className="text-blood text-3xl font-bold">1</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">Registration</h3>
                      <p className="text-gray-700">
                        You'll complete a registration form with your personal information. Remember to bring a valid ID and a list of any medications you're taking. This step usually takes about 10-15 minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-blood-light rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                        <span className="text-blood text-3xl font-bold">2</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">Health Screening</h3>
                      <p className="text-gray-700">
                        A healthcare professional will check your temperature, pulse, blood pressure, and hemoglobin levels. You'll also complete a confidential questionnaire about your health history. This helps ensure that donating is safe for both you and potential recipients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-blood-light rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                        <span className="text-blood text-3xl font-bold">3</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">The Donation</h3>
                      <p className="text-gray-700">
                        You'll be seated comfortably while a sterile needle is inserted into your arm. The actual blood drawing usually takes 8-10 minutes for whole blood. During this time, you can relax, read, or chat with staff. The needle may cause a brief sting, but most donors report minimal discomfort.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-blood-light rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                        <span className="text-blood text-3xl font-bold">4</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">Recovery</h3>
                      <p className="text-gray-700">
                        After donating, you'll rest for about 15 minutes and enjoy refreshments. This allows your body to adjust to the slight decrease in fluid volume. Staff will ensure you're feeling well before you leave. The entire process, from arrival to departure, usually takes about an hour.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">After Your Donation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Drink extra fluids for the next 24-48 hours</li>
                    <li>Avoid strenuous physical activity or heavy lifting for the rest of the day</li>
                    <li>Keep the bandage on for at least 4-6 hours</li>
                    <li>Eat healthy, iron-rich foods like lean meat, beans, and leafy greens</li>
                    <li>If you feel dizzy or unwell, sit or lie down until you feel better</li>
                  </ul>
                </div>
                
                <div className="mt-12 text-center">
                  <Button className="bg-blood hover:bg-blood-dark text-lg">
                    Ready to Donate? Book Now
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="faqs">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">
                      Does donating blood hurt?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Most donors report only a brief pinch when the needle is inserted, similar to a quick pinch. The actual donation process is typically painless. Our trained staff work to ensure your comfort throughout the process.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">
                      How long does it take to donate blood?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      The entire process takes about one hour from start to finish. The actual blood collection takes approximately 8-10 minutes for whole blood donation. Specialized donations like platelets or plasma may take longer, typically 1-2 hours.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">
                      How much blood is taken during donation?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      During a whole blood donation, approximately one pint (about 470 ml) of blood is collected. This represents about 10% of your total blood volume. Your body replaces the fluid portion within 24 hours, while red blood cells are replenished over the next few weeks.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">
                      How often can I donate blood?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Whole blood: Every 56 days (8 weeks), or up to 6 times per year</li>
                        <li>Platelets: Every 7 days, up to 24 times per year</li>
                        <li>Plasma: Every 28 days, up to 13 times per year</li>
                        <li>Double red cells: Every 112 days, up to 3 times per year</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">
                      Can I donate if I'm taking medication?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Many medications do not prevent you from donating blood. Common medications like blood pressure medications, birth control pills, and most over-the-counter medications are generally acceptable. However, some medications may require a waiting period. It's best to bring a list of your medications to your appointment so the staff can determine your eligibility.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-lg font-medium">
                      Is it safe to donate blood during the COVID-19 pandemic?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Blood donation centers have implemented enhanced safety protocols to protect donors and staff during the pandemic. These include increased sanitization, social distancing measures, temperature checks, and staff wearing appropriate PPE. Blood donation is considered an essential activity, and the need for blood remains constant.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-lg font-medium">
                      What happens to my blood after donation?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      After collection, your blood is labeled and tested for blood type and infectious diseases. Whole blood is typically separated into three components: red blood cells, platelets, and plasma. Each component can help different patients with specific needs. Once processed and cleared, your donation is distributed to hospitals and medical facilities for transfusion to patients in need.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-lg font-medium">
                      Can I donate if I have recently received a vaccine?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      For most vaccines, including flu shots and COVID-19 vaccines, there's no deferral period as long as you're feeling well on the day of donation. For some live-attenuated vaccines, a brief waiting period may be required. If you've recently been vaccinated, inform the staff during your pre-donation screening.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-lg font-medium">
                      How will I feel after donating blood?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Most donors feel fine after donating blood. Some may experience slight fatigue, which is normal. To minimize any effects, we recommend drinking extra fluids, avoiding alcohol, eating iron-rich foods, and avoiding strenuous activity for the rest of the day. The refreshments provided after donation help restore fluid and sugar levels.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-10">
                    <AccordionTrigger className="text-lg font-medium">
                      What is the most needed blood type?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      All blood types are needed, but O negative blood (O-) is particularly in demand because it's the universal donor type that can be transfused to patients of any blood type. This is especially crucial in emergency situations when there isn't time to determine a patient's blood type. Type O blood and type B blood are often in short supply.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-12 bg-purple-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Have More Questions?</h3>
                  <p className="text-gray-700 mb-6">
                    If you have additional questions about blood donation, please contact our support team or speak with a healthcare professional at your nearest donation center.
                  </p>
                  <Button className="bg-purple hover:bg-purple-dark">
                    Contact Support
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
