
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold mb-4">Browse by Dress Style</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <img src="/casual.JPG" alt="Casual" className="w-40 h-32 object-cover mb-2" />
            <span className="text-gray-700 font-medium">Casual</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/formal.JPG" alt="Formal" className="w-40 h-32 object-cover mb-2 rounded-lg"/>
            <span className="text-gray-700 font-medium">Formal</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/party.JPG" alt="Party" className="w-40 h-32 object-cover mb-2 rounded-lg"/>
            
            <span className="text-gray-700 font-medium">Party</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/gym.JPG" alt="Gym" className="w-40 h-32 object-cover mb-2" />
            <span className="text-gray-700 font-medium">Gym</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-700 mb-2">I love the wide selection of dress styles!</p>
            <span className="text-gray-500 text-sm">- John Doe</span>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-700 mb-2">The customer service is excellent!</p>
            <span className="text-gray-500 text-sm">- Jane Smith</span>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <p className="text-gray-700 mb-2">I always find the perfect dress for any occasion.</p>
            <span className="text-gray-500 text-sm">- Michael Johnson</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}
