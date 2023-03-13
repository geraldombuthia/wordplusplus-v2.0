import React from 'react'
import BookMarkItem from './BookMarkItem';
import BookMarkEmpty from './BookMarkEmpty';

const BookMarkContents = ({onBookMark}) => {
  let keys = Object.keys(localStorage);
  return (
    <>
      {keys.length > 0 ? keys.map((obj, index) =>
          <BookMarkItem obj={obj} key={index} onBookMark= {onBookMark}/>
      ) : <BookMarkEmpty />}
    </>
  )
}

export default BookMarkContents