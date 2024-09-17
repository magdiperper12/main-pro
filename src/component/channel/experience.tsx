import React from "react";

interface FeatureItem {
  heading: string;
  text: string;
  image: string;
  list: string[];
}

interface ExperienceProps {
  experianceitems: FeatureItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experianceitems }) => {
  return (
    <div className="my-10 md:my-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col space-y-12 md:space-y-12 lg:space-y-16 px-1 md:px-0 lg:px-0">
          {/* Step 1 */}
          {experianceitems.map((item, index) => (
            <div
              className={`flex flex-col md:flex-row-reverse
                 items-start md:space-x-8 `}
              key={index}
            >
              <div className="w-full md:w-1/2 lg:px-14 mt-0 md:mt-12 lg:mt-0 lg:-mt-5">
                <img
                  src={item.image}
                  alt="Automate communication"
                  className="rounded-lg object-cover object-center hover:scale-105 duration-200"
                />
              </div>
              <div className={` lg:~px-12/60  text-start   w-full lg:w-1/2`}>
                <h2 className="text-xl md:text-3xl lg:text-4xl  font-semibold lg:my-7 my-5  ">
                  {item.heading}
                </h2>
                <p className="text-md md:text-lg lg:text-xl lg:my-7 my-5">
                  {item.text}
                </p>
                <ul className="text-md md:text-lg lg:text-xl text-gray-600 list-disc text-start px-0 md:px-4 lg:px-8  list-inside  marker:text-blue-800 lg:my-7 my-5">
                  {item.list.map((listItem, idx) => (
                    <li
                      key={idx}
                      className="hover:translate-x-2 duration-200 hover:text-blue-900 cursor-pointer"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
