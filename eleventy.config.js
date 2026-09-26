module.exports = function(eleventyConfig) {
  // Pass through the public folder (CSS, images, etc.) directly to the output
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    }
  };
};