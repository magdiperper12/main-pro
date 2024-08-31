import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import TableExplor from "../../component/support/table";

interface Item {
  first: string;
  secound: string;
  date: Date;
  last: string;
}

interface FeatureItem {
  tableName: string;
  items: Item[];
}

const experienceItems: FeatureItem[] = [
  {
    tableName: "Conversational Services",
    items: [
      {
        first: "Custom Gen AI Chatbot Builder",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Social Listening and Engagement",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Gen AI Website Navigator",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "NLU and Role Based Chatbot",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
    ],
  },
  {
    tableName: "Messaging APIs",
    items: [
      {
        first: "SMS",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "WhatsApp",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Messenger",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Instagram",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Telegram",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "BYOC",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
    ],
  },

  {
    tableName: "Data and Analytics",
    items: [
      {
        first: "CDP (Customer Data Platform)",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Disposition and Fb Management",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Analytical Dashboard",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
    ],
  },

  {
    tableName: "Applications",
    items: [
      {
        first: "BYOC",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Notification Engine",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Omni-Channel Verification",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Programmable Contact Center",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
    ],
  },
  {
    tableName: "Workflow Orchesteration",
    items: [
      {
        first: "Buisness Initiated WorkFlow",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "User Initiated WorkFlow",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
    ],
  },
];

const SecoundSupport: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        {/* <div>box-shadow: 4px 4px 22px -4px #1B1F26B8; */}
        <div className='mt-24 shadow-blue-100 shadow-custom md:mt-32 lg:mt-40 w-10/12 m-auto text-center my-7 md:my-12 space-y-5 pt-3 pb-8'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight'>
            Botbat system status
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl m-auto w-full '>
            All systems are operating normally
          </p>
          <p className='text-lg md:text-xl lg:text-2xl m-auto w-full '>
            Last Updated: 2024-08-22
          </p>
        </div>
        <div className='mt-20 md:mt-24 lg:mt-28 w-10/12 m-auto text-center my-7 md:my-12 space-y-3'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight lg:w-1/2 sm:w-3/4 m-auto text-wrap'>
            A comprehensive view of our system performance
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl  w-full p-10 lg:w-1/2 sm:w-3/4 m-auto'>
            Track the real-time status and health of every critical system in
            our platform
          </p>
        </div>
        <div className='space-y-3 p-5 shadow-lg shadow-blue-100 rounded-lg absolute bottom-5 start-5 z-50 bg-white'>
          <ul>
            <li>
              <span className='bg-green-700 rounded-full w-5 h-5 inline-block me-2'></span>
              Operational
            </li>
            <li>
              <span className='bg-yellow-400 rounded-full w-5 h-5 inline-block me-2'></span>
              Minor issues
            </li>
            <li>
              <span className='bg-red-500 rounded-full w-5 h-5 inline-block me-2'></span>
              Major outage
            </li>
            <li>
              <span className='bg-blue-600 rounded-full w-5 h-5 inline-block me-2'></span>
              Development
            </li>
          </ul>
        </div>
      </div>

      <TableExplor experienceItems={experienceItems} />

      <div className='relative overflow-x-auto mb-6 w-3/4 m-auto bg-zinc-50 my-24 px-5  pt-5 rounded-md  border'>
        <div className='mb-2 text-lg font-semibold text-gray-800 '>
          Scheduled updates and maintenance
        </div>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
          <thead className='text-xs text-white uppercase bg-blue-600 font-bold text-start '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Maintenance history
              </th>
              <th scope='col' className='px-6 py-3'>
                Expected time
              </th>
              <th scope='col' className='px-6 py-3'>
                Affected service
              </th>
              <th scope='col' className='px-6 py-3'>
                Additional Notes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=' border-t '>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                2024-09-01
              </td>
              <td className='px-6 py-4'>02:00 - 04:00 PM</td>
              <td className='px-6 py-4'>SMS</td>
              <td className='px-6 py-4'>Performance improvements</td>
            </tr>
            <tr className=' border-t '>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                2024-09-05
              </td>
              <td className='px-6 py-4'>01:00 - 03:00 PM</td>
              <td className='px-6 py-4'>WhatsApp API</td>
              <td className='px-6 py-4'>Upgrade servers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className='mt-24 shadow-blue-100 shadow-custom  md:mt-32 lg:mt-40  m-auto text-center my-7 md:my-12 space-y-3  px-10 py-6 md:w-1/3 sm:w-3/4 rounded-lg'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-blue-800 font-extrabold mt-5 leading-tight m-auto w-auto'>
            Report an Issue
          </h1>
        </div>

        <div className='mt-24 shadow-blue-100 shadow-custom md:mt-32 lg:mt-40  md:w-10/12 sm:11/12 m-auto text-start my-7 md:my-12 space-y-3 p-10 '>
          <div className='md:w-3/4 m-auto space-y-7'>
            <div>
              <label
                htmlFor='selection'
                className='block mb-2 text-xl w-full  text-gray-900 font-bold'
              >
                Affected Service
              </label>
              <select
                id='selection'
                className='bg-gray-50 border w-full border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500  block  p-2.5 m-auto outline-none '
              >
                <option selected>select Service</option>
                <option value='Category'>Custom Gen AI Chatbot Builder</option>
                <option value='Support'>Social Listening and Engagement</option>
                <option value='Inquiry'>Gen AI Website Navigator</option>
                <option value='Inquiry'>NLU and Role Based Chatbot</option>
                <option value='Inquiry'>SMS</option>
                <option value='Inquiry'>WhatsApp</option>
                <option value='Inquiry'>Messenger</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-2 text-xl  w-full text-gray-900 font-bold'
              >
                Description of the Issue
              </label>
              <textarea
                id='message'
                rows='4'
                class='block p-2.5  text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  m-auto outline-none'
                placeholder='Detailed Description of the issue'
              ></textarea>
            </div>
            <div>
              <label
                htmlFor='username'
                className='block mb-2 text-md w-full font-medium text-gray-900 '
              >
                Full Name*
              </label>
              <input
                type='text'
                id='username'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full  p-2.5 m-auto outline-none'
                placeholder='Full Name'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-md w-full font-medium text-gray-900 '
              >
                Email Address*
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block  w-full p-2.5 m-auto outline-none'
                placeholder='Email Address'
                required
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block mb-2 text-md w-full font-medium text-gray-900 '
              >
                Email Address*
              </label>
              <input
                type='tel'
                id='phone'
                className='bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block  p-2.5 m-auto outline-none'
                placeholder='Email Address'
                required
              />
            </div>

            <div className=' w-full text-start space-y-2'>
              <h2>Attach Files (Optional)</h2>
              <span>File selection : </span>
              <input
                className=' w-1/4 text-sm text-blue-900 border border-blue-300 rounded-lg cursor-pointer bg-blue-50 inline-block'
                id='file_input'
                type='file'
              />
            </div>
          </div>
          <div className=' w-full text-center '>
            <button className='bg-blue-600 text-white rounded-lg px-4 py-3 mb-2 md:mb-0  lg:w-1/6 md:w-auto m-auto mt-6'>
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SecoundSupport;

export const Head: HeadFC = () => <title>SecoundSupport</title>;
