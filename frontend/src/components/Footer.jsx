import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* White horizontal line at the top */}
      <div className="border-t border-white w-full mb-6"></div>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {/* Column 1 - Logo & Presented By */}
          <div className="flex flex-col items-center">
            <img src="./hackblitz.png" alt="HB Logo" className="w-20 h-20 md:w-24 md:h-24 mb-2" />
            <p className="text-sm">Presented by</p>
            <img src="./anveshan.png" alt="Anveshan Logo" className="w-20 md:w-28 mt-2" />
          </div>

          {/* Column 2 - Venue */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Venue</h3>
            <p className="text-sm">
              Bhagwan Parshuram Institute of <br />
              Technology, Rohini Sec-17
            </p>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <p className="text-sm">Sponsor Brochure</p>
          </div>

          {/* Column 4 - Community */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <img src="./github.png" alt="Github" className="w-6 h-6" />
                <span className="text-sm">Github</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="./discord.png" alt="Discord" className="w-6 h-6" />
                <span className="text-sm">Discord</span>
              </div>
            </div>
          </div>

          {/* Column 5 - Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <img src="./instagram.png" alt="Instagram" className="w-6 md:w-8 h-6 md:h-8" />
              <img src="./linkedin.png" alt="LinkedIn" className="w-6 md:w-8 h-6 md:h-8" />
              <img src="./twitter.png" alt="Twitter" className="w-6 md:w-8 h-6 md:h-8" />
              <img src="./facebook.png" alt="Facebook" className="w-6 md:w-8 h-6 md:h-8" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © All Rights Reserved | Designed by Team Anveshan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
 