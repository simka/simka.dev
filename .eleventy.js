module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform(
    "transformCss",
    require("./src/_11ty/transformCss")
  );
  eleventyConfig.addTransform(
    "transformHtml",
    require("./src/_11ty/transformHtml")
  );

  // passthrough static assets
  eleventyConfig.addPassthroughCopy("./src/site/static");

  return {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "_dist",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
