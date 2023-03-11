import React from 'react'
import Navbar from "./Navbar"
import Search from "./Search"
import Footer from "./Footer"
import View from "./View"

const Home = ({onSearch, showQuotes, word, closeView, quotes, isLoading, isError}) => {
  return (
    <div className="App">
      <Navbar text={"Search"} />
      <Search onSearch={onSearch} showQuotes = {showQuotes}/>
      <View word={word} closeView = {closeView} isLoading = {isLoading} isError = {isError} />
      <Footer quotes={  quotes } showQuotes = { showQuotes }/>
    </div>
  )
}

export default Home