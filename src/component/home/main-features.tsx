import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HiOutlineChatAlt2, HiOutlineMail } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import { TiFlowMerge } from "react-icons/ti";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa";

const MainFeatures: React.FC = () => {
  // // State values
  // const [title, setTitle] = useState("");
  // const [subtitle, setSubTitle] = useState("");
  // const [id, setId] = useState<number | undefined>(undefined);
  // const [header, setHeader] = useState("");
  // const [paragraph, setParagraph] = useState("");
  // const [url, setUrl] = useState("");
  // const [text, settext] = useState("");

  // const myData = useStaticQuery(graphql`
  //   query MyQuery {
  //     strapi {
  //       home {
  //         data {
  //           id
  //           attributes {
  //             featuresSection {
  //               data {
  //                 id
  //                 attributes {
  //                   description
  //                   subTitle
  //                   header
  //                   features {
  //                     data {
  //                       id
  //                       attributes {
  //                         subtitle
  //                         header
  //                         dicription
  //                         mediaUrls
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // useEffect(() => {
  //   if (myData) {
  //     const featuresSection =
  //       myData.strapi.home.data.attributes.featuresSection;

  //     // Assuming you want to set data for the first feature or dynamically based on other conditions
  //     const firstFeature =
  //       featuresSection.data.attributes.features.data[0].attributes;

  //     // Set the state values
  //     setId(featuresSection.data.id);
  //     setTitle(featuresSection.data.attributes.header);
  //     setSubTitle(featuresSection.data.attributes.subTitle);
  //     settext(featuresSection.data.attributes.dicription[0].children[0].text);
  //     setHeader(firstFeature.header);
  //     setParagraph(
  //       firstFeature.dicription[0].children
  //         .map((child: any) => child.text)
  //         .join(" ")
  //     );
  //     setUrl(firstFeature.url);
  //   }
  // }, [myData]);

  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center pb-10 md:pb-20">
          <p className="text-lg md:text-xl lg:text-2xl font-extrabold">
            {"subtitle"}
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight">
            {"title"}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-5 flex w-3/4 m-auto">
            {"dscription"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
          <div className="text-center">
            <img
              src={"TiFlowMerge"}
              alt="ai power"
              className="text-5xl md:text-6xl  text-blue-600 mb-2 mx-auto"
            />
            <div className="text-5xl md:text-6xl text-blue-600 mb-2 mx-auto" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Real-time Communication
            </h2>
            <p className="text-md text-gray-600">
              {" "}
              With state of the art Workflow builder. Make your application more
              interactive.
            </p>
          </div>
          <div className="text-center">
            <TiFlowMerge className="text-5xl md:text-6xl  text-blue-600 mb-2 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Workflow Builder
            </h2>
            <p className="text-lg text-gray-600">
              With state of the art Workflow builder. Make your application more
              interactive.
            </p>
          </div>
          <div className="text-center">
            <HiOutlineChatAlt2 className="text-5xl md:text-6xl  text-blue-600 mb-2 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Real-time Communication
            </h2>
            <p className="text-lg text-gray-600">
              Enhance customer engagement with real-time chat solutions. Build
              interactive, seamless experiences.
            </p>
          </div>
          <div className="text-center">
            <HiOutlineMail className="text-5xl md:text-6xl  text-blue-600 mb-2 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              SMS & Messaging
            </h2>
            <p className="text-lg text-gray-600">
              Reach users globally with reliable SMS and messaging services.
              Automate notifications and alerts effortlessly.
            </p>
          </div>

          <div className="text-center">
            <FaBullhorn className="text-5xl md:text-6xl  text-blue-600 mb-2 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              BroadCast
            </h2>
            <p className="text-lg text-gray-600">
              Connect your apps and services with Botbat and automate your
              communication workload, with our powerful API.
            </p>
          </div>

          <div className="text-center">
            <IoAnalyticsSharp className="text-5xl md:text-6xl text-blue-600 mb-2 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Customers Data Plaform
            </h2>
            <p className="text-lg text-gray-600">
              Connect your apps and services with Botbat and automate your
              communication workload, with our powerful API.
            </p>
          </div>
        </div>
      </div>
      helllo
    </section>
  );
};

export default MainFeatures;
