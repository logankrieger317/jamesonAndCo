import React from 'react';

const promotions = [
  {
    id: 1,
    title: "New Client Special",
    description: "First-time clients receive 20% off their first full grooming service",
    terms: "Valid for new clients only. Cannot be combined with other offers.",
    validUntil: "No expiration",
    image: "/images/new-client.jpg"
  },
  {
    id: 2,
    title: "Referral Rewards",
    description: "Refer a friend and you both get $10 off your next grooming service",
    terms: "Referral must be a new client. Discount applies to next visit only.",
    validUntil: "Ongoing promotion",
    image: "/images/referral.jpg"
  },
  {
    id: 3,
    title: "Multiple Pet Discount",
    description: "Save 10% when you bring in multiple pets for grooming on the same day",
    terms: "Must be scheduled for the same day. Discount applies to all pets in the same visit.",
    validUntil: "Ongoing promotion",
    image: "/images/multiple-pets.jpg"
  }
];

export default function Sales() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Current Promotions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Take advantage of our special offers and save on our premium grooming services
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="flex flex-col items-start bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full aspect-[16/9] relative bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime={promo.validUntil} className="text-gray-500">
                    Valid until: {promo.validUntil}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {promo.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {promo.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">
                    {promo.terms}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gray-50 py-10 px-6 sm:py-16 sm:px-12">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Ready to Schedule?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
                Contact us today to take advantage of these special offers and give your pet the pampering they deserve.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="tel:+1234567890"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Call Now
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
