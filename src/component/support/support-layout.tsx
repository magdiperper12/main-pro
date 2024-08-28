import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../styles/global.css";
import Supportexplor from "./support-explor";
import image3 from "../images/customer_support.webp";
import MobileNav from "../layout/mobile-nav";
import { PageProps } from "gatsby";

// Define FAQ items
const PlatformItems = [
  {
    question: " Create an Account",
    answer:
      "To begin using Botbat, you'll first need to create an account. You can do this by visiting the registration page and filling out the required information.",
  },
  {
    question: " Customize Your Settings",
    answer:
      "After creating your account, you can customize the settings to fit your needs. Be sure to review the security settings and accept the terms and conditions.",
  },
  {
    question: " Start Using the Botbat",
    answer:
      "Now that you've set up your account, you can start creating and managing your own bots. Follow the instructions in the bot creation guide.",
  },
];

// Define feature items
const Platformfeature = [
  {
    heading: "Getting Started with Botbat",
    text: "Welcome to the Botbat Quick Start Guide. We'll outline the basic steps you need to start using our platform effectively.",
    image: image3,
    items: PlatformItems,
  },
];

const LicensesItems = [
  {
    question: " Choose the Appropriate Plan",
    answer:
      "We have multiple options that include both free and paid plans. Make sure to review the Plans and Pricing page to identify the most suitable option.",
  },
  {
    question: " Activate the Subscription",
    answer:
      "After selecting the plan, you can activate the subscription by visiting the activation page and following the instructions.",
  },
  {
    question: " Manage Your Licenses",
    answer:
      "You can manage your licenses through your account dashboard. You can update your plan or cancel the subscription if needed.",
  },
];

const Licensesfeature = [
  {
    heading: "Understanding Licenses and Subscriptions",
    text: "Botbat offers a variety of licenses and subscriptions to meet the needs of different users.",
    image: image3,
    items: LicensesItems,
  },
];

const TroubleshootingItems = [
  {
    question: " Not Receiving Notifications or Alerts",
    answer:
      "Check the notification settings on your account. Ensure that notifications are enabled and that Botbat is properly integrated with the services.",
  },
  {
    question: " Bot Suddenly Stops Working",
    answer:
      "The cause may be a connection disruption or a service outage. Check the service status on the System Status page, and then restart Botbat.",
  },
  {
    question: " Bot Incompatibility with Other Tools",
    answer:
      "Make sure you are using compatible versions of those tools. Also, check the API settings and integration keys to ensure they are correct and up-to-date.",
  },
];

const Troubleshootingfeature = [
  {
    heading: "Troubleshooting",
    text: "We provide solutions for common issues you may encounter while using the Botbat platform.",
    image: image3,
    items: TroubleshootingItems,
  },
];

const InSupportItems = [
  {
    question: " System Outage",
    answer:
      "First ensure that you have an active internet connection. If the issue persists, try restarting the system or contact the technical support team.",
  },
  {
    question: " Page Loading Problems",
    answer:
      "If the pages are not loading correctly, try clearing the cache and cookies in your browser. Trying a different browser may also help.",
  },
  {
    question: " Update Issues",
    answer:
      "Make sure you have the latest version of the software. You can check the Updates page for the most up-to-date version.",
  },
];

const InSupportfeature = [
  {
    heading: "Technical Support",
    text: "We provide solutions and support for the technical issues you may encounter while using the Botbat platform.",
    image: image3,
    items: InSupportItems,
  },
];

const ManagementItems = [
  {
    question: " Updating Account Information",
    answer:
      "You can update your account information, such as email and password, by visiting the Account Settings page. Remember to save the changes.",
  },
  {
    question: " Resetting Password",
    answer:
      "If you have forgotten your password, you can reset it by accessing the Password Reset page.",
  },
  {
    question: " Managing Subscriptions",
    answer:
      "You can view your subscription details or update your plan through the Account Dashboard. You can also cancel your subscription if needed.",
  },
];

const Managementfeature = [
  {
    heading: "Account Management",
    text: "We provide guidance on how to manage your personal account on the Botbat platform.",
    image: image3,
    items: ManagementItems,
  },
];

