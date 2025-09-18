import React from 'react';
import Modal from 'react-modal';
// Using public path instead of import to avoid build issues

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
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

const AnniversaryModal = ({ isOpen, onClose }) => {
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
        <div className="mb-4">
          <img 
            src="/assets/Logo.png"
            alt="Jameson & Co Logo"
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: '150px', height: 'auto' }}
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">🎉 Three Year Anniversary! 🎉</h2>
        
        <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-4 border-2 border-red-200">
          <h3 className="text-2xl font-bold text-red-700 mb-2">October 4th Celebration</h3>
          <p className="text-xl text-gray-700 mb-4">
            Join us for nail trims and spin the wheel to win discounts and prizes!
          </p>
          
          <div className="bg-white p-4 rounded-lg space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-700">📅</span>
              <p className="font-semibold">October 4th</p>
              <span className="text-gray-500">|</span>
              <p className="font-semibold">10:30 AM - 1:30 PM</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-700">📍</span>
              <p className="text-sm text-gray-600">820 Farm to Market 1626, Austin, TX</p>
            </div>
          </div>
        </div>

        <div className="text-left mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">What's Happening:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✂️</span>
              <p><strong>Nail Trims:</strong> Professional nail care for your pup</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎡</span>
              <p><strong>Spin the Wheel:</strong> Every spin can win discounts and prizes!</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎁</span>
              <p><strong>Anniversary Specials:</strong> Exclusive deals just for this day</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🐾</span>
              <p><strong>Community Fun:</strong> Meet other dog parents and celebrate with us</p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Celebrate With Us?</h4>
          <div className="text-left">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Three years of trusted professional grooming</li>
              <li>Experienced team that treats dogs like family</li>
              <li>Walk-ins welcome during celebration hours</li>
              <li>First come, first served on October 4th</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mb-6 border-l-4 border-red-400">
          <p className="text-red-700 font-medium">
            🎊 Thank you for three amazing years! We couldn't have done it without our incredible community of dog parents.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Info:</h4>
          <div className="space-y-2 text-gray-700">
            <p>📞 Call or Text: <a href="tel:737-263-7002" className="text-blue-700 hover:text-blue-900 font-semibold">(737)-263-7002</a></p>
            <p>📧 Email: <a href="mailto:info@jcoatx.com" className="text-blue-700 hover:text-blue-900 font-semibold">info@jcoatx.com</a></p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-4 bg-red-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default AnniversaryModal;
