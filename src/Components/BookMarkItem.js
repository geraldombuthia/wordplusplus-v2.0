import React from 'react'
import CapitalizeWord from '../Controllers/CapitalizeWord';

const BookMarkItem = ({obj, index}) => {
    console.log(obj, index);
  return (
    <div key = {index} className="bookmark-item">
        {CapitalizeWord(obj)}
    </div>
  )
}

export default BookMarkItem