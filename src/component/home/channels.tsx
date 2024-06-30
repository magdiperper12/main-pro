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
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Reach and Engage Customers on their favorite channels
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-3 text-gray-700">
            With powerful conversational AI on their favorite channels
          </p>
        </div>

        <div className="flex item-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20">
          {[
            { icon: FaCommentDots, text: "SMS", color: "text-blue-700" },
            { icon: FaFacebookMessenger, text: "Messenger", color: "text-blue-700" },
            { icon: FaTelegram, text: "Telegram", color: "text-blue-500" },
            { icon: FaEnvelope, text: "Email", color: "text-gray-500" },
            { icon: FaInstagram, text: "Instagram", color: "text-red-700" },
            { icon: FaWhatsapp, text: "WhatsApp", color: "text-green-700" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center my-2 rounded py-2 transition duration-300 ease-in-out">
              <div className="w-6 md:w-16 lg:w-18">
                <item.icon className={`w-full text-4xl md:text-5xl lg:text-6xl ${item.color}`} />
              </div>
              <div className="mt-2">
                <h2 className="text-md md:text-xl lg:text-2xl font-bold text-gray-900">
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
