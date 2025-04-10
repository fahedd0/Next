/* eslint-disable @next/next/no-html-link-for-pages */
// src/app/not-found.js
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-10 bg-white">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-700">404 – Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <a href="/" className="text-blue-600 hover:underline text-base font-medium">
            ← Go back home
          </a>
        </div>
      </div>
    );
  }
  