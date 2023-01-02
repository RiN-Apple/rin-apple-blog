import { faFile, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

interface Props {
  category: string;
  tags: string[];
}

const BlogCategoryAndTags: NextPage<Props> = (props: Props) => {
  return (
    <div className='flex flex-col space-y-2 text-xs sm:flex-row sm:space-y-0 sm:space-x-2 sm:text-sm '>
      <div className='flex w-fit space-x-1 rounded-md bg-black p-2 text-white'>
        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        <p>{props.category}</p>
      </div>
      {props.tags.map((tag, index) => {
        return (
          <div
            className='flex w-fit space-x-1 rounded-md border  border-black bg-white p-2 text-black'
            key={index}
          >
            <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
            <p>{tag}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCategoryAndTags;
