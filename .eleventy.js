module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require("./src/_11ty/optimizeHtml.js"));

  // passthrough static assets
  eleventyConfig.addPassthroughCopy("./src/site/fonts");
  eleventyConfig.addPassthroughCopy("./src/site/images");

  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "_dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};
