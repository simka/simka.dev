const fs = require("fs");
const postcss = require("postcss");
const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const csso = require("csso");

async function transformCss(rawContent, outputPath) {
  const postcssPlugins = [
    postcssImport,
    tailwindcss,
    ...(process.env.NODE_ENV === "production"
      ? [
          autoprefixer,
          purgecss({
            content: {
              raw: rawContent,
              extension: "njk",
            },
          }),
        ]
      : []),
  ];

  let content = rawContent;
  if (outputPath && outputPath.endsWith(".html")) {
    let css = await fs.promises.readFile("src/site/css/styles.css", {
      encoding: "utf-8",
    });

    let { css: processedCss } = await postcss(postcssPlugins).process(css, {
      from: "src/site/css/styles.css",
      to: outputPath,
    });

    content = content.replace(
      "</head>",
      `<style>${
        process.env.NODE_ENV === "production"
          ? csso.minify(processedCss).css
          : processedCss
      }</style></head>`
    );
  }
  return content;
}

module.exports = transformCss;
