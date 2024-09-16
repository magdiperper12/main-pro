import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv'
dotenv.config({
  path: `.env`,
});
console.log('Strapi API URL:', process.env.STRAPI_API_URL);
console.log('Strapi API Token:', process.env.STRAPI_API_TOKEN);
const config: GatsbyConfig = {
  siteMetadata: {
    title: `BotBat`,
    siteUrl: `https://www.botbat.io`,
  },
  graphqlTypegen: true,
  flags: {
    FAST_REFRESH: false,  // Disable Fast Refresh
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    // {
    //   resolve: 'gatsby-source-strapi',
    //   options: {
    //     apiURL: process.env.STRAPI_API_URL || "https://strapi-staging.botbat.io", // Replace with your Strapi API URL
    //     collectionTypes: ["sections", "menueItem","hero","footerItem","Features", "blog"],
    //     singleTypes: ["home"],
    //     accessToken: "484677eac7b8a55679da35be0629c481645daaf0ab5ddebe2b9c89ac4542f1b6eb3c0ab38b60e0786ad11bf292ecbf2438c4704345b303119e84ce822d896f923e55e1af7d80e573520854f270a511535109b8c6eb5e2e8b4b3c093dac91e7e6022a63ba8d0cf6cdb6236f45ddcce469c2db45138d448b9ff0f09b7b50ded597",
    //     queryLimit: 1000, // Default to 1000kube
    //   },
    // },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: process.env.STRAPI_API_URL || 'http://localhost:1337/graphql',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    }
  ],
};
export default config;