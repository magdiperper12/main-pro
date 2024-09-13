module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
                collectionTypes: ["sections", "menueItem", "hero", "footerItem", "Features", "blog"],
                singleTypes: ["home"],
                queryLimit: 1000,
                // If you are using Strapi v4+
                accessToken: process.env.STRAPI_TOKEN,
            },
        },
    ],
};