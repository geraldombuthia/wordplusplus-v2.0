import React from 'react'
import BookMarkItem from './BookMarkItem';
import BookMarkEmpty from './BookMarkEmpty';
const BookMarkContents = () => {
    let keys = Object.keys(localStorage);
    console.log("clicked");
  return (
   <> 
   {keys.length > 0 ? keys.map((obj, index) => 
        <BookMarkItem obj = {obj} key = {index}/> 
   ): <BookMarkEmpty/>}
   </>
  )
}

export default BookMarkContents