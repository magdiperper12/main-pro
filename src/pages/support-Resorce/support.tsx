import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import { FaImage } from "react-icons/fa";
import Layout from "../../component/layout/layout";
import SupportLayout from "../../component/support/support-layout";
import ConvContent from "../../component/conversation/conv-content";
// Define service features
const serviceFeatures = [
  {
    icon: FaImage,
    heading: "Guaranteed Fast Response",
    paragraph:
      "We understand the importance of quick response times when facing critical issues. That's why high-priority inquiries are immediately escalated, ensuring they are directed to the appropriate support team to resolve the problem quickly and efficiently.",
  },
  {
    icon: FaImage,
    heading: "Dedicated Technical Support Manager",
    paragraph:
      "You'll have a person who knows your setup and history of interactions with the system, allowing them to understand the issue faster and provide customized solutions without needing to re-explain everything from the beginning every time.",
  },
  {
    icon: FaImage,
    heading: "24/7 Comprehensive Support",
    paragraph:
      "We provide around-the-clock support, including phone, live chat, and web support. No matter the issue you're facing, you can reach out to our dedicated support team at any time of day or night and get immediate assistance to resolve any problem that may impact your business.",
  },
  {
    icon: FaImage,
    heading: "Easy Access to Experts",
    paragraph:
      "Benefit from the ability to directly communicate with our experts to get specialized technical consultations whenever you need them. Whether you need help troubleshooting a specific issue or seeking guidance on better utilizing the features, our team of experts is here to support you every step of the way.",
  },
];

const Support: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className='my-10 md:my-16'>
        <div className=' shadow-custom shadow-gray-500 w-full m-auto text-center pt-4 pb-10 space-y-7'>
          <h1 className='text-2xl md:text-3xl lg:text-3xl font-extrabold mt-5 leading-tight'>
            Search for the support you need...
          </h1>
          <form className='w-full mx-auto'>
            <div className='relative'>
              <input
                type='search'
                id='default-search'
                className='block  p-3 ps-10 text-md text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-400 focus:border-blue-400 outline-none w-3/4 md:w-1/2 m-auto'
                placeholder='Search for documents or articles...'
                required
              />
            </div>
          </form>
        </div>

        <div className=' shadow-custom shadow-gray-400 py-2  w-10/12 m-auto text-center  my-10 md:my-16 space-y-4'>
          <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight'>
            Specialized Consulting by Experts
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl m-auto w-3/4 px-10 pb-7'>
            Do you need help selecting the right solutions for your business?
            Our team of experts is here to assist you every step of the way.
          </p>
        </div>
      </div>

      <ConvContent
        theheader=''
        thescoundheader=''
        dispachitems={serviceFeatures} // Assuming 'dispatchItems' is the correct prop name
      />

      <SupportLayout
        direction={""}
        menuItems={[]}
        activeMenuItem={""}
        handleMenuClick={function (btn: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className=' my-10 md:my-16 shadow-custom shadow-gray-300  w-10/12 m-auto text-center   py-8'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold  leading-tight'>
          Direct Contact
        </h1>
        <p className='text-md md:text-lg lg:text-xl m-auto w-3/4 mt-4 mb-8 '>
          Get in touch with our support team via chat or phone for immediate
          assistance
        </p>
        <div className=' flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-5'>
          <button className='bg-blue-700 text-white rounded-md px-4 py-3  w-full lg:w-1/6 md:w-auto'>
            Call Us
          </button>
          <button className='bg-white text-blue-900 border border-blue-800 rounded-lg px-4 py-3  w-full lg:w-1/6 md:w-auto'>
            Start Chat Now
          </button>
        </div>
      </div>
      <div className='pb-6  shadow-custom shadow-gray-300 w-10/12 m-auto text-center  my-10 md:my-16 space-y-6  '>
        <h1 className='pt-6 text-xl md:text-3xl lg:text-5xl font-extrabold  leading-tight'>
          Direct Contact
        </h1>
        <input
          type='text'
          id='username'
          className='bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-3/4 p-2.5 m-auto outline-none'
          placeholder='Full Name'
          required
        />
        <input
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-3/4 p-2.5 m-auto outline-none'
          placeholder='Email Address'
          required
        />

        <select
          id='countries'
          className='bg-gray-50 border border-gray-400 text-blue-900 text-sm rounded-lg focus:ring-blue-500  block w-3/4 p-2.5 m-auto outline-none '
        >
          <option selected>select Category</option>
          <option value='Category'>select Category</option>
          <option value='Support'>Technical Support</option>
          <option value='Inquiry'>General Inquiry</option>
        </select>

        <textarea
          id='message'
          rows='4'
          class='block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 focus:ring-blue-500  m-auto outline-none'
          placeholder='Detailed Description of the issue'
        ></textarea>
        <button className='bg-blue-600 text-white rounded-lg px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto '>
          Call Us
        </button>
      </div>
    </Layout>
  );
};

export default Support;

export const Head: HeadFC = () => <title>Support</title>;
