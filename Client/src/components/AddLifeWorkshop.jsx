import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const AddLifeWorkshop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8f6ff] to-white text-center p-6 flex flex-col items-center justify-between">
      {/* Cipla Logo */}
      <div className="w-full text-right pr-6 pt-4">
        <h2 className="text-xl font-bold text-[#2645B4]">Cipla</h2>
      </div>

      {/* Title Section */}
      <div className="mt-4">
        <div className="text-purple-700 text-5xl font-extrabold flex items-center justify-center gap-2">
          <span className="text-purple-800 text-6xl font-black">+</span>
          <span className="text-gray-900">ADD</span>
          <span className="text-black">LIFE</span>
        </div>
        <div className="bg-purple-700 text-white mt-2 py-2 px-4 inline-block text-2xl font-semibold tracking-wider rounded">
          <span className="mr-2">HROT</span>
          <span className="font-normal">WORKSHOP</span>
        </div>
      </div>

      {/* Event Info Box */}
      <div className="bg-purple-700 text-white mt-10 px-6 py-5 rounded-xl max-w-xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Date */}
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-white text-xl" />
            <div className="text-left">
              <p className="font-bold">
                29<sup>th</sup> June 2025
              </p>
              <p>Sunday</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <FaClock className="text-white text-xl" />
            <div className="text-left">
              <p>08:00 AM to 06:00 PM</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-4 justify-center">
          <FaMapMarkerAlt className="text-white text-xl" />
          <p className="font-medium">Radisson Blu Resort Visakhapatnam</p>
        </div>
      </div>

      {/* Register Button */}
      <button className="mt-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium px-8 py-3 rounded-full shadow hover:shadow-lg transition">
        Please click here to register
      </button>

      {/* Footer Illustration */}
      <div className="w-full mt-10">
        <img
          src="/illustration.png" // Replace this with actual image path
          alt="Cityline"
          className="w-full max-h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default AddLifeWorkshop;
