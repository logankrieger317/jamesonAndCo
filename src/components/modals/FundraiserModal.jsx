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

const FundraiserModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Modern Roots Movin' Mutts and Meows</h2>
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4">
          <div className="mb-4">
            <img 
              src="https://res.cloudinary.com/dfszr2lob/image/upload/v1747348392/ModernRootsFundraiser_ym2osi.jpg"
              style={{ maxWidth: '100%', height: 'auto' }} 
              alt="Modern Roots PAWS Fundraiser" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Come Together and Spread the Love!</h3>
          <p className="text-xl text-gray-700 mb-4">
            Join us for a special event benefiting PAWS Shelter of Central Texas
          </p>
          
          <div className="bg-white p-4 rounded-lg space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-700">📅</span>
              <p className="font-semibold">May 17, 2025</p>
              <span className="text-gray-500">|</span>
              <p className="font-semibold">12:00 PM - 3:00 PM</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gray-700">📍</span>
              <p className="font-semibold ml-2">Willie's Joint Bar & Grill</p>
            </div>
          </div>
        </div>

        <div className="text-left mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Event Details:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">🐾</span>
              <p>Meet adoptable friends from PAWS</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎵</span>
              <p>Live music by Jamison Eddleman</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎁</span>
              <p>Raffle entry for gift baskets included with admission</p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">PAWS Needs List:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h5 className="font-semibold mb-2">Purina ONE:</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Dog wet and dry food</li>
                <li>Sensitive skin and coat kibble</li>
                <li>Hydrolyzed protein kibble</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Kitten and Puppy:</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Purina ONE wet and dry food</li>
                <li>Kitten and puppy formula</li>
                <li>Heating pads</li>
                <li>Cat litter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Entry Fee:</h4>
          <p className="text-gray-700">
            Bring an item from the PAWS needs list or make a monetary donation
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-4 bg-gray-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FundraiserModal;
