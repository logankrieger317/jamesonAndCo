import React, { useState } from 'react';
import Modal from 'react-modal';
import dogDayPhoto from '../../assets/dogDayPhoto.png';

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

interface DogDayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DogDayModal: React.FC<DogDayModalProps> = ({ isOpen, onClose }) => {
  const [imageExpanded, setImageExpanded] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        ariaHideApp={false}
        className="z-[1000] bg-white"
        overlayClassName="z-[999]"
      >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">🎉 We'll Be There! 🐕</h2>
        
        <div className="mb-3 flex justify-center">
          <img 
            src={dogDayPhoto}
            alt="National Spoil Your Dog Day Event"
            className="w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-75 transition-opacity border-2 border-gray-200"
            onClick={() => setImageExpanded(true)}
            title="Click to view larger"
          />
        </div>
        <p className="text-xs text-gray-500 mb-3 text-center">Click image to enlarge</p>
        
        <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-4 border-2 border-red-200">
          <h3 className="text-2xl font-bold mb-3 text-red-700">National Spoil Your Dog Day</h3>
          
          <div className="text-left space-y-3 mb-4">
            <div className="flex items-center text-lg">
              <span className="text-red-600 font-semibold mr-2">📅 Date:</span>
              <span className="font-bold">Sunday, August 10th</span>
            </div>
            <div className="flex items-center text-lg">
              <span className="text-red-600 font-semibold mr-2">⏰ Time:</span>
              <span className="font-bold">1:00 PM Start</span>
            </div>
            <div className="flex items-start text-lg">
              <span className="text-red-600 font-semibold mr-2">📍 Location:</span>
              <span className="font-bold">South Austin Beer Garden<br/>10700 Menchaca Road<br/>Austin, TX 78748</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-red-200 mb-4">
            <h4 className="text-xl font-bold mb-3 text-red-700">🎪 Event Highlights:</h4>
            <ul className="text-left space-y-2">
              <li className="flex items-center"><span className="text-red-600 mr-2">🍖</span> Treats for you & your furry friend</li>
              <li className="flex items-center"><span className="text-red-600 mr-2">💦</span> Splash zone for pups</li>
              <li className="flex items-center"><span className="text-red-600 mr-2">🛍️</span> Amazing vendors</li>
              <li className="flex items-center"><span className="text-red-600 mr-2">🎁</span> Free doggie bags</li>
              <li className="flex items-center"><span className="text-red-600 mr-2">🎟️</span> Free raffle for pups</li>
              <li className="flex items-center"><span className="text-red-600 mr-2">❤️</span> Adoptable dogs onsite</li>
            </ul>
          </div>

          <div className="bg-red-100 p-3 rounded-lg">
            <p className="text-lg font-semibold text-red-800 mb-2">
              🐾 Look for the Jameson & Co booth!
            </p>
            <p className="text-red-700">
              We'll be there to meet you and your pups, answer grooming questions, and share special event offers!
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-3">
            Can't make it? No worries! You can still spoil your dog with our premium grooming services.
          </p>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Call/Text:</strong> (737) 263-7002</p>
            <p><strong>Email:</strong> info@jcoatx.com</p>
            <p><strong>Visit:</strong> 820 Farm to Market 1626, Austin, TX 78748</p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-lg"
        >
          See You There! 🎉
        </button>
      </div>
    </Modal>

    {/* Expanded Image Modal */}
    {imageExpanded && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[1100] p-4"
        onClick={() => setImageExpanded(false)}
      >
        <div className="relative max-w-4xl max-h-full">
          <img 
            src={dogDayPhoto}
            alt="National Spoil Your Dog Day Event - Full Size"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setImageExpanded(false)}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            title="Close"
          >
            ✕
          </button>
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
            Click anywhere to close
          </p>
        </div>
      </div>
    )}
    </>
  );
};

export default DogDayModal; 