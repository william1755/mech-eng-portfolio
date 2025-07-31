module.exports = function(eleventyConfig) {
  // Copy static assets (CSS, images)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "_site",    // Source files
      output: "src"  // Generated site
    }
  };
};
