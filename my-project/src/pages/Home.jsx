import React from 'react';
import { useNavigate } from 'react-router-dom';
import tumbnail from "../assets/tumbnail.png";
import AboutPage from "./AboutPage";
import TierCards from "./TierCard";
import ContactUs from './ContactUs'

export default function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
    const styleCss = {
        margin: '-60px'
      }
    
      const titleCss = {
        marginLeft: '8rem',
        marginTop: '10px'
      }
  return (
    <div className="font-sans">
      {/* Header */}
      <header className=" p-4 flex justify-between items-center">        
        <div className="h-32 w-72 flex bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={styleCss}>
          <div className="" style={titleCss}>
        
        <div className="text-white text-2xl font-bold mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-slash-circle float-left my-2 mx-2 text-white"
          viewBox="0 0 16 16"          
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708" />
        </svg>
          HOME
          </div>

          </div>

        </div>
        <nav className="space-x-8 text-black font-bold">
          <a href="#about" className="hover:text-blue-600">
            ABOUT
          </a>
          <a href="#tierCard" className="hover:text-blue-600">
            PRICING
          </a>
          <a href="#contact" className="hover:text-blue-600">
            CONTACT
          </a>
          <button onClick={goToLogin} className="border-2 border-cyan-400 text-cyan-400 px-4 py-1 hover:bg-blue-600 hover:text-white transition">
            LOGIN
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex justify-center items-center p-8">
        <div>
          <p className="text-center text-2xl italic mb-4">
            " Excepteur sint occaecat cupidatat non proident "
          </p>
          <p className="text-center text-gray-600 max-w-md mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
      </main>

      {/* Decorative background */}
      <div className="relative">
        <p className="mx-12">" Excepteur sint occaecat cupidatat non proident "</p>
      <img src={tumbnail} alt="Graph Illustration" className="w-1/4" />
        <div className="absolute bottom-50 right-0 w-1/2 h-40 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-tl-full">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* About content */}
      <div className="mt-[15rem]">
      <AboutPage />

      </div>

      <div>
        <TierCards />
      </div>

      <div>
        <ContactUs />
      </div>
      <div>
      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#about" className="hover:text-white">About Us</a>
              </li>              
              <li className="mb-2">
                <a href="#tierCard" className="hover:text-white">Tier List</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">1234 Street Name, City, State, 12345</p>
            <p className="text-gray-400 mb-2">Email: info@company.com</p>
            <p className="text-gray-400 mb-2">Phone: +1 234 567 890</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
          &copy; 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
      </div>

    </div>
  )
}
