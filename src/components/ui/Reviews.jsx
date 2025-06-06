import React, { useState } from 'react';
import reviews from '../data/reviewsData';

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Read reviews from our satisfied customers and their furry friends
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentReviews.map((review) => (
              <div key={review.id} className="h-[300px] p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <figure className="h-full flex flex-col">
                  <blockquote className="flex-grow overflow-y-auto custom-scrollbar">
                    <p className="text-gray-900 text-sm leading-6 pr-2">{review.text}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-gray-100 pt-4 flex-shrink-0">
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="mt-1 text-sm text-gray-600">{review.date}</div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === i + 1
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
