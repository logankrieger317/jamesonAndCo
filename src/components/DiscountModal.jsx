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
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">🌼 Spring Deshedding Special! 🌼</h2>
        <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-4">
          <h3 className="text-2xl font-bold text-red-600 mb-2">$3 OFF</h3>
          <p className="text-xl font-semibold text-gray-800 mb-2">Professional Deshedding Treatment</p>
          <p className="text-gray-600 mb-4">
            Combat spring shedding with our specialized treatment!
          </p>
          <div className="bg-white p-3 md:p-4 rounded-lg mt-2">
            <p className="text-red-600 font-semibold mb-2">✨ Spring Coat Reset Special!</p>
            <p className="text-gray-700">
              As temperatures rise and winter coats shed, treat your pup to our professional deshedding service. Perfect for double-coated breeds!
            </p>
          </div>
        </div>
        
        <div className="text-left mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Treatment Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Reduces shedding by up to 80%</li>
            <li>Helps prevent matting and skin irritation</li>
            <li>Keeps your pup cool and comfortable</li>
            <li>Leaves coat soft, shiny, and fresh-smelling</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <p className="text-red-700 font-medium">
            Limited time offer for April only!
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-red-50 p-3 md:p-4 rounded-lg">
            <p className="text-red-800 font-medium">
              💡 Pro Tip: Perfect for double-coated breeds like huskies, shepherds, labs, and corgis!
            </p>
          </div>
          <p className="text-gray-600">
            Say goodbye to excessive shedding - book your appointment today!
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600">
              Call or Text: <a href="tel:737-263-7002" className="text-red-600 hover:text-red-800">(737)-263-7002</a>
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:info@jcoatx.com" className="text-red-600 hover:text-red-800">info@jcoatx.com</a>
            </p>
            <p className="text-sm text-gray-500">
              Just mention "Spring Deshedding Special" when booking!
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
