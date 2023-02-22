import fs from "fs";
import path from "path";
import matter from 'gray-matter';

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler((event) => {

  // 获取页码
  const query = getQuery(event)
  const page = Number(query.page)
  const size = Number(query.size) || 1
  
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
  const start = (page - 1) * size
  const end = start + size
  return posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(start, end);
});
