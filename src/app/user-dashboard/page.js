"use client";  // Add this line at the top

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Use next/navigation in Next.js 13
import { ClerkProvider, useClerk } from '@clerk/nextjs'; // Import useClerk from @clerk/nextjs

const UserDashboard = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk(); // Use useClerk to access signOut method
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  if (!isSignedIn) {
    // Redirect to sign-in page if user is not signed in
    router.push('/sign-in');
    return null; // Optionally return a loading spinner or similar
  }

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut(); // Sign out the user
    router.push('/'); // Redirect to the sign-in page after signing out
  };

  const handleCreateFlashcard = async () => {
    if (!topic) return;

    const response = await fetch('/api/create-flashcard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: topic }),
    });

    const data = await response.json();
    
    setFlashcards([...flashcards, { title: data.title, content: data.content }]); // Add new flashcard to the list
    setIsModalOpen(false); // Close the modal after creating the flashcard
    setTopic(''); // Clear the input field
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-indigo-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Flashcard Maker Dashboard</h1>
          <nav>
            <a
              href="#"
              onClick={handleSignOut}
              className="text-white hover:text-gray-200"
            >
              Sign Out
            </a>
          </nav>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome, User!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Create Flashcard</h3>
              <p className="text-gray-600 mb-4">Design and create your own flashcards to help others learn.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
              >
                Create Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Buy Flashcards</h3>
              <p className="text-gray-600 mb-4">Explore and purchase flashcards created by other users.</p>
              <a
                href="/buy-flashcard"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
              >
                Browse Now
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sell Flashcards</h3>
              <p className="text-gray-600 mb-4">List your flashcards for sale and earn from your creations.</p>
              <a
                href="/sell-flashcard"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
              >
                Start Selling
              </a>
            </div>
          </div>

          {/* Display the created flashcards */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Flashcards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {flashcards.map((flashcard, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{flashcard.title}</h3>
                  <p className="text-gray-600">{flashcard.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'Education',
                'Agriculture',
                'Sports',
                'Science',
                'General Knowledge',
                'Psychology',
                'Inventions',
              ].map((category) => (
                <div
                  key={category}
                  className="bg-white p-4 rounded-lg shadow flex items-center justify-center"
                >
                  <span className="text-lg font-semibold text-gray-800">{category}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Flashcard Maker. All rights reserved.</p>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Flashcard Topic</h2>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-4 w-full"
              placeholder="Enter topic"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFlashcard}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
