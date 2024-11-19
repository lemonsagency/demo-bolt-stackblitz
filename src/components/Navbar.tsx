import { Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Scissors className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">NuHair Clinic</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</a>
              <a href="#results" className="text-gray-700 hover:text-teal-600 transition-colors">Results</a>
              <a href="#doctors" className="text-gray-700 hover:text-teal-600 transition-colors">Our Team</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Services</a>
            <a href="#results" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Results</a>
            <a href="#doctors" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Our Team</a>
            <button className="w-full mt-2 bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}