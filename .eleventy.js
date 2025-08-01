module.exports = function(eleventyConfig) {
  // Copy these directories to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");
  
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};