import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Id: NextPage = () => {
  const router = useRouter();
  return (
    <h1>
      Category {router.query.category} Post {router.query.id}
    </h1>
  );
};

export default Id;
