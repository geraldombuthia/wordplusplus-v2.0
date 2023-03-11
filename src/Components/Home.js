import React from 'react'
import { useState } from 'react'
import Navbar from "./Navbar"
import Search from "./Search"
import Footer from "./Footer"
import View from "./View"

const Home = ({onSearch, showQuotes, word, closeView, quotes, isLoading, isError}) => {
  const [ isBookMark, setIsBookMark ] = useState(false);
  const BookMarkCountRefresh = () => {
    setIsBookMark(true);
  }
  const BookMarkCountStopRefresh = () => {
    setIsBookMark(false);
  }
  return (
    <div className="App">
      <Navbar text={"Search"} isBookMark = {isBookMark} BookMarkCountStopRefresh = {BookMarkCountStopRefresh}/>
      <Search onSearch={onSearch} showQuotes = {showQuotes}/>
      <View word={word} closeView = {closeView} isLoading = {isLoading} isError = {isError} BookMarkCountRefresh = {BookMarkCountRefresh}/>
      <Footer quotes={  quotes } showQuotes = { showQuotes }/>
    </div>
  )
}

export default Home