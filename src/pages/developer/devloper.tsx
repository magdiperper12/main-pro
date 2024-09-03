import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import { IoDocumentText } from "react-icons/io5";
import { FaBlog, FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";
import image3 from "../../images/doctor2.jpg";
import fileicon from "../../images/fileicon.png";
import apiicon from "../../images/APIicon.png";
import github from "../../images/github.png";
import blog from "../../images/blog.png";
import bostman from "../../images/bostman.png";
import apienhance from "../../images/apienhance.png";
import integration from "../../images/integration.png";
import performance from "../../images/performance.png";
import support from "../../images/support.png";
import Layout from "../../component/layout/layout";
import ConvFooter from "../../component/conversation/conv-footer";
import ThirdConvContent from "../../component/conversation/third-conv-content";
import Question from "../../component/conversation/Question";
import News from "../../component/support/news";
import Latest from "../../component/support/latest";

const dispachitems = [
  {
    icon: fileicon,
    heading: "Documentation",
    paragraph: "Comprehensive guides and references for BotBat's AI services",
    explor: "Get Started",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/support",
  },
  {
    icon: blog,
    heading: "Blog",
    paragraph:
      "Stay updated with the latest features, best practices, and case studies",
    explor: "Read Latest Posts",
    arrow: FaCircleArrowRight,
    url: "/developer/blog",
  },
  {
    icon: apiicon,
    heading: "APIs",
    paragraph: "Detailed API documentation for seamless integration",
    explor: "Explore APIs",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
  {
    icon: github,
    heading: "GitHub",
    paragraph:
      "Access our open-source projects and contribute to the community",
    explor: "Visit GitHub",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
  {
    icon: bostman,
    heading: "Postman",
    paragraph: "Test our APIs and explore endpoints using Postman collections",
    explor: "Use Postman",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
];

const items = [
  {
    question: "How can I get technical support if I encounter a problem?",
    answer:
      "If you encounter any issues, you can check the 'FAQ' section for answers to common questions. If you don't find the answer you're looking for, you can contact our support team through the 'Contact Us' page or via the social media channels listed in the footer",
  },
  {
    question:
      "What are the best practices for using BotBat's AI services in my api?",
    answer:
      "You can visit our blog for best practices and case studies on how to effectively use BotBat's AI services. The blog includes tips on performance optimization, seamless integration, and real-world examples",
  },
  {
    question: "How can I test API integration before deploying?",
    answer:
      'You can use the Postman collections available in the "Postman" section to test the APIs before deployment. These collections provide a safe environment to test various requests and validate responses',
  },
  {
    question: "Are there any costs associated with using BotBat's APIs?",
    answer:
      'Yes, we offer different pricing plans based on usage volume. You can review the pricing documentation in the "Documentation" section to learn more about the available options, or contact our sales team for a customized plan',
  },
  {
    question:
      "How can I contribute to developing BotBat's open-source services?",
    answer:
      "We encourage the community to contribute to the development of BotBat's open-source services. You can start by visiting the 'GitHub' section to access the repositories and follow the contribution guidelines provided to add improvements, fix issues, or even create new features",
  },
];

const newsitem = [
  {
    header: "Smart Customer Support",
    text: " customer support with BotBat's smart bots to reduce wait times and increase satisfaction",
    buttonText: "Click One",
    image: image3,
    url: "/#",
  },
  {
    header: "Effective Promotional Campaigns",
    text: "Use BotBat's tools to create promotional campaigns and quickly gather customer data",
    buttonText: "Click One",
    image: image3,
    url: "/#",
  },
  {
    header: "AI and Agent Integration",
    text: "Integrate human agents into automated workflows for personalized customer experiences",
    buttonText: "Click One",
    image: image3,
    url: "/#",
  },
];

const latestitems = [
  {
    icon: performance,
    heading: "Performance Improvements",
    paragraph:
      "This update includes significant improvements in system performance. Response times have been reduced and request processing efficiency has been increased to ensure a smoother and faster user experience",
    explor: "Learn More",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/support",
  },
  {
    icon: integration,
    heading: "New Integrations",
    paragraph:
      "This update focuses on introducing new integrations with external services and platforms, allowing users to easily expand their use of BotBat and achieve better results in their work",
    explor: "Learn More",
    arrow: FaCircleArrowRight,
    url: "/developer/blog",
  },
  {
    icon: apienhance,
    heading: "API Enhancements",
    paragraph:
      "This update includes improvements to the available APIs, with new options added for developers to enable easier and more effective integration with their systems",
    explor: "Learn More",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
  {
    icon: support,
    heading: "Support for Additional Platforms",
    paragraph:
      "This update includes support for new platforms, allowing users better integration with other systems and increasing the effectiveness of services provided through BotBat",
    explor: "Learn More",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
];

const Develop: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className='  my-10 md:my-16 bg-zinc-200'>
        <div className='container mx-auto text-center'>
          <div className='sm:rounded-0 text-center space-y-10'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold mt-5 '>
              developers and documentation - Botbat 
            </h1>
            <form className='w-full mx-auto'>
              <div className='relative'>
                <input
                  type='search'
                  id='default-search'
                  className='block  p-3 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-400 focus:border-blue-400 outline-none w-3/4 md:w-1/2 m-auto'
                  placeholder='Search for documents or articles...'
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <ConvFooter
        title='  Developers & Documentation'
        secondTitle="Welcome to Botbat's Developer Resources and Documentation everything you need to integrate our AI bot services into your applications"
        button='Explore Docs'
        secondButton='Visit the Blog'
      />
      <ThirdConvContent dispachitems={dispachitems} theheader='' />
      <News
        feature='Featured Content'
        theheader='See what’s new with Botbat'
        paragraph='Stay up to with the latest news and articles from Botbat'
        newsitem={newsitem}
      />
      <Latest theheader={"Latest Updates"} latestitems={latestitems} />
      <Question items={items} theheader='' />
    </Layout>
  );
};

export default Develop;

export const Head: HeadFC = () => <title>Develop&docs </title>;
