module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  return {
    // Control which files Eleventy will process
    templateFormats: ["md", "njk", "html"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    dir: {
      input: "content", // default: "."
      includes: "../_includes", // default: "_includes", relative to input
      data: "../_data", // default: "_data", same as above
      output: "_site",
    },
  };
};
