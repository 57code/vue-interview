import fs from "fs";
import path from "path";
import matter from 'gray-matter';

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler((event) => {
  const fileNames = fs.readdirSync(postsDir);
  const posts = fileNames.map((fileName) => {
    // 获取文件名作为文章标题
    const id = fileName.replace(/\.md$/, "");

    // 获取文章标题和创建日期
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterInfo = matter(fileContents);
    const fileInfo = fs.statSync(fullPath);

    return {
      id,
      title: matterInfo.data.title,
      date: fileInfo.ctime,
    };
  });
  // 降序排列
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
});
