import React from "react";
import ViewWord from "./ViewWord";
import LazyLoad from 'react-lazyload';
import GirlPic from "../images/Girl Reading.webp"
import LoadingSpinner from "./LoadingSpinner";
import SearchErrorPage from "./SearchErrorPage";

const View = ({ word, closeView, isLoading, isError }) => {
  return (
    
    <div className="view">
      {isLoading && <LoadingSpinner />}
      {word.length > 0 && !isLoading && (
        <ViewWord word={word} closeView = {closeView} />
      ) }
      {isError && <SearchErrorPage/>}
      {!isLoading && word.length <= 0  &&    
      <div className="no-word">
        <p className="helper-text">Find new words, synonyms and antonyms</p>
        <LazyLoad height={200}>
          <img src={GirlPic} alt="Girl reading a book" className="girlpic"/>
        </LazyLoad>
      </div>}

    </div>
  );
};

export default View;
