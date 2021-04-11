/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
      {
          resolve: `gatsby-source-stripe`,
          options: {
              objects: ["Price"],
              secretKey: process.env.STRIPE_SECRET_KEY,
              downloadFiles: false,
          },
      },
      {
          resolve: 'gatsby-plugin-snipcartv3',
          options: {
              apiKey: process.env.SNIPCART_KEY
          }
      }
  ]
}