const FAQItems = [
  {
    question: "How can I review activity logs for my bots?",
    answer:
      "You can review the activity logs for your bots by going to the 'Activity Logs' section in the dashboard. Here, you can view all the operations performed by the bot, which helps you track performance and identify any potential issues.",
  },
  {
    question: "Can I integrate Botbat with other tools?",
    answer:
      "Yes, you can integrate Botbat.io with various external tools and applications. Go to the 'Integrations' section in the dashboard, where you can find instructions and API keys needed to set up integrations.",
  },
  {
    question: "How can I set up a customized support plan for my needs?",
    answer:
      "You can set up a customized support plan by contacting our sales team. Our team will review your requirements and provide a support plan that aligns with the scale of your business activities and the services you need.",
  },
  {
    question: "How can I ensure the security of my account?",
    answer:
      "Make sure to enable two-factor authentication (2FA) through the security settings in the dashboard. It's also recommended to change your password regularly and use strong passwords.",
  },
  {
    question: "What are the policies regarding refunds?",
    answer:
      "The refund policies depend on the type of subscription you have purchased. If you are unsatisfied with the service, you can contact the support team to find out if you are eligible for a refund, in accordance with the terms of service.",
  },
  {
    question: "How can I add other users to manage Botbat?",
    answer:
      "You can add other users to manage your Botbat by navigating to the 'Team Management' section in the dashboard. You can invite team members and grant them different permissions based on the roles they need.",
  },
];

const FAQfeature = [
  {
    heading: "",
    text: "",
    image: undefined,
    items: FAQItems,
  },
];

const SupportLayout: React.FC<PageProps> = () => {
  const menuItems = [
    { name: "Platform Overview", btn: "Platform" },
    { name: "Licenses & Subscriptions", btn: "Licenses" },
    { name: "Troubleshooting", btn: "Troubleshooting" },
    { name: "Support", btn: "InSupport" },
    { name: "Account Management", btn: "Management" },
    { name: "FAQ", btn: "FAQ" },
  ];

  const [direction, setDirection] = useState<string>("ltr");
  const [activeMenuItem, setActiveMenuItem] = useState<string>("Platform");
  useEffect(() => {
    const savedDirection = localStorage.getItem("direction") || "ltr";
    setDirection(savedDirection);
  }, []);

  const handleMenuClick = (btn: string) => {
    setActiveMenuItem(btn);
  };

  const getDataForActiveMenu = () => {
    switch (activeMenuItem) {
      case "Platform":
        return { experienceItems: Platformfeature, items: PlatformItems };
      case "Licenses":
        return { experienceItems: Licensesfeature, items: LicensesItems };
      case "Troubleshooting":
        return {
          experienceItems: Troubleshootingfeature,
          items: TroubleshootingItems,
        };
      case "InSupport":
        return { experienceItems: InSupportfeature, items: InSupportItems };
      case "Management":
        return { experienceItems: Managementfeature, items: ManagementItems };
      case "FAQ":
      default:
        return { experienceItems: FAQfeature, items: FAQItems };
    }
  };

  const { experienceItems } = getDataForActiveMenu();

  return (
    <div dir={direction} id='root' className='min-h-screen bg-white font-cairo'>
      <Helmet defer={false}>
        <link
          rel='icon'
          type='image/svg+xml'
          href='https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg'
        />
      </Helmet>
      <header className={direction}>
        <nav className='w-full shadow-sm flex lg:justify-between lg:border-b-2 lg:border-blue-50 items-center py-2 space-x-4 flex-nowrap justify-around p-10 text-center'>
          <div className='flex items-center justify-center'>
            <MobileNav />
          </div>
          <div
            className='hidden lg:flex lg:flex-grow lg:items-center px-4 m-auto'
            id='navbarSupportedContent1'
          >
            <ul className='flex flex-col lg:flex-row list-none space-y-4 lg:space-y-0 lg:space-x-6 gap-16 justify-center w-full p-8'>
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className='my-2 lg:my-0 opacity-0 animate-fadeIn focus:border-b-4 duration-300 ease-in-out border-blue-900'
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button
                    className='text-black/80 transition-colors duration-200 hover:text-black/90 font-bold focus:text-blue-600  '
                    onClick={() => handleMenuClick(item.btn)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <Supportexplor experienceItems={experienceItems} />
    </div>
  );
};

export default SupportLayout;
