import { defineEventHandler, getQuery } from 'h3';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), "content");
const posts = defineEventHandler((event) => {
  const query = getQuery(event);
  const page = Number(query.page);
  const size = Number(query.size) || 1;
  const fileNames = fs.readdirSync(postsDir);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterInfo = matter(fileContents);
    const fileInfo = fs.statSync(fullPath);
    return {
      id,
      title: matterInfo.data.title,
      date: fileInfo.ctime
    };
  });
  const start = (page - 1) * size;
  const end = start + size;
  return posts.sort((a, b) => a.date < b.date ? 1 : -1).slice(start, end);
});

export { posts as default };
//# sourceMappingURL=posts.mjs.map
