const minify = require("html-minifier").minify;
const PurgeCSS = require("purgecss").PurgeCSS;
const csso = require("csso");

/**
 * Inlines the CSS.
 * Makes font display display-swap
 * Minifies and optimizes the JS
 * Optimizes HTML
 */

const purifyCss = async (rawContent, outputPath) => {
  let content = rawContent;
  if (
    outputPath &&
    outputPath.endsWith(".html") &&
    !/data-style-override/.test(content)
  ) {
    let before = require("fs").readFileSync("src/site/css/styles.css", {
      encoding: "utf-8",
    });

    before = before.replace(/@font-face {/g, "@font-face {font-display:swap;");

    const purged = await new PurgeCSS().purge({
      content: [
        {
          raw: rawContent,
          extension: "html",
        },
      ],
      css: [
        {
          raw: before,
        },
      ],
      extractors: [
        {
          extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          extensions: ["html"],
        },
      ],
      fontFace: true,
      variables: true,
    });

    const after = csso.minify(purged[0].css).css;
    // console.log("CSS reduction", before.length - after.length);

    content = content.replace("</head>", `<style>${after}</style></head>`);
  }
  return content;
};

const minifyHtml = (rawContent, outputPath) => {
  let content = rawContent;
  if (outputPath && outputPath.endsWith(".html")) {
    content = minify(content, {
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeComments: true,
      sortClassName: true,
      sortAttributes: true,
      html5: true,
      decodeEntities: true,
      removeOptionalTags: true,
    });
  }
  return content;
};

module.exports = {
  initArguments: {},
  configFunction: async (eleventyConfig) => {
    eleventyConfig.addTransform("purifyCss", purifyCss);
    eleventyConfig.addTransform("minifyHtml", minifyHtml);
  },
};
