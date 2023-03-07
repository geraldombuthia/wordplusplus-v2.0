import './App.css';
import { useEffect, useState } from 'react';
import Home from "./Components/Home"
import Bookmark from "./Components/BookMark"

import { Route, Routes } from "react-router-dom";
function App() {
  const [word, setWord] = useState('');
  const [quotes, setQuotes] = useState('');
  const [showQuotes, setShowQuotes] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async (toSearch) => {
    fetchWord(toSearch);
    setShowQuotes(false);
  }
  useEffect(() => {
    //FetchQuotes function
    const fetchQuote = async () => {
      const res = await fetch(`https://type.fit/api/quotes`);
      const data = await res.json();
      setQuotes(data);
    }
    
    fetchQuote();
  }, [])

  // FechWord Function starts
  const fetchWord = async (toSearch) => {
    setIsLoading(true);
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${toSearch}`);
    const data = await res.json();
    if (data.length === 0) {
      alert("not present");
    }
    setWord(data);
    if (data){
      setIsLoading(false)
    }
    
  }

  const closeView = () => {
    setWord("");
    setShowQuotes(true);
  }
  //FetchWord Function Ends
  return (  
    <Routes>
      <Route path = "/" element={<Home onSearch={onSearch} showQuotes = {showQuotes} word={word} closeView = {closeView} quotes={quotes} isLoading= {isLoading}/>}/>
      <Route path = "/Bookmark" element={<Bookmark />}/>
    </Routes>
  );
}

export default App;

