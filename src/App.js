import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Footer from "./Components/Footer"
import View from "./Components/View"
function App() {
  const [word, setWord] = useState('');
  const [quotes, setQuotes] = useState('');
  const [showQuotes, setShowQuotes] = useState(true);

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
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${toSearch}`)
    const data = await res.json();
    if (data.length === 0) {
      alert("not present");
    }
    setWord(data);
  }

  const closeView = () => {
    setWord("");
    setShowQuotes(true);
  }
  //FetchWord Function Ends
  return (
    <div className="App">
      <Navbar />
      <Search onSearch={onSearch} showQuotes = {showQuotes}/>
      <View word={word} closeView = {closeView} />
      <Footer quotes={quotes} showQuotes = { showQuotes }/>
    </div>
  );
}

export default App;
