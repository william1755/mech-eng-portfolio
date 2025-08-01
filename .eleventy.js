module.exports = function(eleventyConfig) {
  // Copy these directories to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "docs",  // Changed from _site to docs
      includes: "_includes"
    },
    pathPrefix: "/",  // Remove if deploying to user/organization pages (username.github.io)
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};