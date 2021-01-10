/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
  ],
  // pathPrefix: `/artistco/gatsby-site`,
  siteMetadata: {
    title: "Essential Works LLC / Construction & Remodeling",
    titleTemplate: "%s · NYC",
    description:
      "Affordable, Durable and Timely Construction.",
    url: "https://www.essentialworksconstruction.com", // No trailing slash allowed!
    image: "https://www.rsd-agencements.com/Images/Accueil/RSD-Agencements-Architecte-interieur-Lyon-5.jpg", // Path to your image you placed in the 'static' folder
  },
}
