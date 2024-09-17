import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const BookADemo: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <div className=" grid grid-cols-2  items-center">
          <div className="col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 min-h-screen flex  flex-col ps-10 justify-center my-10">
            <div className="mb-5 lg:mb-12 md:mb-8">
              <h1 className="text-blue-950 text-xl md:text-3xl lg:text-5xl sm:text-4xl font-bold py-5">
                Demo overview
              </h1>
              <p className="text-blue-900 text-md lg:text-xl md:text-lg font-bold">
                in our demo session,we will cover :{" "}
              </p>
              <ul className=" marker:text-blue-800 text-lg text-blue-950 list-disc list-inside ps-5 py-5 space-y-2">
                <li className="hover:text-blue-800 hover:translate-x-2.5 duration-200">
                  key features of our tools
                </li>
                <li className="hover:text-blue-950 hover:translate-x-2.5 duration-200">
                  benefits for your buisiness
                </li>
                <li className="hover:text-blue-950 hover:translate-x-2.5 duration-200">
                  practical examples
                </li>
                <li className="hover:text-blue-950 hover:translate-x-2.5 duration-200">
                  the session lasts 30-45 minutes
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-blue-950 text-xl md:text-3xl lg:text-5xl font-bold py-5">
                contact us for more information{" "}
              </h1>
              <p className="text-blue-900 text-lg lg:text-xl md:text-lg sm:text-lg ">
                dont hesitate to reach out to us for inquiries about our
                services our team is ready to assist you with any question or
                support you may need
              </p>
              <div className="text-blue-800">
                <h3 className="  ps-5 py-2 mt-5  ">
                  {" "}
                  <FaPhone className="h-12 w-12 p-2 inline rounded-full border-2 border-blue-200 shadow-md shadow-blue-300 me-2  " />{" "}
                  <span className="bold text-lg "> 01021589478</span>
                </h3>
                <h3 className=" text-lg ps-5 py-2  ">
                  {" "}
                  <CiMail className="h-12 w-12 p-2 inline rounded-full border-2 border-blue-200 shadow-md shadow-blue-300 me-2  " />{" "}
                  <span className="bold text-lg "> info@gmail.com</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1  sm:col-span-2  h-auto flex justify-center  my-20 ">
            <div className="flex h-auto flex-col w-10/12 m-auto  px-6 py-12 lg:px-8 shadow-xl  shadow-blue-200">
              <div className="sm:mx-auto sm:w-full sm:max-w-lg ">
                <h2 className="mt-3 text-center text-4xl lg:text-6xl md:text-5xl sm:text-4xl font-bold  leading-9 tracking-tight text-blue-950 pb-5 ">
                  Book a Demo
                </h2>
                <p className="text-blue-900 text-lg lg:text-xl md:text-lg sm:text-lg font-medium text-center">
                  Discover how our AI tool can enhance your business
                </p>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 ps-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      business Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 ps-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      company name
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 ps-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      phone number
                    </label>
                    <input
                      type="number"
                      id="phone_number"
                      className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 ps-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <select
                      id="countries"
                      className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 px-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    >
                      <option value="EG" selected>
                        Egypt
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="date_time"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Preferd Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      id="date_time"
                      className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 px-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block w-full rounded-md border-0 outline-none py-1.5 text-blue-900 ps-2 shadow-sm ring-1 ring-inset ring-blue-300  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex  justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-3/4 m-auto "
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookADemo;

export const Head: HeadFC = () => <title>Book a demo</title>;
