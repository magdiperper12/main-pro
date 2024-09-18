import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
interface FeaturesProps {
  data: {
    strapi: {
      featuresHeadlines: {
        data: Array<{
          id: string;
          attributes: {
            features: {
              data: Array<{
                id: string;
                attributes: {
                  header: string;
                  dicription: string;
                  subtitle: string;
                  mediaUrl: {
                    data: {
                      attributes: {
                        previewUrl: string;
                        url: string;
                        width: number;
                      };
                    };
                  };
                };
              }>;
            };
          };
        }>;
      };
    };
  };
}

// Component
const Features: React.FC<FeaturesProps> = () => {
  return <div></div>;
  //   const [discription, setDiscription] = useState("")
  //   // const features = data?.strapi?.featuresHeadlines?.data[0];
  //   const myData = useStaticQuery(graphql`
  // query MyQuery {
  //   strapi {
  //     home {
  //       data {
  //         id
  //         attributes {
  //           sections {
  //             data {
  //               id
  //               attributes {
  //                 description
  //                 header
  //                 subTitle
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // `);

  //   useEffect(() => {
  //     console.log("ffff", myData.strapi.home.data.attributes.sections.data[0].attributes.description[0].children[0].text)
  //     setDiscription(myData.strapi.home.data.attributes.sections.data[0].attributes.description[0].children[0].text)
  //   }, [])
  //   return (
  //     <div>
  //       <div className="text-center mt-4 md:my-12">
  //         <p className="text-lg md:text-xl lg:text-2xl font-extrabold">Journey</p>
  //         <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mt-2 md:mt-5 leading-tight">
  //           Your Success Journey with Botbat
  //         </h1>
  //         <p className="text-base md:text-lg lg:text-xl mt-5 flex w-3/4 m-auto">
  //           {discription}
  //         </p>
  //       </div>

  //     </div>
  //   );
};

export default Features;
// GraphQL query
// export const query = graphql`
//  query MyQuery {
//     strapi {
//       featuresHeadlines {
//         data {
//           id
//           attributes {
//             features {
//               data {
//                 id
//                 attributes {
//                   header
//                   dicription
//                   subtitle
//                   mediaUrl {
//                     data {
//                       attributes {
//                         previewUrl
//                         url
//                         width
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
// `;
