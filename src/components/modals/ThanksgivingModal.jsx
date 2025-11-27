import React from 'react';
import Modal from 'react-modal';
import ThanksgivingImage from '../../assets/Thankful Pup in Turkey Costume.png';

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

const ThanksgivingModal = ({ isOpen, onClose }) => {
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
            src={ThanksgivingImage}
            alt="Thankful Pup in Turkey Costume"
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">Happy Thanksgiving from Jameson & Co. 🦃🐾</h2>
        
        <div className="bg-orange-50 p-4 md:p-6 rounded-lg mb-4 border-2 border-orange-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Closed on Thanksgiving Day</h3>
          <p className="text-gray-700 leading-relaxed">
            We'll be closed on Thanksgiving Day so our team can spend the holiday with loved ones — both two-legged and four-legged.
          </p>
        </div>

        <div className="text-left mb-6 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
          <p className="text-gray-700 leading-relaxed mb-4">
            As we celebrate the season, we want to express our sincere gratitude. For three wonderful years, you've trusted us with your pets, welcomed us into your homes, and supported our small business in ways that truly mean the world to us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We're thankful for every wagging tail, every familiar face, and every family who has become part of our grooming community.
          </p>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg mb-6 border-2 border-orange-300">
          <p className="text-orange-900 font-semibold text-lg">
            From all of us at Jameson & Company, we wish you and your pets a warm, joyful, and safe Thanksgiving. 🍂
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-4 bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ThanksgivingModal;

