import React from 'react'
import BookMarkItem from './BookMarkItem';

const BookMarkContents = () => {
    let keys = Object.keys(localStorage);
    console.log("clicked");
  return (
   <> 
   {keys.map((obj, index) => 
        <BookMarkItem obj = {obj} index = {index}/> 
   )}
   </>
  )
}

export default BookMarkContents