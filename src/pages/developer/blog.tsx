import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import NewCard from "../../component/support/news-card";
import image3 from "../../images/doctor2.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";

const carditems = [
  {
    image: image3,
    heading: "Improving User Experiencevia Chatbot",
    paragraph:
      "The ideal user interface starts with a smart chatbot. Ensure your customers' experience is smooth and enjoyable, and attract them to stay with you longer",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "Converting Leads intoLoyal Customers",
    paragraph:
      " Attract and retain customers thanks to AI that turns potential customers into permanent fans of your brand. Every interaction is an opportunity to gain new loyalty",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "Raising Internal OperationsEfficiency through Automation",
    paragraph:
      "Transform your operations into a non-stop performance machine! With automation, reduce costs and increase productivity in ways you never imagined.",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "Improving Customer Interaction: Why Chatbots Are the Future",
    paragraph:
      "Explore ways chatbots can enhance customer interactions and increase satisfaction through our integrated solutions",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "How Chatbots Boost Your Sales Around the Clock",
    paragraph:
      "Leverage chatbots to make your business available to customers 24/7 and increase sales opportunities even outside traditional business hours",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "The Secret Behind Increasing Productivity in Your Company",
    paragraph:
      "Learn how smart automation enhances operational efficiency and reduces costs, giving you a competitive edge in your market",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "Boost Sales through Chatbot",
    paragraph:
      "Discover how chatbots can turn every inquiry into a golden sales opportunity. Start driving higher revenue with smart interactions that lead customers to purchase decisions",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "Smart Marketing with AI",
    paragraph:
      "Take your marketing campaigns to the next level with AI techniques. Get ready to achieve amazing results and increase conversions like never before",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
  {
    image: image3,
    heading: "Efficient Support Automation",
    paragraph:
      "It's time to save time and costs with customer support automation solutions. Maintain customer satisfaction with super-fast service delivery and unparalleled accuracy",
    explor: "Read more  ",
    arrow: FaCircleArrowRight,
    url: "/#",
  },
];
const Blog: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className=' py-8 md:py-16 my-28 md:my-48 bg-gray-200'>
        <div className='container   mx-auto text-center'>
          <div className='sm:rounded-0 text-center space-y-10'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold mt-5 '>
              BOTBAT Blog
            </h1>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold mt-5 '>
              Explore our latest blogs on conversational AI and automation
            </h1>
            <form className='max-w-lg mx-auto'>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block w-full p-3 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-400 focus:border-blue-400 outline-none'
                  placeholder='Search for documents or articles...'
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <NewCard theheader={""} carditems={carditems} />

      <nav aria-label='Page navigation example'>
        <ul className='flex items-center -space-x-px h-8 text-sm'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
            >
              <span className='sr-only'>Previous</span>
              <svg
                className='w-2.5 h-2.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 1 1 5l4 4'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              5
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'
            >
              <span className='sr-only'>Next</span>
              <svg
                className='w-2.5 h-2.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Blog;

export const Head: HeadFC = () => <title>Blog </title>;
