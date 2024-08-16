import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-4">Feel free to reach out to us through the following contact details:</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.015a3.001 3.001 0 00-5.44 0 6.004 6.004 0 01-8.5 3.84 11.954 11.954 0 0011.648-11.648 6.004 6.004 0 013.84 8.5 3.001 3.001 0 00-1.548 2.307z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.015a3.001 3.001 0 00-5.44 0 6.004 6.004 0 01-8.5 3.84 11.954 11.954 0 0011.648-11.648 6.004 6.004 0 013.84 8.5 3.001 3.001 0 00-1.548 2.307z" /></svg>
                <span className="ml-3 text-gray-700">Phone: +123 456 7890</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.015a3.001 3.001 0 00-5.44 0 6.004 6.004 0 01-8.5 3.84 11.954 11.954 0 0011.648-11.648 6.004 6.004 0 013.84 8.5 3.001 3.001 0 00-1.548 2.307z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.015a3.001 3.001 0 00-5.44 0 6.004 6.004 0 01-8.5 3.84 11.954 11.954 0 0011.648-11.648 6.004 6.004 0 013.84 8.5 3.001 3.001 0 00-1.548 2.307z" /></svg>
                <span className="ml-3 text-gray-700">Email: contact@company.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.015a3.001 3.001 0 00-5.44 0 6.004 6.004 0 01-8.5 3.84 11.954 11.954 0 0011.648-11.648 6.004 6.004 0 013.84 8.5 3.001 3.001 0 00-1.548 2.307z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.015a3.001 3.001 0 00-5.44 0 6.004 6.004 0 01-8.5 3.84 11.954 11.954 0 0011.648-11.648 6.004 6.004 0 013.84 8.5 3.001 3.001 0 00-1.548 2.307z" /></svg>
                <span className="ml-3 text-gray-700">Address: 123 Main Street, City, Country</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <div className="w-full h-64 bg-gray-200 rounded-md">
                {/* Placeholder for map */}
                <p className="text-center text-gray-500 leading-64">Map Placeholder</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
