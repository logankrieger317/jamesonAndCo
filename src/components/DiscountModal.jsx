import React, { useEffect } from 'react';
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

const DiscountModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">🌿 Spring Special Offer! 🌿</h2>
        <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-4">
          <h3 className="text-2xl font-bold text-red-600 mb-2">25% OFF</h3>
          <p className="text-xl font-semibold text-gray-800 mb-2">Tea Tree Conditioner</p>
          <p className="text-gray-600 mb-4">
            Perfect for soothing dry, itchy skin during seasonal changes!
          </p>
          <div className="bg-white p-3 md:p-4 rounded-lg mt-2">
            <p className="text-red-600 font-semibold mb-2">✨ Add to Any Grooming Service!</p>
            <p className="text-gray-700">
              Enhance your pup's grooming experience by adding our premium tea tree conditioner treatment. Just mention this offer when booking or during check-in!
            </p>
            <p className="text-sm text-gray-600 mt-2 italic">
              Regular price: $15 • With discount: $11.25
            </p>
          </div>
        </div>
        
        <div className="text-left mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Hydrates and soothes dry, itchy skin</li>
            <li>Reduces dandruff and restores coat health</li>
            <li>Natural tea tree oil properties</li>
            <li>Fresh, clean scent</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-700 font-medium">
            Limited time offer for March only!
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 p-3 md:p-4 rounded-lg">
            <p className="text-green-800 font-medium">
              💡 Pro Tip: Schedule a grooming appointment and add the tea tree conditioner treatment for the ultimate spring refresh!
            </p>
          </div>
          <p className="text-gray-600">
            Book your grooming appointment today and take advantage of this special offer!
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600">
              Call or Text: <a href="tel:737-263-7002" className="text-red-600 hover:text-red-800">(737)-263-7002</a>
            </p>
            <p className="text-sm text-gray-500">
              Just mention "Spring Tea Tree Special" when booking!
            </p>
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

export default DiscountModal;
