import React from "react";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

function Journey() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/2">
              <img src={image1} alt="Automate communication" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 text-left md:text-right mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4">Automate your communication workload with Botbat</h2>
              <p className="text-lg">Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
            <div className="w-full md:w-1/2">
              <img src={image2} alt="AI chatbot support" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 text-left mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4">Support with our AI chatbot by your side</h2>
              <p className="text-lg">Our AI chatbot assists you in handling customer queries efficiently. Enhance customer support with our intelligent chatbot solutions.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/2">
              <img src={image3} alt="Engage with customers" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 text-left md:text-right mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4">Engage Better with your Customers</h2>
              <p className="text-lg">Use our tools to engage with your customers on a deeper level. Understand their needs and preferences to offer personalized solutions.</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
            <div className="w-full md:w-1/2">
              <img src={image4} alt="Agent involvement" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 text-left mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4">Involve your Agent whenever you need</h2>
              <p className="text-lg">Seamlessly transition from automated bots to human agents whenever necessary. Ensure your customers get the best support experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
