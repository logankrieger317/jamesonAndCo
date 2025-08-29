import React from 'react';
import Modal from 'react-modal';
import DogtoberFestImage from '../../assets/DogtoberFest.png';

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

const DogtoberFestModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">DogtoberFest</h2>
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4">
          <div className="mb-4">
            <img 
              src={DogtoberFestImage}
              style={{ maxWidth: '100%', height: 'auto' }} 
              alt="DogtoberFest Event" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">"Never Met a Stranger"</h3>
          <p className="text-xl text-gray-700 mb-4">
            Join us at DogtoberFest! We'll be there representing Jameson & Company Dog Grooming
          </p>
          
          <div className="bg-white p-4 rounded-lg space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-700">📅</span>
              <p className="font-semibold">September 5</p>
              <span className="text-gray-500">|</span>
              <p className="font-semibold">4:00 PM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="text-left mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">We'll Be There With:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">🐾</span>
              <p>Information about our grooming services</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎁</span>
              <p>Special offers and giveaways</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">❤️</span>
              <p>Support for adoptable pups from Love A Bull</p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Event Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Adoptable pups from Love A Bull</li>
                <li>Local vendors including:</li>
                <li className="ml-4">• Furever Grateful</li>
                <li className="ml-4">• XOLO Sarapes</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Rubbabelly Dog Treats</li>
                <li>Jameson & Co Grooming (that's us!)</li>
                <li>Family-friendly activities</li>
                <li>Great food and drinks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-400">
          <p className="text-gray-700 font-medium">
            🍺 Come say hi and enjoy some refreshments while supporting a great cause!
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

export default DogtoberFestModal;
