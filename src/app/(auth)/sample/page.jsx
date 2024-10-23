const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-2">Home</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Resources <span className="bg-red-500 text-white text-xs ml-1 px-1 rounded">New</span></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Newsletter</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-2">News</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Trending Stories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Featured Videos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Technology</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Health</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Politics</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Environment</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-2">Blogs</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Quantum Computing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">AI Ethics</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Space Exploration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Biotechnology <span className="bg-red-500 text-white text-xs ml-1 px-1 rounded">New</span></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Renewable Energy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Biohacking</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-2">Podcasts</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">AI Revolution</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">AI Revolution <span className="bg-red-500 text-white text-xs ml-1 px-1 rounded">New</span></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">TechTalk AI</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">AI Conversations</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Whitepapers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Ebooks</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Reports</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Research Papers</a></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2024 FutureTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

