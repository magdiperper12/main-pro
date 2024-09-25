import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

// Component
const Features: React.FC<FeaturesProps> = () => {
  const [description, setDescription] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const myData = useStaticQuery(graphql`
    query MyfeatureQuery {
      strapi {
        home {
          data {
            id
            attributes {
              journeySection {
                data {
                  id
                  attributes {
                    description
                    header
                    subTitle
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const journeySectionAttributes =
      myData.strapi.home.data.attributes.journeySection.data.attributes;

    if (journeySectionAttributes) {
      setDescription(
        journeySectionAttributes.description
          .map((desc: { children: any[] }) =>
            desc.children.map((child) => child.text).join(" ")
          )
          .join(" ")
      );
    }
    setTitle(journeySectionAttributes.header);
    setSubtitle(journeySectionAttributes.subTitle);
  }, [myData]);

  return (
    <div>
      <div className="text-center mt-4 md:my-12">
        <p className="text-lg md:text-xl lg:text-2xl font-extrabold">
          {" "}
          {subtitle || "Subtitle here"}
        </p>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mt-2 md:mt-5 leading-tight">
          {title || "Title here"}
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-5 flex w-3/4 m-auto">
          {description || "Description here"}
        </p>
      </div>
    </div>
  );
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
