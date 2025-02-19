import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 'pricing', label: '💰 Pricing', question: 'I would like to know about pricing' },
  { id: 'services', label: '✂️ Services', question: 'What services do you offer?' },
  { id: 'booking', label: '📅 Booking', question: 'How can I book an appointment?' },
  { id: 'location', label: '📍 Location', question: 'Where are you located?' },
  { id: 'hours', label: '🕒 Hours', question: 'What are your operating hours?' },
  { id: 'requirements', label: '📋 Requirements', question: 'What are the requirements for grooming?' },
  { id: 'cancellation', label: '❌ Cancellation', question: 'What is your cancellation policy?' },
  { id: 'contact', label: '📞 Contact', question: 'How can I contact you?' },
];

const dogSizes = [
  { id: 'xs', label: '🐶 Extra Small', description: '0-13 lbs', range: '0-13' },
  { id: 'small', label: '🐶 Small', description: '14-30 lbs', range: '14-30' },
  { id: 'medium', label: '🐶 Medium', description: '31-50 lbs', range: '31-50' },
  { id: 'large', label: '🐶 Large', description: '51-70 lbs', range: '51-70' },
  { id: 'xl', label: '🐶 Extra Large', description: '71-90 lbs', range: '71-90' },
  { id: 'xxl', label: '🐶 XXL', description: '91-120 lbs', range: '91-120' },
  { id: 'xxxl', label: '🐶 XXXL', description: '121+ lbs', range: '121+' },
];

const hairLengths = [
  { id: 'short', label: '🐶 Short Hair', description: 'Short, smooth coat' },
  { id: 'long', label: '🐶 Long Hair', description: 'Long, flowing coat' },
  { id: 'double', label: '🐶 Double/Curly', description: 'Thick or curly coat' },
];

const pricingData = {
  bath: {
    xs: { short: 35, long: 39, double: 41 },
    small: { short: 42, long: 43, double: 45 },
    medium: { short: 47, long: 48, double: 51 },
    large: { short: 52, long: 53, double: 53 },
    xl: { short: 57, long: 59, double: 62 },
    xxl: { short: 64, long: 64, double: 68 },
    xxxl: { short: 84, long: 84, double: 84 }
  },
  groom: {
    xs: { long: 78, double: 84 },
    small: { long: 88, double: 93 },
    medium: { long: 98, double: 103 },
    large: { long: 108, double: 114 },
    xl: { long: 121, double: 128 },
    xxl: { long: 134, double: 141 },
    xxxl: { long: 175, double: 175 }
  },
  fff: {
    xs: { long: 35, double: 35 },
    small: { long: 35, double: 35 },
    medium: { long: 35, double: 35 },
    large: { long: 35, double: 35 },
    xl: { long: 35, double: 35 },
    xxl: { long: 35, double: 35 },
    xxxl: { long: 35, double: 35 }
  }
};

const commonQuestions = {
  "booking": "You can book an appointment through our online booking system.",
  "services": `Here are our grooming services:

🛁 Bath Service - Starting at $35
• Full bath with premium shampoo
• Blow dry and brush out
• Nail trim and filing
• Ear cleaning
• Gland expression
• Sanitary trim
• Light dematting (if needed)

✂️ Full Grooming - Starting at $78
• Everything in Bath Service, plus:
• Custom haircut to your specifications
• Face trimming
• Paw pad trimming
• Full body styling
• Extensive dematting (if needed)
• Breed-specific cuts available

🐶 Feet, Face & Fanny (FFF) - Starting at $35
• Quick touch-up service
• Face trimming
• Paw pad trimming
• Sanitary area trimming
• Perfect between full grooms

💅 Walk-In Services
• Nail trim only: $18
• Nail trim with dremel: $22
• Quick ear cleaning: $15

Note: Prices vary based on dog size, coat type, and condition. For accurate pricing, please select the 'Pricing' category and specify your dog's size and coat type.

All services include:
• Complimentary bandana or bow
• Fresh breath spray
• Pet-safe cologne
• Lots of love and treats! 🦴`,
  "location": "We are located at 820 Farm To Market 1626, Austin, TX 78748.",
  "contact": "You can reach us at (737) 263-7002 or email us at info@jcoatx.com",
  "hours": "We are open 7 days a week from 10am to 6pm with appointments and walk-in services available. Book an appointment now to see availability and customized pricing!",
  "requirements": "All pets must be up to date on their vaccinations. Please have your pet ready for their appointment time.",
  "cancellation": "Please provide at least 24 hours notice for cancellations to avoid any cancellation fees."
};

