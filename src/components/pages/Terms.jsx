import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function Terms() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base font-semibold leading-7 text-grey-600">More Legal Stuff</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms & Conditions</h1>
            <div className="mt-10 space-y-8 text-base leading-7 text-gray-700">
              <p>
                This is the Terms and Conditions section. Please read these terms and conditions carefully before using our website. By accessing or using our website, you agree to be bound by these terms and conditions.
              </p>
              
              <div>
                <h2 className="font-semibold mb-2">1. Use of the Website</h2>
                <p>
                  - You must be at least 18 years old to use this website.<br/>
                  - You are responsible for ensuring the accuracy of the information you provide on the website.<br/>
                  - You agree not to use the website for any illegal or unauthorized purposes.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">2. Intellectual Property</h2>
                <p>
                  - The content on this website, including text, graphics, logos, and images, is the property of our company and is protected by intellectual property laws.<br/>
                  - You may not reproduce, distribute, modify, or create derivative works of the content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">3. Limitation of Liability</h2>
                <p>
                  - We strive to provide accurate and up-to-date information on our website, but we do not guarantee its completeness or accuracy.<br/>
                  - We are not liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">4. Links to Third-Party Websites</h2>
                <p>
                  - Our website may contain links to third-party websites that are not owned or controlled by us.<br/>
                  - We are not responsible for the content or privacy practices of these third-party websites.
                </p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">5. Governing Law</h2>
                <p>
                  - These terms and conditions are governed by and construed in accordance with the laws of The United States Of America.<br/>
                  - Any disputes arising out of or relating to these terms and conditions shall be resolved in the courts of The United States Of America.
                </p>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                Please note that we may change these terms and conditions at any time without notice. Any changes will be posted on this page. If you have any questions, please contact us at info@jcoatx.com
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
                  We are not responsible for the content or privacy practices of these third-party websites.
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