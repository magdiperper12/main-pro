import React from "react";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";
import { graphql, useStaticQuery } from "gatsby";

const items = [
  {
    heading: "Automate your communication workload with Botbat",
    text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
    image: image1,
  },
  {
    heading: "Support with our AI chatbot by your side.",
    text: "AI chatbot assists you in handling customer queries efficiently. Enhance customer support with our intelligent chatbot solutions.",
    image: image2,
  },
  {
    heading: "Engage Better with your Customers",
    text: "Use our tools to engage with your customers on a deeper level. Understand their needs and preferences to offer personalized solutions.",
    image: image3,
  },
  {
    heading: "Involve your Agent whenever you need.",
    text: "Seamlessly transition from automated bots to human agents whenever necessary. Ensure your customers get the best support experience.",
    image: image1,
  },
];

function Journey() {
  const journyData = useStaticQuery(graphql`
    query MyjournyQuery {
      strapi {
        home {
          data {
            id
            attributes {
              journeySection {
                data {
                  id
                  attributes {
                    features {
                      data {
                        id
                        attributes {
                          subtitle
                          header
                          dicription
                          mediaUrls
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const journeyAttributes =
    journyData.strapi.home.data.attributes.journeySection.data.attributes;

  const featuresData = journeyAttributes.features.data.map((feature: any) => {
    return {
      id: feature.id,
      header: feature.attributes.header,
      subtitle: feature.attributes.subtitle,
      description: feature.attributes.dicription[0].children[0].text,
      mediaUrls: feature.attributes.mediaUrls,
    };
  });

  return (
    <div className="py-11 md:pt-16  md:py-0">
      <div className="container mx-auto  md:px-4 text-center">
        <div className="flex flex-col space-y-10 md:space-y-20">
          {items.map((item, index) => (
            <div
              className={`flex flex-col ${
                index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-start  md:space-x-8 `}
            >
              <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-10 ">
                <img
                  src={featuresData.mediaUrls || item.image}
                  alt="Automate communication"
                  className="rounded-lg object-cover object-center"
                />
              </div>
              <div
                className={`w-full px-8 md:px-0  lg:px-12 md:w-1/2 text-start   lg:mt-10`}
              >
                <p className="relative px-8 font-bold my-1">
                  <span className="absolute start-0 top-0 h-full w-3 bg-blue-500"></span>
                  {featuresData.subtitle || "Automate your communication  "}
                </p>

                <h2 className="text-xl md:text-xl lg:text-2xl font-semibold my-1">
                  {featuresData.header ||
                    "Support with our AI chatbot by your side."}
                </h2>
                <p className="text-md md:text-lg  my-1">
                  {featuresData.description ||
                    "AI chatbot assists you in handling customer queries efficiently. Enhance customer support with our intelligent chatbot solutions."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journey;

// import React, { useEffect, useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";

// // Define types for feature and localization data
// interface Feature {
//   id: string;
//   attributes: {
//     header: string;
//     mediaUrls: string;
//   };
// }

// interface Localization {
//   id: string;
//   attributes: {
//     description: string;
//     header: string;
//     subTitle: string;
//     locale: string;
//   };
// }

// function Journey() {
//   const [maindescription, setMaindescription] = useState<string>("");
//   const [secounddescription, setSecounddescription] = useState<string>("");
//   const [subtitle, setSubtitle] = useState<string>("");
//   const [title, setTitle] = useState<string>("");
//   const [actions, setActions] = useState<
//     Array<{ buttonText: string; buttonUrl: string }>
//   >([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   const journydata = useStaticQuery(graphql`
//     query MyJourneyQuery {
//       strapi {
//         home {
//           data {
//             attributes {
//               journeySection {
//                 data {
//                   id
//                   attributes {
//                     description
//                     header
//                     subTitle
//                     locale
//                     localizations {
//                       data {
//                         id
//                         attributes {
//                           description
//                           header
//                           subTitle
//                           locale
//                         }
//                       }
//                     }
//                     features {
//                       data {
//                         id
//                         attributes {
//                           description
//                           header
//                           subtitle
//                           locale
//                           mediaUrls
//                           localizations {
//                             data {
//                               id
//                               attributes {
//                                 description
//                                 header
//                                 subtitle
//                                 locale
//                                 mediaUrls
//                               }
//                             }
//                           }
//                         }
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
//   `);

//   useEffect(() => {
//     const sectionData =
//       journydata?.strapi?.home?.data?.attributes?.journeySection?.data
//         ?.attributes;

//     if (sectionData) {
//       // Main description
//       setMaindescription(sectionData.description || "");
//       setTitle(sectionData.header || "");
//       setSubtitle(sectionData.subTitle || "");

//       // Localized description
//       const localizationData: Localization =
//         sectionData.localizations?.data[0]?.attributes || {};

//       // Features (actions)
//       const features: Feature[] = sectionData.features?.data || [];
//       setActions(
//         features.map((feature) => ({
//           buttonText: feature.attributes.header,
//           buttonUrl: feature.attributes.mediaUrls || "", // Assuming mediaUrls as the URL field
//         }))
//       );
//     }
//     setLoading(false); // Data is loaded
//   }, [journydata]);

//   if (loading) {
//     return <div>Loading...</div>; // Add a loading indicator while data is fetched
//   }

//   return (
//     <div className="py-11 md:pt-16 md:py-0">
//       <div>
//         <h1>{title}</h1>
//         <h2>{subtitle}</h2>
//       </div>
//     </div>
//   );
// }

// export default Journey;
