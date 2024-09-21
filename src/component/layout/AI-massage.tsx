import React, { useState, useEffect, useRef } from "react";
import { MdSend, MdArrowDropDown, MdInsertEmoticon } from "react-icons/md";
import soundEffect from "../sounds/open-chat.mp3"; // Import your sound effect

const AImessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { text: string; type: string; time: string }[]
  >([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    const audio = new Audio(soundEffect);
    audio.play();
    setIsVisible(!isVisible);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newUserMessage = { text: message, type: "user", time };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setMessage("");

      // Simulate an automatic reply
      setTimeout(() => {
        const botReply =
          "This is an automatic response. How can I assist you further?";
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: botReply,
            type: "bot",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }, 1000); // Delay for 1 second for the automatic reply
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-10 right-10">
      <div
        className={`bg-gray-200 text-white rounded-full h-16 w-16 flex justify-center items-center cursor-pointer shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleToggle}
        aria-label="Toggle Chat"
      >
        <img
          src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
          alt="Chat Icon"
          className="h-12 w-12"
        />
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out w-96 shadow-xl rounded-2xl fixed ${
          isVisible
            ? "bottom-20 right-5 translate-y-0 opacity-100"
            : "bottom-16 right-5 translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center">
            <img
              src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
              alt="BotBat Icon"
              className="h-8 w-8 mr-2"
            />
            <span className="font-bold">Botbat</span>
          </div>
          <button onClick={handleToggle} aria-label="Close Chat">
            <MdArrowDropDown className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-72 overflow-auto bg-white transition-all duration-300 ease-in-out">
          <div className="flex items-center space-x-2">
            <img
              src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
              alt="Bot Avatar"
              className="h-10 w-10"
            />
            <div className="bg-gray-200 p-3 rounded-full text-gray-600">
              Welcome! How can I assist you today?
            </div>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`text-${msg.type === "user" ? "right" : "left"}`}
            >
              <div
                className={`p-3 rounded-full inline-block transition-all duration-300 ease-in-out ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {msg.text}
              </div>
              <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="flex items-center p-2 border-t border-gray-300 bg-white rounded-b-2xl">
          <button className="p-2 text-gray-500">
            <MdInsertEmoticon />
          </button>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            className="flex-grow p-2 text-gray-900 placeholder-gray-500 outline-none rounded-full"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-full h-10 w-10 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 ml-2"
            aria-label="Send Message"
          >
            <MdSend className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AImessage;
