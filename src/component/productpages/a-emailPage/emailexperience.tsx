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
    heading: "Design customized and compelling email messages",
    text: "Seamlessly construct your new campaigns witha feature-packed drag-and-drop tool",
    image: image1,
    list: [
      "  Ready-made, dynamic, and responsive components",
      "  Template library for common scenarios",
      "Streamlined import of your HTML designs",
      "  Customization featuresBuilt-in safeguards against",
    ],
  },
  {
    heading: "Elevate your email experience using dynamic AMP components",
    text: "Create and send captivating messages with AMP's interactive features through API",
    image: image2,
    list: [
      "  Dynamic product showcase with interactive carousel",
      "  In-email subscription confirmation",
      "  ollapsible FAQ section in email using accordion",
      "  Implement custom interactive elements",
    ],
  },
  {
    heading: "Gather data, extract insights and implement strategies",
    text: "Extract data from email analytics, scrutinize reports for delivery issues, grasp message flow, and track every interaction",
    image: image3,
    list: [
      "  Delivery success rate",
      "  Email open frequency",
      "  Click-through count",
      "  Subscription cancellations",
      "    Delivery failures",
    ],
  },
  {
    heading: "Enhancing Email Deliverability",
    text: "Advanced tools to boost email delivery rates and ensure inbox placement",
    image: image4,
    list: [
      "  Authentication Protocols",
      "  Dedicated IP Address",
      "   IP Warm-up",
      "  Email Validation",
    ],
  },
];

function Emailexperience() {
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

export default Emailexperience;
