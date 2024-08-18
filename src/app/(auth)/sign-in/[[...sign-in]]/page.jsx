import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
  <div className="bg-blue-50 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Sign In to Flashcard Maker</h1>
      <SignIn
        appearance={{
          elements: {
            card: "bg-white rounded-lg shadow-lg",
            formButtonPrimary: "bg-blue-600 text-white hover:bg-blue-700",
            formButton: "bg-gray-200 text-gray-700 hover:bg-gray-300",
            input: "border-gray-300 rounded-lg",
            // Add more styles as needed to match your theme
          }
        }}
        redirectUrl="/user-dashboard" // URL to redirect after sign-in
      />
      <p className="mt-4 text-center text-gray-600">
        Don’t have an account?{' '}
        <a href="/sign-up" className="text-blue-600 hover:text-blue-800">
          Sign Up
        </a>
      </p>
    </div>
  </div>
);

export default SignInPage;
