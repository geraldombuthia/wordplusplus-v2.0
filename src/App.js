import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Footer from "./Components/Footer"
import View from "./Components/View"
function App() {
  const [word, setWord] = useState('');
  const [quotes, setQuotes] = useState('');

  const onSearch = async (toSearch) => {
    fetchWord(toSearch);
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
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${toSearch}`)
    const data = await res.json();
    if (data.length === 0) {
      alert("not present");
    }
    setWord(data);
  }
  //FetchWord Function Ends
  return (
    <div className="App">
      <Navbar />
      <Search onSearch={onSearch} />
      <View word={word} />
      <Footer quotes={quotes} />
    </div>
  );
}

export default App;
