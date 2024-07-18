import React from "react";

interface FeatureItem {
  heading: string;
  paragraph: string;
}

const items: FeatureItem[] = [
  {
    heading: "BOTBAT Engage",
    paragraph:
      "Design and launch intelligent communication campaigns using customized message templates on our advanced customer interaction platform",
  },
  {
    heading: "BOTBAT Insights",
    paragraph:
      "Analyze and understand your customers' behavior by collecting vital data and creating detailed profiles using our state-of-the-art customer analytics platform",
  },
  {
    heading: "BOTBAT Connect",
    paragraph:
      "Empower your team to efficiently manage multiple conversations and instantly access past interaction records through our cloud-based contact center",
  },
  {
    heading: "BOTBAT AI Assistant",
    paragraph:
      "Develop smart AI-powered chatbots on our user-friendly platform to provide immediate and personalized customer support",
  },
];

function WhatsappDispatch() {
  return (
    <div>
      <section className=' py-20 mt-20'>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0 '>
          <div className='text-center pb-20'>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              Transform Your WhatsApp Experience with BOTBAT AI Solutions
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
              Unleash the Power of AI-Driven Chatbots and Automated Messaging
              for Seamless Customer Engagement
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 items-start w-11/12 m-auto'>
            {items.map((item, index) => (
              <div
                key={index}
                className='text-center bg-zinc-100 p-10  h-72 rounded-xl border-2 border-zinc-200'
              >
                <p className='text-3xl font-bold text-gray-800 mb-4'>
                  {item.heading}
                </p>
                <p className='text-lg text-gray-600'>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatsappDispatch;
