module.exports = {
  siteMetadata: {
    title: 'Workouts of the Day',
    description: 'WODs from Crossfit TheVille',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Workouts of the Day',
        icon: 'src/images/Dumbbell.svg',
        short_name: 'WODs',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: "./src/images/Dumbbell.svg",
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
