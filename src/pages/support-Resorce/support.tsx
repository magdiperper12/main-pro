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
      <div>
        <div className='mt-24 md:mt-32 lg:mt-40 shadow-lg shadow-blue-100 w-full m-auto text-center p-10 space-y-7'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight'>
            Search for the support you need...
          </h1>
          <form className='max-w-md mx-auto'>
            <label
              htmlFor='search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only'
            >
              Search for the help you need... (e.g., reset password)
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='search'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Search support topics...'
                required
              />
            </div>
          </form>
        </div>

        <div className='mt-24 shadow-blue-100 shadow-custom py-2   md:mt-32 lg:mt-40  w-10/12 m-auto text-center my-7 md:my-12 space-y-3'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight'>
            Specialized Consulting by Experts
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl m-auto w-3/4 p-10'>
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

      <div className='pt-10  text-center text-3xl font-bold'>
        Explore Support Categories
      </div>

      <SupportLayout
        direction={""}
        menuItems={[]}
        activeMenuItem={""}
        handleMenuClick={function (btn: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className='mt-24 shadow-blue-100   md:mt-28 lg:mt-16 shadow-custom w-10/12 m-auto text-center my-7 md:my-12 space-y-3 pb-10 pt-3'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight'>
          Direct Contact
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl m-auto w-3/4 p-10'>
          Get in touch with our support team via chat or phone for immediate
          assistance
        </p>
        <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-5'>
          <button className='bg-blue-700 text-white rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto'>
            Call Us
          </button>
          <button className='bg-white text-blue-900 border border-blue-600 rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto'>
            Start Chat Now
          </button>
        </div>
      </div>
      <div className='mt-24 shadow-blue-100  md:mt-32 lg:mt-40 shadow-lg w-10/12 m-auto text-center my-7 md:my-12 space-y-3 pb-10 '>
        <input
          type='text'
          id='username'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-3/4 p-2.5 m-auto outline-none'
          placeholder='Full Name'
          required
        />
        <input
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-3/4 p-2.5 m-auto outline-none'
          placeholder='Email Address'
          required
        />

        <select
          id='countries'
          className='bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500  block w-3/4 p-2.5 m-auto outline-none '
        >
          <option selected>select Category</option>
          <option value='Category'>select Category</option>
          <option value='Support'>Technical Support</option>
          <option value='Inquiry'>General Inquiry</option>
        </select>

        <textarea
          id='message'
          rows='4'
          class='block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  m-auto outline-none'
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
