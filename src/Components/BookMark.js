import React from "react"
import BookMarkContents from "./BookMarkContents"
import Navbar from "./Navbar"

const BookMark = ({onBookMark}) => {
  return (
    <div className="App">
        <Navbar text = {"Bookmark"}/>
        <BookMarkContents onBookMark={onBookMark}/>
    </div>
  )
}

export default BookMark