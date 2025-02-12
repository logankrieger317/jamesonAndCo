import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base font-semibold leading-7 text-grey-600">Your Privacy Matters To Us!</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-700">
              <div>
                <h2 className="font-semibold mb-2">Introduction</h2>
                <p>
                  This privacy policy outlines how we collect, use, and protect your personal information when you use our website. We are committed to ensuring the privacy and security of your information.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Information Collection</h2>
                <p>
                  We may collect personal information such as your name, email address, and contact details when you interact with our website. This information is collected with your consent and is used to provide you with the requested services and improve your experience.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Use of Information</h2>
                <p>
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Communicate with you</li>
                  <li>Provide customer support</li>
                  <li>Improve our services</li>
                  <li>Send you relevant updates and promotional materials</li>
                </ul>
                <p className="mt-2">
                  We do not share your personal information with third parties unless required by law or with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Data Security</h2>
                <p>
                  We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Contact Information</h2>
                <p>
                  If you have any questions about our privacy policy or how we handle your personal information, please contact us at info@jcoatx.com.
                </p>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                We reserve the right to update this privacy policy at any time. Any changes will be posted on this page, and your continued use of our website constitutes acceptance of these changes.
              </p>
            </div>

            <div className="mt-10 flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  We will always do our very best to protect your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}