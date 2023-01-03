import fs from 'fs';
import path from 'path';

export const getPostMetaTags = async () => {
  // pages/posts/*.mdxのファイル名を取得
  const postFileNames = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'));

  // 記事を取得
  const postModules = await Promise.all(
    postFileNames.map(async (p) => import(`../pages/posts/${p}`)),
  );

  // メタデータを取得
  const postMetadata = postModules.map((m) => (m.meta ? m.meta : null));
  const sortedPostMetadata = postMetadata.sort((a, b) => {
    return new Date(a.date) > new Date(b.date) ? -1 : 1;
  });
  return sortedPostMetadata;
};

export const tags = [];
export const categories = ['random', 'programing', 'car', 'illustration', 'gadget_pc'];
