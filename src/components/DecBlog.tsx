import React, { useState, ChangeEvent } from 'react';

interface Comment {
  id: string;
  firstName: string;
  dogName: string;
  email: string;
  text: string;
  date: Date;
}

interface CommentForm {
  firstName: string;
  dogName: string;
  email: string;
  text: string;
}

const DecBlog: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState<CommentForm>({
    firstName: '',
    dogName: '',
    email: '',
    text: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommentSubmit = () => {
    const comment: Comment = {
      id: Date.now().toString(),
      ...newComment,
      date: new Date()
    };
    setComments(prev => [...prev, comment]);
    setNewComment({
      firstName: '',
      dogName: '',
      email: '',
      text: ''
    });
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">How to Keep Your Dog Looking and Feeling Great This November: Thanksgiving Grooming Tips and Winter Coat Care</h1>

      <article className="prose lg:prose-xl">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Get Your Dog Ready for Thanksgiving Guests</h2>
          <p className="mb-4">
            Thanksgiving is a time for family, friends, and, of course, delicious food. If you're hosting or attending gatherings, you'll want your dog to look their best for the occasion. Here's how grooming can help:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Freshen Up Their Coat: A good bath and grooming session will remove dirt, loose hair, and any lingering smells.</li>
            <li className="mb-2">Nail Trimming: Make sure to get your dog's nails trimmed before Thanksgiving to avoid accidental scratches.</li>
            <li className="mb-2">Tidy Up the Face and Ears: Cleaning your dog's ears and trimming around the face will give them a polished look.</li>
          </ul>
          <p className="text-sm italic mt-2">Pro Tip: Book a grooming appointment a few days before Thanksgiving to ensure your dog is guest-ready!</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Keep Your Dog Safe During Thanksgiving Dinner</h2>
          <p className="mb-4">
            While it's tempting to share Thanksgiving treats with your pup, it's essential to know which foods are hazardous for dogs. Avoid giving your dog any of the following:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Turkey Bones: Cooked bones can splinter and cause internal damage or choking.</li>
            <li className="mb-2">Stuffing with Garlic or Onions: Both garlic and onions are toxic to dogs, even in small amounts.</li>
            <li className="mb-2">Desserts with Chocolate or Raisins: These common dessert ingredients are hazardous to dogs, so be sure to keep pies and cakes out of reach.</li>
          </ul>
          <p className="mb-4">
            Instead, consider making some dog-friendly Thanksgiving treats! There are plenty of easy recipes out there, like pumpkin dog biscuits or plain cooked sweet potatoes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Prepare Your Dog's Coat for Cooler Weather</h2>
          <p className="mb-4">
            As the weather cools down, it's time to switch up your dog's grooming routine to prepare for winter. Depending on your dog's breed, they may be growing a thicker coat to keep warm, which requires extra care.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Regular Brushing: Even though it's cooler, dogs can still shed during fall and winter. Regular brushing will help reduce shedding and keep your dog's coat healthy and tangle-free.</li>
            <li className="mb-2">Protect Their Paws: Cold weather can cause dry, cracked paws, especially if your dog spends a lot of time outdoors. Apply a dog-safe paw balm to protect their paw pads from the elements and prevent irritation.</li>
            <li className="mb-2">Check for Seasonal Allergies: Even though spring is typically associated with allergies, fall can also trigger allergic reactions in dogs. If your pup seems itchy or uncomfortable, consult your vet and consider hypoallergenic shampoos.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Schedule Pre-Holiday Grooming Sessions</h2>
          <p className="mb-4">
            The holiday season is one of the busiest times for dog grooming appointments. If you're planning to host Christmas or other celebrations in December, it's a good idea to book your dog's grooming session early. Not only will this guarantee your dog looks fantastic for the holidays, but it will also allow them to feel more comfortable if they'll be meeting new people or spending time around guests.
          </p>
          <p className="text-sm italic mt-2">Pro Tip: Ask your groomer if they offer holiday-themed grooming, like special bows, bandanas, or seasonal scents!</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Show Gratitude for Your Groomer This November</h2>
          <p className="mb-4">
            November is a month of gratitude, and that includes being thankful for the professionals who help keep your dog looking and feeling their best. November 12th is National Dog Groomer Appreciation Day, so take a moment to thank your groomer! Whether it's leaving a positive review online, sharing your experience on social media, or just saying thank you during your next appointment, your appreciation can go a long way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts: November Grooming Made Easy</h2>
          <p className="mb-4">
            By following these grooming tips, you can ensure that your dog is happy, healthy, and ready to join in the Thanksgiving festivities. Don't forget, regular grooming is key to keeping your pup comfortable during the colder months, and it also prevents issues like matting, shedding, and dry skin.
          </p>
          <p className="mb-4">
            At Jameson & Company Dog Grooming, we're here to help you every step of the way. Whether you need a pre-Thanksgiving clean-up or are preparing your dog for the winter season, we've got the skills and experience to make sure your pup looks and feels amazing.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Call to Action:</h3>
          <p>
            Ready to give your dog the pampering they deserve this season? Contact us to book a grooming session or visit our website for more information. We can't wait to make your pup look fabulous this November!
          </p>
        </section>
      </article>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4">
              <div className="bg-gray-100 p-4 rounded shadow-md">
                <h3 className="font-bold mb-1">{`${comment.firstName} and ${comment.dogName}`}</h3>
                <p className="mb-1">{comment.text}</p>
                <p className="text-gray-500 text-sm">{comment.date.toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => setIsModalOpen(true)}
        >
          Add Comment
        </button>
      </div>

      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${isModalOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white p-4 rounded shadow-md w-1/2">
          <h2 className="text-lg font-bold mb-2">Add a Comment</h2>
          <input 
            type="text" 
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
            placeholder="First Name"
            name="firstName"
            value={newComment.firstName}
            onChange={handleInputChange}
          />
          <input 
            type="text" 
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
            placeholder="Dog's Name"
            name="dogName"
            value={newComment.dogName}
            onChange={handleInputChange}
          />
          <input 
            type="email" 
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
            placeholder="Email"
            name="email"
            value={newComment.email}
            onChange={handleInputChange}
          />
          <textarea 
            className="block w-full p-2 mb-4 border border-gray-400 rounded"
            placeholder="Comment"
            name="text"
            value={newComment.text}
            onChange={handleInputChange}
          />
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCommentSubmit}
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecBlog;
