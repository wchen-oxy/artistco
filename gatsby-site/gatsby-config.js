/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`
  ],
  // pathPrefix: `/artistco/gatsby-site`,
  siteMetadata: {
    title: "Essential Works LLC / Construction & Remodeling",
    titleTemplate: "%s · NYC",
    description:
      "Affordable, Durable and Timely Construction.",
    url: "https://essentialworksconstruction.com", // No trailing slash allowed!
    image: "/icons/temp-icon.png", // Path to your image you placed in the 'static' folder
  },
}
