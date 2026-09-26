const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // 1. Add the HTML Base plugin to automatically rewrite absolute URLs
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy standard static asset folders straight to the build output
  eleventyConfig.addPassthroughCopy("content/css");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    }
  };
};