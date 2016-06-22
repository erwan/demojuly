module.exports = {

  apiEndpoint: 'https://your-repo-name.prismic.io/api',

  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    return '/';
  }
};
