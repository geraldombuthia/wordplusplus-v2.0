import React from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Search = ({onSearch, showQuotes}) => {
    const [searchWord, setSearchWord] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!searchWord){
            alert("Type what to search");
            return;
        }
        if(searchWord){
            onSearch(searchWord)
        }
        setSearchWord("");
    }
    
  return (
    <form onSubmit = {onSubmit} action="" className="form">
        <input type="text" placeholder="Search" className='input' id='input' value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
        <button type="submit"><FontAwesomeIcon icon={faSearch} /> <span className="display">Submit</span> </button>
        
    </form>
  )
}

export default Search