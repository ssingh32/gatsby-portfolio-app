/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    author: "Sukhdip Singh",
    title: "Portfolio App"
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-contentful',
      options : {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    "gatsby-plugin-sass",
   "gatsby-plugin-sharp", 
   {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
   }
  ]
}
