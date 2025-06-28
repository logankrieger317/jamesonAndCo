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

const JulyFreedomModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">🎆 July "Freedom" Special! 🎆</h2>
        <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">10% OFF</h3>
          <p className="text-xl font-semibold text-gray-800 mb-2">Any Service Booked in July</p>
          <p className="text-gray-600 mb-4">
            Book for July, August, or September and save!
          </p>
          <div className="bg-white p-3 md:p-4 rounded-lg mt-2">
            <p className="text-blue-700 font-semibold mb-2">✨ How It Works</p>
            <div className="text-gray-700 text-left space-y-2">
              <p>• Book any service in July for July, August, or September—get 10% off!</p>
              <p>• <span className="font-semibold">Refer a friend: Once your referred client completes a service in July, August, or September, you get 10% off your next appointment!</span></p>
              <p>• Military, veterans, and first responders (with ID): automatic 10% off any service, plus an extra 10% for every referral!</p>
            </div>
          </div>
        </div>
        <div className="text-left mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Why Book with Jameson & Co?</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Professional, caring service for every pup</li>
            <li>Experienced groomers who treat dogs like family</li>
            <li>Full range of services available</li>
            <li>Clean, safe, stress-free environment</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-blue-700 font-medium">
            Limited time offer for July only!
          </p>
          <p className="text-blue-700 text-sm mt-1">
            Valid for all services. See <a href="/terms" className="underline hover:text-blue-900">Terms & Conditions</a> for details.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              💡 Pro Tip: Referring friends helps everyone save and keeps pups looking their best!
            </p>
          </div>
          <p className="text-gray-600">
            Celebrate freedom, community, and great grooming this July!
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600">
              Call or Text: <a href="tel:737-263-7002" className="text-blue-700 hover:text-blue-900">(737)-263-7002</a>
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:info@jcoatx.com" className="text-blue-700 hover:text-blue-900">info@jcoatx.com</a>
            </p>
            <p className="text-sm text-gray-500">
              Just mention "July Freedom Special" and your friend's name when booking!
            </p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="mt-4 bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default JulyFreedomModal; 