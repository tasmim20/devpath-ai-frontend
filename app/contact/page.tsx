"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 10000);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Contact Details */}
      <div className="container max-w-7xl mx-auto mt-16 mb-16">
        <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 mb-20">
          <div className="text-center mb-10 md:mb-0">
            <div className="flex justify-center mb-4">
              <Mail className="w-16 h-16 md:w-20 md:h-20 text-[#f28647]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#f28647]">
              Our Mail
            </h3>
            <p className="text-gray-600">hello@devPath.com</p>
            <p className="text-gray-600">info@devPath.com</p>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <div className="flex justify-center mb-4">
              <Phone className="w-16 h-16 md:w-20 md:h-20 text-[#f28647]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#f28647]">
              Telephone
            </h3>
            <p className="text-gray-600">+458 123 657 2324</p>
            <p className="text-gray-600">+458 123 657 2324</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-16 h-16 md:w-20 md:h-20 text-[#f28647]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#f28647]">
              Location
            </h3>
            <p className="text-gray-600">+7011 Vermont Ave,</p>
            <p className="text-gray-600">Los Angeles, CA 90044</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#fff4ef] p-6 md:p-8 rounded-lg mx-4 md:mx-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#f28647] mb-6 md:mb-10">
            Send Us A Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-12">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 rounded bg-white border border-gray-300  focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded bg-white border border-gray-300 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="p-3 rounded bg-white border border-gray-300  focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="p-3 rounded bg-white border border-gray-300  focus:border-transparent"
            />
            <textarea
              placeholder="Message"
              required
              className="col-span-1 md:col-span-2 p-3 rounded bg-white border border-gray-300 focus:border-transparent"
              rows={4}
            />
            <div className="col-span-1 md:col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span>I accept the terms and conditions</span>
              </label>
            </div>
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full md:w-auto text-white py-3 px-8 rounded bg-[#f28647]  focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <button
              onClick={handleModalClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-[#f28647] mb-4">
              Message Received
            </h2>
            <p className="text-gray-600">
              Thank you for getting in touch with us!
            </p>
            <p className="text-gray-600">
              We received your message and will get back to you shortly.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/"
                className="bg-[#f28647] text-white py-2 px-4 rounded hover:bg-[#f9823d]"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
