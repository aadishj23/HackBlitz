import { Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">CONTACT US</h2>
      <div className="flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          <div className="bg-black p-4 rounded-full">
            <Phone className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-lg font-medium">91-89201-75625</p>
            <p className="text-lg font-medium">91-91168-70978</p>
          </div>
        </div>

        
        <div className="flex items-center space-x-4">
          <div className="bg-black p-4 rounded-full">
            <Mail className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-lg font-medium">anveshan21@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
