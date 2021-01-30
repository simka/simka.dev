#! /usr/bin/env node
const puppeteer = require("puppeteer");
const fs = require("fs");

async function generateResumePdf() {
  console.log("Generating PDF file with resume.")
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  const html = fs.readFileSync(
    `${process.cwd()}/public/resume/index.html`,
    "utf8"
  );
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await page.pdf({
    path: `${process.cwd()}/public/resume.pdf`,
    preferCSSPageSize: true,
  });

  console.log("PDF with resume saved to static assets.")

  await browser.close();
}

generateResumePdf();
