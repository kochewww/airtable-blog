module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keymF6NBtulCkHwCO`,
        concurrency: 5,
        tables: [
          {
            baseId: `appLdAhQZocD9hNDW`,
            tableName: `blog`,
            tableView: `published`,
            mapping: { markdownPost: "text/markdown" },
            tableLinks: [`author`],
            separateNodeType: true,
            queryName: "blog",
          },
          {
            baseId: `appLdAhQZocD9hNDW`,
            tableName: `authors`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
