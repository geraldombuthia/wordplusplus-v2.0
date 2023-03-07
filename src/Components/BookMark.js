import React from "react"
import BookMarkContents from "./BookMarkContents"
import Navbar from "./Navbar"

const BookMark = () => {
  return (
    <div className="App">
        <Navbar text = {"Bookmark"}/>
        <BookMarkContents />
    </div>
  )
}

export default BookMark