import React from "react";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

interface FeatureItem {
  heading: string;
  text: string;
  list: string[];
  image: React.ElementType;
}
const items: FeatureItem[] = [
  {
    heading: "AI-Powered Marketing Boost ROI with Smart Engagement",
    text: "Leverage our advanced BOTBAT Engage platform or flexible API to send targeted marketing messages using our intelligent Broadcast or Dynamic Flow features.",
    image: image1,
    list: [
      "  Data-Driven Personalized Offers",
      "  AI-Optimized Marketing Campaigns",
      "Interactive Product Launches",
    ],
  },
  {
    heading: "Boost Conversion Rates with Personalized Offers",
    text: "Send automated promotional messages via API or Batbot system and engage customers through Answers chatbot or Conversations contact center",
    image: image2,
    list: [
      " Abandoned Cart Alerts",
      "  Efficient Order Management",
      "  Personalized Product Recommendations",
      "Seamless Reordering",
    ],
  },
  {
    heading: "Elevate Customer Satisfaction with Swift and Continuous Support",
    text: "Improve your support experience with our API or cloud contact center, Conversations, ensuring your customers receive quick and effective service anytime",
    image: image3,
    list: [
      " Instant responses via WhatsApp",
      " Guide customers to chat support",
      "  Personalized help from live agents",
      "  Subscription cancellations",
      " Timely updates for customers",
    ],
  },
  {
    heading: "Effortlessly Build Use Cases with Our Drag-and-Drop Interface",
    text: "Create workflows and customer journeys effortlessly without any coding required and start delivering convenient and relevant communications with your customers",
    image: image4,
    list: [
      " Automate replies to typical inquiries",
      "Initiate messages based on user actions and events",
      " Utilize customer data to create targeted message sequences",
    ],
  },
];

function Whatsappexperience() {
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4 text-center'>
        <div className='flex flex-col space-y-24'>
          {/* Step 1 */}
          {items.map((item, index) => (
            <div
              className={`flex flex-col md:flex-row-reverse
               items-start md:space-x-8 `}
              key={index}
            >
              <div className='w-full md:w-1/2 px-14'>
                <img
                  src={item.image}
                  alt='Automate communication'
                  className='rounded-lg object-cover object-center'
                />
              </div>
              <div
                className={`w-full px-12 md:w-1/2 text-start  mt-8 md:mt-24`}
              >
                <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                  {item.heading}
                </h2>
                <p className='text-lg'>{item.text}</p>
                <ul className='text-lg text-gray-600 list-disc text-start px-0 md:px-4 lg:px-8  list-inside my-5 marker:text-blue-800 '>
                  {item.list.map((listItem, idx) => (
                    <li key={idx}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whatsappexperience;
