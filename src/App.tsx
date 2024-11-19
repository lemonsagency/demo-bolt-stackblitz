import React from 'react';
import Navbar from './components/Navbar';
import BeforeAfter from './components/BeforeAfter';
import DoctorCard from './components/DoctorCard';
import { ArrowRight, CheckCircle2, Calendar, Award, Users2, Scissors } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Restore Your Natural Hair with Advanced Technology
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Experience the most advanced hair transplant techniques with our expert team of specialists. 
              Natural-looking results guaranteed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors flex items-center">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-colors">
                View Results
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Hair Transplant Clinic"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-8 w-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Natural Results</h3>
                <p className="text-gray-600 mt-2">Guaranteed natural-looking hairline and density</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="h-8 w-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Quick Recovery</h3>
                <p className="text-gray-600 mt-2">Minimal downtime with our advanced techniques</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Expert Team</h3>
                <p className="text-gray-600 mt-2">Highly skilled and experienced specialists</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users2 className="h-8 w-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">5000+ Clients</h3>
                <p className="text-gray-600 mt-2">Successfully treated patients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">Transformation Results</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            See the amazing transformations of our satisfied patients. These results speak for themselves.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
              afterImage="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              name="John, 35"
              description="6 months after FUE transplant"
            />
            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1582152629442-4a864303fb96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
              afterImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              name="Michael, 42"
              description="8 months after DHI treatment"
            />
            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
              afterImage="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80"
              name="David, 38"
              description="12 months after combined treatment"
            />
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">Meet Our Experts</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified doctors brings years of experience and expertise in hair transplantation.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DoctorCard
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              name="Dr. Sarah Johnson"
              title="Hair Transplant Specialist"
              description="15+ years of experience in FUE and DHI techniques. Board-certified surgeon specializing in natural hairline design."
            />
            <DoctorCard
              image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
              name="Dr. Robert Chen"
              title="Medical Director"
              description="20+ years pioneering innovative hair restoration techniques. Leading expert in complex cases."
            />
            <DoctorCard
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              name="Dr. Emily Martinez"
              title="Trichologist"
              description="Specialized in advanced hair diagnostics and personalized treatment planning for optimal results."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Scissors className="h-8 w-8 text-teal-500" />
                <span className="ml-2 text-xl font-semibold">NuHair Clinic</span>
              </div>
              <p className="mt-4 text-gray-400">
                Leading the way in advanced hair restoration technology and natural results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-teal-500">Home</a></li>
                <li><a href="#services" className="hover:text-teal-500">Services</a></li>
                <li><a href="#results" className="hover:text-teal-500">Results</a></li>
                <li><a href="#doctors" className="hover:text-teal-500">Our Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FUE Hair Transplant</li>
                <li>DHI Technique</li>
                <li>Beard Transplant</li>
                <li>Eyebrow Restoration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Medical Center Drive</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@nuhair.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 NuHair Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;