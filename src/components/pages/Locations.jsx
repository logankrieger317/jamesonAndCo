import React from "react";
import { Helmet } from "react-helmet";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Dog Grooming in Austin, Kyle & Buda, Texas | Jameson & Co - Professional Pet Services</title>
        <meta 
          name="description" 
          content="Professional dog grooming services in Austin, Kyle and Buda, Texas. Serving South Austin, Plum Creek, Steeplechase, Garlic Creek, Whispering Hollow and surrounding areas. Expert grooming for all breeds with convenient location on FM1626." 
        />
        <meta 
          name="keywords" 
          content="dog grooming Austin TX, dog grooming Kyle TX, dog grooming Buda TX, South Austin dog groomer, Plum Creek dog groomer, Steeplechase pet grooming, Garlic Creek dog services, Whispering Hollow pet care, Kyle Texas dog grooming, Buda Texas pet spa, FM1626 dog groomer, Austin area dog grooming" 
        />
        <meta property="og:title" content="Dog Grooming in Austin, Kyle & Buda, Texas | Jameson & Co" />
        <meta property="og:description" content="Professional dog grooming services in Austin, Kyle and Buda, Texas. Serving South Austin, Plum Creek, Steeplechase, Garlic Creek, Whispering Hollow and surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jamesonandco.com/locations" />
      </Helmet>
      
      <Header />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dog Grooming Services in Austin, Kyle & Buda, Texas
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conveniently located on the border of Austin, Kyle, and Buda to serve the Greater Austin area with professional dog grooming services.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Austin Section */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Austin, Texas Dog Grooming</h2>
              <p className="text-gray-600 mb-6">
                Serving South Austin and surrounding areas with professional dog grooming services. Our location on FM1626 provides easy access for Austin residents.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas We Serve in Austin:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• South Austin</li>
                <li>• Southwest Austin</li>
                <li>• Oak Hill</li>
                <li>• Sunset Valley</li>
                <li>• Manchaca</li>
                <li>• Onion Creek</li>
                <li>• Circle C Ranch</li>
                <li>• Shady Hollow</li>
              </ul>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Distance from Austin:</strong> 5-15 minutes from most South Austin neighborhoods
                </p>
              </div>
            </div>

            {/* Kyle Section */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kyle, Texas Dog Grooming</h2>
              <p className="text-gray-600 mb-6">
                Serving Kyle and surrounding communities with professional dog grooming services. Our convenient location makes it easy for Kyle residents to access quality pet care.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas We Serve in Kyle:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Plum Creek</li>
                <li>• Steeplechase</li>
                <li>• Kyle Crossing</li>
                <li>• Indian Springs</li>
                <li>• Downtown Kyle</li>
                <li>• Kyle Parkway</li>
              </ul>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Distance from Kyle:</strong> Approximately 15-20 minutes from most Kyle neighborhoods
                </p>
              </div>
            </div>

            {/* Buda Section */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Buda, Texas Dog Grooming</h2>
              <p className="text-gray-600 mb-6">
                Professional dog grooming services for Buda residents. Our location provides easy access for all Buda pet owners seeking quality grooming care.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas We Serve in Buda:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Garlic Creek</li>
                <li>• Whispering Hollow</li>
                <li>• Sunfield</li>
                <li>• Stagecoach</li>
                <li>• Downtown Buda</li>
                <li>• Buda Mill & Grain</li>
              </ul>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Distance from Buda:</strong> Approximately 10-15 minutes from most Buda neighborhoods
                </p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address & Contact</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Address:</strong><br />
                  820 Farm to Market 1626<br />
                  Austin, TX 78748</p>
                  
                  <p><strong>Phone:</strong> (737) 263-7002</p>
                  <p><strong>Email:</strong> info@jcoatx.com</p>
                  
                  <p><strong>Hours:</strong><br />
                  Monday - Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Jameson & Co?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Conveniently located on the border of Austin, Kyle, and Buda</li>
                  <li>• Professional grooming for all breeds and sizes</li>
                  <li>• Stress-free environment for your pets</li>
                  <li>• Experienced groomer with over 10 years experience</li>
                  <li>• Competitive pricing with transparent service packages</li>
                  <li>• Easy online booking system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Book Your Pet's Grooming?
            </h2>
            <p className="text-gray-600 mb-8">
              Join our satisfied customers from Austin, Kyle, Buda, and the surrounding areas
            </p>
            <a
              href="https://booking.moego.pet/ol/JamesonandCompanyDogGrooming/book"
              className="inline-flex items-center rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Book Appointment Now
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Locations; 