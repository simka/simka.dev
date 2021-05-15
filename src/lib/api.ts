import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import sizeOf from "image-size";

const logDirectory = join(process.cwd(), "_log");

export function getLogEntriesSlugs() {
  return fs
    .readdirSync(logDirectory)
    .filter((slug) => slug.includes(".md"))
    .map((slug) => slug.replace(/\.md$/, ""));
}

export function getLogEntryBySlug(slug) {
  const fullPath = join(logDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const imageDimensions = data.image
    ? sizeOf(join(process.cwd(), "public", data.image))
    : null;

  return {
    slug,
    content,
    image: data.image ? data.image : null,
    imageDimensions,
  };
}

export function getAllLogEntries() {
  const slugs = getLogEntriesSlugs();

  return slugs
    .map((slug) => getLogEntryBySlug(slug))
    .sort((post1, post2) => (post1.slug < post2.slug ? 1 : -1));
}
