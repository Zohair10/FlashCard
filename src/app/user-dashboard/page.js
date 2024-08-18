"use client";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Use next/navigation in Next.js 13
import { ClerkProvider, useClerk } from '@clerk/nextjs'; // Import useClerk from @clerk/nextjs

const UserDashboard = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk(); // Use useClerk to access signOut method
  const router = useRouter();

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
              <a
                href="/create-flashcard"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
              >
                Create Now
              </a>
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
    </div>
  );
};

export default UserDashboard;
