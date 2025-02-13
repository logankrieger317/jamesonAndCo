const dayOfWeek = [
  {
    day: "Monday",
    hours: "Closed",
  },
  {
    day: "Tuesday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Wednesday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Thursday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Friday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Saturday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];

export default function Map() {
  return (
    <div className="bg-red-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Map Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-white font-bold text-lg text-center">
                Located in front of{" "}
                <a 
                  href="https://thewateringbowlatx.com" 
                  className="text-red-400 hover:text-red-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Watering Bowl!
                </a>
              </p>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="Jameson & Company location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.9008901657257!2d-97.8493661!3d30.131778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4cd161957f93%3A0x4b0219435a25c4ba!2s820%20FM1626%2C%20Austin%2C%20TX%2078748!5e0!3m2!1sen!2sus!4v1707786234962!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Hours and Address Section */}
            <div className="flex flex-col items-center justify-center text-white space-y-6">
              <p className="font-bold text-xl text-center">
                820 Farm to Market 1626, Austin, TX 78748
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
                {dayOfWeek.map((day) => (
                  <div 
                    key={day.day} 
                    className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-md h-24 w-full"
                  >
                    <p className="font-bold text-sm text-gray-900">{day.day}</p>
                    <p className="text-sm mt-1 text-gray-600">{day.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}