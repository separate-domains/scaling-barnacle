require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Vady cosmeticos`,
    description: `Cosmetics shop in Zihuatanejo, Guerrero`,
    author: `nn`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      // For development
      // resolve: `..`,
      resolve: `gatsby-source-instagram`,
      options: {
        username: `fullname7274`,
      },
    },
    {
      // For development
      // resolve: `..`,
      resolve: `gatsby-source-instagram`,
      options: {
        type: `hashtag`,
        hashtag: `snowing`,
      },
    },
  ],
}
