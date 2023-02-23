import { defineEventHandler, getRouterParam, createError } from 'h3';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), "content");
const _id_ = defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, "id") + ".md";
  const fullPath = path.join(postsDir, fileName);
  try {
    fs.accessSync(fullPath);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterInfo = matter(fileContent);
    const processedContent = await remark().use(html).process(matterInfo.content);
    const content = processedContent.toString();
    return {
      title: matterInfo.data.title,
      content
    };
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "article is not exist"
    });
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
