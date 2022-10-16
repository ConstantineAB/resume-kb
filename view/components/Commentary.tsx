import { FC } from 'react';

interface myProps {

}

const Commentary: FC = ({author, title, content, picture}: any) => {

  return (
    <div className='commentary'>
        <p className='commentary__author'>{author}</p>
        <p className='commentary__content'>{content}</p>
    </div>
  )
}

export default Commentary