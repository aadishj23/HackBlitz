import { Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 shadow-lg rounded-md max-w-3xl mb-10 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        CONTACT US
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Phone Section */}
        <div className="flex items-center space-x-4 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-4 rounded-xl">
          <div className="bg-black p-4 rounded-full">
            <Phone className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-lg md:text-xl font-medium">91-89201-75625</p>
            <p className="text-lg md:text-xl font-medium">91-91168-70978</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-4 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-4 rounded-xl">
          <div className="bg-black p-4 rounded-full">
            <Mail className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-lg md:text-xl font-medium">anveshan21@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}