import React from 'react'
import { Link } from 'react-router-dom';
import BookMarkItem from './BookMarkItem';
import BookMarkEmpty from './BookMarkEmpty';

const BookMarkContents = ({onBookMark}) => {
  let keys = Object.keys(localStorage);
  return (
    <>
      {keys.length > 0 ? keys.map((obj, index) =>
        <Link to="/" className='link' onClick={() => onBookMark(obj)}>
          <BookMarkItem obj={obj} key={index} />
        </Link>
      ) : <BookMarkEmpty />}
    </>
  )
}

export default BookMarkContents