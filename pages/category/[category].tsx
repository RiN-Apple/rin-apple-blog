import type { GetStaticPropsContext, NextPage } from 'next';
import Meta from '../../components/Meta';
import { categories, getPostMetaTags } from '../../scripts/utils';
import PostsGrid from '../../components/PostsGrid';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostMetas } from '../../scripts/type';

const Category: NextPage<PostMetas> = (props: PostMetas) => {
  return (
    <>
      <Meta title='Home' description='RiN5 BLOGのHomeページ。' />
      <div className='flex w-full flex-col gap-y-5 '>
        <h1 className='text-center text-3xl font-bold'>{props.name}</h1>
        {props.postMetas && <PostsGrid postMetas={props.postMetas}></PostsGrid>}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map((cat) => {
    return { params: { category: cat } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postMetas = await getPostMetaTags();
  const filtered = postMetas.filter((meta) => meta.categoryEn === params!.category);
  const name = filtered[0].category;

  return {
    props: {
      name: name,
      postMetas: filtered,
    },
  };
};

export default Category;
