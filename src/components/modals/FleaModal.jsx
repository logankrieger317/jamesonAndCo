import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    maxHeight: '90vh',
    width: '90%',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    position: 'relative',
    backgroundColor: 'white',
    overflow: 'auto'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 999,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
};

const FleaModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
      className="z-[1000] bg-white"
      overlayClassName="z-[999]"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">🦟 Flea Alert: Humidity Season is Here! 🌧️</h2>
        
        <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-4">
          <h3 className="text-xl font-bold text-red-700 mb-2">Hey JCo Pack! 👋</h3>
          <p className="text-gray-800 mb-4">
            Thanks to all this wet and humid weather, we've seen a big spike in fleas showing up during grooming appointments. Even pups who are mostly indoors can get hit this time of year!
          </p>
        </div>

        <div className="text-left mb-4">
          <h4 className="text-lg font-semibold text-red-700 mb-2">🦟 Why the Flea Boom?</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Humidity = flea paradise. Moisture speeds up their life cycle</li>
            <li>Grassy walks & shared spaces make it easy for fleas to hitch a ride</li>
            <li>Even well-protected pups can bring them home from parks or visits</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-4">
          <h3 className="text-xl font-bold text-red-700 mb-2">🛁 What We're Doing</h3>
          <p className="text-gray-800 mb-3">
            At Jameson & Co., we offer an effective <strong>flea & tick shampoo treatment</strong> that can be added to your appointment. It's gentle on your pup's skin, tough on those pesky parasites, and helps protect your home from an outbreak.
          </p>
          <div className="bg-white p-3 md:p-4 rounded-lg">
            <p className="text-red-700 font-semibold">
              Just let us know at check-in, or reply to this email with: <br/>
              <span className="text-red-800 font-bold">"Add flea shampoo for [Dog's Name]!"</span>
            </p>
          </div>
        </div>

        <div className="text-left mb-4">
          <h4 className="text-lg font-semibold text-red-700 mb-2">🏠 What You Can Do at Home</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Check behind the ears, near the tail, and belly for flea dirt or bites</li>
            <li>Keep grass trimmed and avoid tall, damp areas</li>
            <li>Stay consistent with your preferred flea prevention—now's the time to double-check it's working</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <p className="text-red-700 font-medium mb-2">
            📚 Want to Learn More?
          </p>
          <p className="text-gray-700">
            We've got tips and info on flea control over on our blog at <br/>
            <a href="https://www.jcoatx.com/blog" className="text-red-700 hover:text-red-900 font-semibold underline">
              👉 www.jcoatx.com/blog
            </a>
          </p>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <div className="flex-shrink-0">
              <span className="text-yellow-600 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-yellow-800 font-bold text-lg">
                IMPORTANT NOTICE
              </p>
            </div>
          </div>
          <p className="text-yellow-800 font-semibold">
            🚐 The grooming truck will be <span className="font-bold text-red-700">CLOSED</span> on July 12th and 13th.
          </p>
          <p className="text-yellow-700 text-sm mt-1">
            Please plan your flea treatments accordingly and book before or after these dates.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-red-50 p-3 md:p-4 rounded-lg">
            <p className="text-red-800 font-medium">
              💡 Pro Tip: Book your flea treatment now to protect your pup and your home!
            </p>
          </div>
          <p className="text-gray-600">
            Let's keep your pup happy, healthy, and itch-free all summer long! 🐶🛁
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600">
              Call or Text: <a href="tel:737-263-7002" className="text-red-700 hover:text-red-900 font-semibold">(737)-263-7002</a>
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:info@jcoatx.com" className="text-red-700 hover:text-red-900 font-semibold">info@jcoatx.com</a>
            </p>
            <p className="text-sm text-gray-500">
              Just mention "flea shampoo treatment" when booking!
            </p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm mb-3">
            🐾 Warmly, <br/>
            <span className="font-semibold text-red-700">The Jameson & Co Crew</span>
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-4 bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-red-800 transition-colors font-semibold"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FleaModal; 