const serviceTypes = [
  { id: 'bath', label: '🛁 Bath Service', 
    description: `Full Bath Service - Starting at $35
• Full bath with premium shampoo
• Blow dry and brush out
• Nail trim and filing
• Ear cleaning
• Gland expression
• Sanitary trim
• Light dematting (if needed)

Each bath service includes a complimentary bandana or bow, fresh breath spray, and pet-safe cologne! 🦴` 
  },
  { id: 'groom', label: '✂️ Full Grooming',
    description: `Full Grooming Service - Starting at $78
• Everything in Bath Service, plus:
• Custom haircut to your specifications
• Face trimming
• Paw pad trimming
• Full body styling
• Extensive dematting (if needed)
• Breed-specific cuts available

Each grooming service includes a complimentary bandana or bow, fresh breath spray, and pet-safe cologne! 🦴`
  },
  { id: 'fff', label: '🐶 Feet, Face & Fanny (FFF)',
    description: `Quick Touch-Up Service - Starting at $35
• Face trimming
• Paw pad trimming
• Sanitary area trimming
• Perfect between full grooms

A great option to keep your pup fresh between full grooming appointments!`
  },
  { id: 'walkin', label: '💅 Walk-In Services',
    description: `Individual Services:
• Nail trim only: $18
• Nail trim with dremel: $22
• Quick ear cleaning: $15

No appointment needed for these quick services!`
  }
];

const ChatAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '👋 Welcome to Jameson & Company Dog Grooming! How can I help you today?'
    },
    {
      type: 'bot',
      text: 'Please select a category to get started:',
      isCategories: true
    }
  ]);
  const [selectedSize, setSelectedSize] = useState(null);
  const chatContainerRef = useRef(null);

  const scrollToLatestMessage = () => {
    if (chatContainerRef.current) {
      const messages = chatContainerRef.current.getElementsByClassName('message-item');
      if (messages.length > 0) {
        const lastMessage = messages[messages.length - 1];
        const containerTop = chatContainerRef.current.offsetTop;
        const messageTop = lastMessage.offsetTop;
        const offset = 100; // Adjust this value to control how much of the previous message is visible
        chatContainerRef.current.scrollTop = messageTop - containerTop - offset;
      }
    }
  };

  useEffect(() => {
    setTimeout(scrollToLatestMessage, 100);
  }, [messages]);

  const handleClickOutside = (event) => {
    if (event.target.className.includes("modal")) {
      setIsVisible(false);
    }
  };

  const formatPricing = (size, hairType) => {
    const prices = {
      bath: pricingData.bath[size.id]?.[hairType.id],
      groom: pricingData.groom[size.id]?.[hairType.id],
      fff: pricingData.fff[size.id]?.[hairType.id]
    };

    let servicesText = `Pricing for ${size.label} (${size.range} lbs) with ${hairType.description} starts at:\n\n`;

    // Only show bath service if available
    if (prices.bath) {
      servicesText += `🛁 Bath Only: $${prices.bath}\n`;
    }

    // Only show grooming service if available
    if (prices.groom) {
      servicesText += `✂️ Full Grooming: $${prices.groom}\n`;
    }

    // Only show FFF service if available
    if (prices.fff) {
      servicesText += `🐶 Feet, Face & Fanny: $${prices.fff}\n`;
    }

    // Only show the included services if at least one service is available
    if (prices.bath || prices.groom || prices.fff) {
      servicesText += `\nAll services include:\n` +
                     `• Nail trim and filing\n` +
                     `• Ear cleaning\n` +
                     `• Brush out\n` +
                     `• Gland expression\n\n`;
    }

    servicesText += `Note: All prices subject to 8.25% tax\n` +
                    `For nail trim only service: $18`;

    return servicesText;
  };

  const handleCategoryClick = (category) => {
    setMessages([...messages, { type: 'user', text: category.question }]);

    if (category.id === 'pricing') {
      setMessages(prev => [...prev, 
        { type: 'bot', text: 'Please select your dog\'s size:' },
        { type: 'bot', text: '', isDogSizes: true }
      ]);
    } else if (category.id === 'services') {
      setMessages(prev => [...prev,
        { type: 'bot', text: 'Which service would you like to learn more about?' },
        { type: 'bot', text: '', isServiceTypes: true }
      ]);
    } else if (category.id === 'booking') {
      setMessages(prev => [...prev, 
        { type: 'bot', text: commonQuestions[category.id], isBookingResponse: true },
        { type: 'bot', text: 'Would you like to ask another question?', showAskAnother: true }
      ]);
    } else {
      setMessages(prev => [...prev, 
        { type: 'bot', text: commonQuestions[category.id] },
        { type: 'bot', text: 'Would you like to ask another question?', showAskAnother: true }
      ]);
    }
  };

  const handleServiceTypeClick = (service) => {
    setMessages(prev => [...prev,
      { type: 'user', text: `Tell me about ${service.label}` },
      { type: 'bot', text: service.description },
      { type: 'bot', text: 'Would you like to ask another question?', showAskAnother: true }
    ]);
  };

  const handleAskAnotherQuestion = () => {
    setMessages([
      { type: 'bot', text: '👋 Welcome to Jameson & Company Dog Grooming! How can I help you today?' },
      { type: 'bot', text: 'Please select a category to get started:', isCategories: true }
    ]);
  };

  const handleSizeClick = (size) => {
    // Clear previous messages and start fresh with the size selection
    setMessages([
      { type: 'bot', text: '👋 Welcome to Jameson & Company Dog Grooming! How can I help you today?' },
      { type: 'bot', text: 'Please select a category to get started:', isCategories: true },
      { type: 'user', text: 'I would like to know about pricing' },
      { type: 'bot', text: 'Please select your dog\'s size:' },
      { type: 'bot', text: '', isDogSizes: true },
      { type: 'user', text: `My dog is ${size.label} (${size.range} lbs)` },
      { type: 'bot', text: 'What type of coat does your dog have?' },
      { type: 'bot', text: '', isHairLengths: true }
    ]);
    setSelectedSize(size);
  };

  const handleHairTypeClick = (hairType) => {
    if (!selectedSize) return;

    // Clear previous messages and show the complete conversation
    setMessages([
      { type: 'bot', text: '👋 Welcome to Jameson & Company Dog Grooming! How can I help you today?' },
      { type: 'bot', text: 'Please select a category to get started:', isCategories: true },
      { type: 'user', text: 'I would like to know about pricing' },
      { type: 'bot', text: 'Please select your dog\'s size:' },
      { type: 'bot', text: '', isDogSizes: true },
      { type: 'user', text: `My dog is ${selectedSize.label} (${selectedSize.range} lbs)` },
      { type: 'bot', text: 'What type of coat does your dog have?' },
      { type: 'bot', text: '', isHairLengths: true },
      { type: 'user', text: `My dog has a ${hairType.description}` },
      { type: 'bot', text: formatPricing(selectedSize, hairType) },
      { type: 'bot', text: 'Would you like to ask another question?', showAskAnother: true }
    ]);
    setSelectedSize(null);
  };

  const handleBookNowClick = () => {
    window.open("https://booking.moego.pet/ol/JamesonandCompanyDogGrooming/book", "_blank");
  };

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
      >
        <FontAwesomeIcon icon={faCommentDots} className="text-2xl" />
      </button>

      {isVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 modal"
          onClick={handleClickOutside}
        >
          <div className="w-full max-w-md h-[600px] flex flex-col items-center justify-between space-y-4 modal-content z-50 bg-gray-900 bg-opacity-90 shadow-modalShadow border-solid border-2 border-red-600 border-opacity-5 p-4 text-white rounded-lg">
            <div className="w-full h-full">
              <h2 className="text-center text-lg lg:text-2xl font-bold mb-4">Chat Assistant</h2>
              <div 
                ref={chatContainerRef}
                className="h-[500px] overflow-y-auto mb-4 p-4 bg-gray-800 rounded-lg scroll-smooth"
              >
                {messages.map((message, index) => (
                  <div key={index} className="message-item mb-4">
                    <div
                      className={`${
                        message.type === 'user'
                          ? 'text-right'
                          : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-700 text-white'
                        } whitespace-pre-line break-words max-w-[90%]`}
                      >
                        {message.text}
                      </div>
                    </div>

                    {message.isCategories && (
                      <div className="flex flex-wrap gap-2 justify-center mt-3">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            {category.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {message.isDogSizes && (
                      <div className="grid grid-cols-1 gap-2 mt-3">
                        {dogSizes.map((size) => (
                          <button
                            key={size.id}
                            onClick={() => handleSizeClick(size)}
                            className="p-3 text-sm bg-gray-700 hover:bg-red-600 rounded-lg transition-colors duration-200 text-left"
                          >
                            <div className="font-bold mb-1">{size.label}</div>
                            <div className="text-gray-300">{size.description}</div>
                          </button>
                        ))}
                      </div>
                    )}

                    {message.isHairLengths && (
                      <div className="grid grid-cols-1 gap-2 mt-3">
                        {hairLengths.map((hairLength) => (
                          <button
                            key={hairLength.id}
                            onClick={() => handleHairTypeClick(hairLength)}
                            className="p-3 text-sm bg-gray-700 hover:bg-red-600 rounded-lg transition-colors duration-200 text-left"
                          >
                            <div className="font-bold mb-1">{hairLength.label}</div>
                            <div className="text-gray-300">{hairLength.description}</div>
                          </button>
                        ))}
                      </div>
                    )}

                    {message.isServiceTypes && (
                      <div className="flex flex-wrap gap-2 justify-center">
                        {serviceTypes.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceTypeClick(service)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    )}
                    {message.isBookingResponse && (
                      <div className="mt-4">
                        <button
                          onClick={handleBookNowClick}
                          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
                        >
                          📅 Book Now
                        </button>
                      </div>
                    )}
                    {message.showAskAnother && (
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={handleAskAnotherQuestion}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          ❓ Ask Another Question
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
