import { faFile, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

interface Props {
  category: string;
  tags: string[];
}

const BlogCategoryAndTags: NextPage<Props> = (props: Props) => {
  return (
    <div className='flex flex-row space-x-2 text-xs flex-wrap '>
      <div className='flex w-fit space-x-1 rounded-md bg-black p-2 my-1 text-white'>
        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        <p>{props.category}</p>
      </div>
      {props.tags.map((tag, index) => {
        return (
          <div
            className='flex w-fit space-x-1 rounded-md border  border-black bg-white p-2 my-1 text-black'
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
