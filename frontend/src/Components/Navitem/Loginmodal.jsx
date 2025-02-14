import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../../../firebase"; // Update the path as necessary

const Loginmodal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error during Google Sign-in", error);
      alert("Google Sign-in failed. Please try again.");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#011F5B] p-8 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white font-bold text-lg"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl text-white font-bold text-center mb-4">Login</h2>
            <p className="text-center text-sm text-white mb-4">Sign in with Google to continue</p>

            {/* Google Sign-in Button */}
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg-white text-black font-semibold py-2 w-full rounded border border-gray-300 shadow hover:shadow-md"
            >
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.2 0 5.9 1.2 8 3.1l6.1-6.1C34.6 3.1 29.6 1 24 1 14.8 1 7.1 6.5 3.6 14l7.2 5.6c1.6-4.8 6.2-8.1 11.2-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M24 47c5.5 0 10.1-1.8 13.4-4.8l-6.5-5.4c-2 1.3-4.6 2.1-6.9 2.1-5 0-9.2-3.4-10.7-8h-7.3l-7.3 5.6C7.2 42.5 14.6 47 24 47z"
                />
                <path
                  fill="#4A90E2"
                  d="M43.6 20.5H24v8.1h11.1c-1.1 2.8-4.3 6.1-11.1 6.1-5.3 0-9.8-3.6-11.4-8.4l-7.2 5.6c2.8 8.4 10.6 14.7 18.6 14.7 11.6 0 20-8.3 20-20 0-1.3-.1-2.5-.4-3.8z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Loginmodal;
