// app/page.js (or your corresponding main page file in the src/app structure)
import React from 'react';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gray-900">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <p className="text-sm text-gray-400 mb-2">Learn, Connect, and Innovate</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Future Tech Revolution
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Immerse yourself in the world of future technology. Explore our comprehensive resources,
            connect with fellow tech enthusiasts, and drive innovation in the industry. Join a
            dynamic community of forward-thinkers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Resource Access</h2>
            <p className="text-gray-400">
              Visitors can access a wide range of resources, including ebooks, whitepapers, and reports.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Community Forum</h2>
            <p className="text-gray-400">
              Join our active community forum to discuss industry trends, share insights, and collaborate with peers.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Tech Events</h2>
            <p className="text-gray-400">
              Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
