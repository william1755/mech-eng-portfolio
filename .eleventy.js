module.exports = function(eleventyConfig) {
  // Copy static assets (CSS, images)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",    // Source files
      output: "root"  // Generated site
    }
  };
};
