import React, { useState } from "react";
import { MdSend } from "react-icons/md"; // Send icon

function AImessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage(""); // Clear input field after sending
    }
  };

  return (
    <div className="fixed bottom-10 end-0 flex items-center">
      {/* Icon to toggle chat input visibility */}
      <div
        className={`bg-gray-200 text-white rounded-full h-16 w-16 flex justify-center items-center cursor-pointer shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "transform translate-x-[30px]" : ""
        } fixed bottom-10 end-10`}
        onClick={handleToggle}
        aria-label="Toggle Chat"
      >
        <img
          src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
          alt="Chat Icon"
          className="h-12 w-12"
        />
      </div>

      {/* Chat interface */}
      <div
        className={`transition-all duration-500 ease-in-out w-72  bg-white shadow-lg rounded-lg p-4 flex flex-col ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateX(${isVisible ? "-80px" : "80px"})` }}
      >
        {/* Chat history (placeholder) */}
        <div className="flex-grow">
          <p className="text-gray-600">Chat history goes here...</p>
        </div>

        {/* Input area */}
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            className="flex-grow p-2 text-gray-900 placeholder-gray-500 outline-none border border-gray-300 rounded-l-md"
            placeholder="Type your message..."
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white rounded-r-md h-10 w-10 flex justify-center items-center transition duration-300 ease-in-out"
            aria-label="Send Message"
          >
            <MdSend className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AImessage;

// import React, { useState } from "react";
// import { FaPaperPlane } from "react-icons/fa"; // Replace this with your custom send icon

// function AImessage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleToggle = () => {
//     setIsVisible(!isVisible);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       console.log("Message sent:", message);
//       setMessage(""); // Clear input field after sending
//     }
//   };

//   return (
//     <div className="fixed bottom-10 right-10 flex flex-col items-center">
//       {/* Icon to toggle chat input visibility */}
//       <div
//         className="bg-blue-600 text-white rounded-full h-16 w-16 flex justify-center items-center cursor-pointer shadow-lg z-50"
//         onClick={handleToggle}
//         aria-label="Toggle Chat"
//       >
//         <img
//           src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
//           alt="Chat Icon"
//           className="h-12 w-12"
//         />
//       </div>

//       {/* Chat interface */}
//       {isVisible && (
//         <div className="mt-2 w-72 bg-white shadow-lg rounded-lg p-4">
//           {/* Chat history (placeholder) */}
//           <div className="max-h-48 overflow-y-auto">
//             <p className="text-gray-600">Chat history goes here...</p>
//           </div>

//           {/* Input area */}
//           <div className="flex items-center mt-2">
//             <input
//               type="text"
//               value={message}
//               onChange={handleMessageChange}
//               className="flex-grow p-2 text-gray-900 placeholder-gray-500 outline-none border border-gray-300 rounded-l-md"
//               placeholder="Type your message..."
//             />

//             {/* Send Button */}
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white rounded-r-md h-10 w-10 flex justify-center items-center transition duration-300 ease-in-out"
//               aria-label="Send Message"
//             >
//               <FaPaperPlane className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AImessage;
