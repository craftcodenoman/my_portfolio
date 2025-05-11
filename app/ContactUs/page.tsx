"use client";

import React from "react";
// Import icons from a library like react-icons
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lets connect and discuss how I can contribute to your next project
            or opportunity.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me for any inquiries or opportunities.
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                    <MdEmail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:email@example.com"
                      className="text-gray-700 hover:text-emerald-600 transition duration-300"
                    >
                      nomanjawaid.tech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                    <MdPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+92xxxxxxxxxx"
                      className="text-gray-700 hover:text-emerald-600 transition duration-300"
                    >
                      +92-315-2032663
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                    <MdLocationOn className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700">Karachi,Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links (Optional) */}
              <div className="mt-8 flex space-x-4"></div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-6 lg:p-8 bg-gray-50">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 transition duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
