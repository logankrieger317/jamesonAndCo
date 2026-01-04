import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TechnicalDifficultiesImage from '../../assets/JamesonTechnicalDifficulties.png';

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

const BookingUpdateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show modal on first load unless the modal was closed
  useEffect(() => {
    const modalClosed = localStorage.getItem('bookingUpdateModalClosed');
    if (!modalClosed) {
      setIsOpen(true);
    }
  }, []);

  // Listen for page refresh or close and clear localStorage
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('bookingUpdateModalClosed');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('bookingUpdateModalClosed', 'true');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      ariaHideApp={false}
      className="z-[1000] bg-white"
      overlayClassName="z-[999]"
    >
      <div className="text-center">
        <div className="mb-4">
          <img 
            src={TechnicalDifficultiesImage}
            alt="Technical Maintenance Notice"
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        
        <div className="text-left space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We're currently updating our booking system as we transition to our new breed + weight pricing structure to make scheduling clearer and easier for everyone.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            During this short adjustment period, online booking may be temporarily unavailable. We apologize for any inconvenience and truly appreciate your patience while we make these improvements.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            If you'd like to request an appointment in the meantime, please email us at
          </p>
          
          <p className="text-gray-700 leading-relaxed text-center">
            <a 
              href="mailto:Info@jcoatx.com" 
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              📧 Info@jcoatx.com
            </a>
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            and we'll be happy to help.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Thank you for your understanding and for trusting us with your dogs — we'll be back up and running soon.
          </p>
          
          <p className="text-gray-700 leading-relaxed font-semibold mt-4">
            — Jameson & Company Dog Grooming
          </p>
        </div>

        <button 
          onClick={handleClose}
          className="mt-6 bg-red-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default BookingUpdateModal;
