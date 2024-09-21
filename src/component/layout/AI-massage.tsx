import React, { useState, useEffect, useRef } from "react";
import { MdSend, MdArrowDropDown } from "react-icons/md";
import soundEffect from "../sounds/open-chat.mp3";
import { MdAttachFile, MdInsertEmoticon } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import { FaRobot } from "react-icons/fa";

const AImessage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { text: string; type: string; time: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    const audio = new Audio(soundEffect);
    audio.play();
    setIsVisible(!isVisible);
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInputValue((prev) => `${prev} ${file.name}`);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newUserMessage = { text: inputValue, type: "user", time };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputValue("");

      setIsTyping(true);
      setTimeout(() => {
        const botReply =
          "This is an automatic response. How can I assist you further?";
        const audio = new Audio(soundEffect);
        audio.play();
        setIsTyping(false);
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
      }, 1500);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleEmojiClick = (emoji: { emoji: string }) => {
    setInputValue((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setTimeout(() => setShowEmojiPicker((prev) => !prev), 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-12 right-16">
      <div
        className={`bg-blue-100 text-white rounded-full h-12 w-12 md:h-16 md:w-16 h-20 w-20 flex justify-center items-center cursor-pointer shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleToggle}
        aria-label="Toggle Chat"
      >
        <img
          src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
          alt="Chat Icon"
          className="h-8 w-8 md:h-12 md:w-12"
        />
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out w-96 shadow-custom shadow-blue-200 rounded-2xl fixed ${
          isVisible
            ? "bottom-20 right-8 translate-y-0 opacity-100"
            : "bottom-12 right-8 translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-blue-600 text-white px-7 py-3 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center">
            <img
              src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
              alt="BotBat Icon"
              className="h-8 w-8 md:h-16 md:w-16 mr-1"
            />
            <span className="text-xl text-blue-50 md:text-2xl font-bold">
              Botbat
            </span>
          </div>
          <button
            onClick={handleToggle}
            className="hover:text-blue-400 text-blue-100"
            aria-label="Close Chat "
          >
            <IoIosArrowDown className="h-8 w-8 md:h-10 md:h-10  transition-transform duration-300 ease-in-out hover:scale-110 " />
          </button>
        </div>

        <div className="pb-4 space-y-4 h-96 overflow-auto bg-white transition-all duration-300 ease-in-out custom-scrollbar">
          <div className="relative bg-blue-400 text-white text-center px-7 pt-1 pb-8 text-xl overflow-hidden">
            <div className="flex flex-row gap-2 justify-center items-center text-blue-50 text-lg">
              {" "}
              Botbat AI is here to help you{" "}
              <FaRobot className="h-10 w-10 inline mb-1 " />{" "}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16">
              <svg
                className="w-full h-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="white"
                  d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,170.7C560,171,640,213,720,213.3C800,213,880,171,960,160C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
              alt="Bot Avatar"
              className="h-10 w-10"
            />
            <div className="bg-gray-100 p-3 rounded-full text-gray-600 max-w-xs">
              Welcome! What brings you here today..! How can I assist you today?
            </div>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex px-3 ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex flex-col space-y-1 max-w-xs ">
                <div
                  className={`p-3 rounded-3xl inline-block break-words transition-all duration-300 ease-in-out ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white w-auto rounded-tr "
                      : "bg-gray-100 text-gray-700 rounded-tl"
                  }`}
                >
                  {msg.text}
                </div>
                <div
                  className={`text-xs text-gray-400 mt-2 mx-4  ${
                    msg.type === "user" ? "self-end" : "self-start"
                  }`}
                >
                  {msg.type === "bot" ? `botbat ${msg.time}` : msg.time}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mx-3">
              <div className="flex flex-col space-y-1 max-w-xs">
                <div className="p-3 bg-gray-200 rounded-2xl inline-block">
                  <div className="typing-dots flex space-x-1">
                    <span className="dot bg-gray-500  w-2 h-2 rounded-full animate-bounce"></span>
                    <span className="dot bg-gray-500 w-2 h-2 rounded-full animate-bounce delay-[200ms]"></span>
                    <span className="dot bg-gray-500 w-2 h-2 rounded-full animate-bounce delay-[400ms]"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="flex items-center p-2  bg-blue-50 rounded-b-2xl">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button onClick={handleFileClick} className="flex items-center">
            <MdAttachFile className="w-7 h-7 text-gray-500 transition-transform duration-300 ease-in-out hover:scale-110" />
          </button>
          <div className="relative flex-grow">
            <div className="flex items-center  rounded-2xl p-2">
              {showEmojiPicker && (
                <div className="absolute bottom-full mb-2">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow border-none p-3 rounded-2xl me-2 focus:outline-none text-blue-900"
                placeholder="Type a message..."
              />
              <button onClick={toggleEmojiPicker} className="flex items-center">
                <MdInsertEmoticon className="w-7 h-7 text-gray-500 transition-transform duration-300 ease-in-out hover:scale-110" />
              </button>
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-full h-12 w-12 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 ml-2 hover:text-blue-600 hover:bg-white"
            aria-label="Send Message"
          >
            <MdSend className="w-7 h-7 " />
          </button>
        </div>
      </div>

      {/* Custom Scrollbar & Typing Dots Animation */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .typing-dots .dot {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default AImessage;
