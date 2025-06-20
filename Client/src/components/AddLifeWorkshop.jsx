import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddLifeWorkshop = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex flex-col justify-between text-center px-4 py-6 relative bg-gradient-to-br from-white via-[#f6f0ff] to-white"
      style={{
        backgroundImage: "url('/illustration.jpg')",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Cipla Logo */}
      <div className="w-full text-right pr-4 pt-2">
        <h2 className="text-xl font-bold text-[#2645B4]">Cipla</h2>
      </div>

      {/* Workshop Heading */}
      <div className="mt-4">
        <div className="flex items-center justify-center gap-3 text-5xl font-bold">
          <span className="text-purple-800 text-6xl font-extrabold">+</span>
          <span className="text-gray-900">ADD</span>
          <span className="text-black">LIFE</span>
        </div>
        <div className="bg-purple-700 text-white mt-3 py-2 px-6 inline-flex items-center justify-center text-xl font-semibold rounded">
          <span className="mr-2 font-serif tracking-widest">HROT</span>
          <span className="text-white font-normal ml-1">WORKSHOP</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-purple-700 text-white mt-10 px-6 py-5 rounded-xl w-full max-w-xl mx-auto shadow-lg backdrop-blur-md bg-opacity-90">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Date */}
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-xl" />
            <div className="text-left">
              <p className="font-bold">
                29<sup>th</sup> June 2025
              </p>
              <p className="text-sm">Sunday</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3">
            <FaClock className="text-xl" />
            <div className="text-left">
              <p className="font-medium">08:00 AM to 06:00 PM</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <FaMapMarkerAlt className="text-xl" />
          <p className="font-medium">Radisson Blu Resort Visakhapatnam</p>
        </div>
      </div>

      {/* Register Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/register")}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium px-8 py-3 rounded-full shadow hover:scale-105 transition duration-300 cursor-pointer"
        >
          Please click here to register
        </button>
      </div>

      {/* Removed image since it's now background */}
    </div>
  );
};

export default AddLifeWorkshop;
