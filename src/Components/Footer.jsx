function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              MatchPredict
            </h2>
            <p className="mt-3 text-sm leading-6">
              Predict upcoming football matches, track scores, and compete
              with friends through a fun and interactive prediction platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Predictions</li>
              <li className="hover:text-white cursor-pointer">Leaderboard</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact
            </h3>
            <p>Email: support@matchpredict.com</p>
            <p className="mt-2">Phone: +977 9800000000</p>
            <p className="mt-2">Kathmandu, Nepal</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
          © {new Date().getFullYear()} MatchPredict. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;