module.exports = {
  siteMetadata: {
    title: `Next Gen Solutions| NGS | Official Website`,
    description: `We design and code websites for your company, everything involved with web development and digital design.`,
    author: `@Blancaflor`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
