import { HiOutlineMailOpen } from "react-icons/hi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookMessenger,
  FaTelegram,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import React from "react";

function Channels() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Reach and Engage Customers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-3 text-gray-700">
            With powerful conversational AI on their favorite channels
          </p>
        </div>

        <div className="flex item-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: FaCommentDots, text: "SMS", color: "text-blue-700" },
            { icon: FaFacebookMessenger, text: "Messenger", color: "text-blue-700" },
            { icon: FaTelegram, text: "Telegram", color: "text-blue-500" },
            { icon: FaEnvelope, text: "Email", color: "text-gray-500" },
            { icon: FaInstagram, text: "Instagram", color: "text-red-700" },
            { icon: FaWhatsapp, text: "WhatsApp", color: "text-green-700" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center my-2 hover:shadow-lg rounded p-5 transition duration-300 ease-in-out">
              <div className="w-16 md:w-20 lg:w-24">
                <item.icon className={`w-full text-4xl md:text-5xl lg:text-6xl ${item.color}`} />
              </div>
              <div className="mt-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  {item.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Channels;
