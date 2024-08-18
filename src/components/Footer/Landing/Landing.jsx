import React from "react";

const Landing = () => {
  return (
    <div>
      <head>
        <title>Flashcard Maker</title>
      </head>
      <div className="bg-gray-50">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">EduFlare</h1>
            <nav className="space-x-4">
              <a
                href="#features"
                // className="text-gray-700 hover:text-gray-900 text-lg font-medium"
              >
                Features
              </a>
              <a
                href="/sign-up"
                // className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-md text-lg font-medium"
              >
                Sign Up
              </a>
              <a
                href="/sign-in"
                // className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-md text-lg font-medium"
              >
                Sign In
              </a>
            </nav>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Create and Study Flashcards Effortlessly
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Master your subjects with our intuitive flashcard maker. Organize your learning and retain more information.
              </p>
              <a
                href="/sign-up"
                className="mt-6 inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 text-lg font-medium"
              >
                Create a Flashcard
              </a>
            </div>
            {/* <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
              <img
                src="/path/to/hero-image.png"
                alt="Flashcard Maker"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div> */}
          </div>
        </section>

        <section id="features" className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Easy to Use</h4>
                <p className="text-gray-600">
                  Create flashcards quickly with our simple interface.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Study Anywhere</h4>
                <p className="text-gray-600">
                  Access your flashcards on any device, anytime.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Customizable</h4>
                <p className="text-gray-600">
                  Tailor your flashcards to fit your learning style.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="signup" className="bg-indigo-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h4 className="text-3xl font-bold mb-4">
              Start Your Learning Journey Today!
            </h4>
            <p className="text-lg mb-6">
              Sign up now and make the most of your study time with Flashcard Maker.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-indigo-600 py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 text-lg font-medium"
            >
              Sign Up for Free
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2024 Flashcard Maker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
