import React from "react";
import ViewWord from "./ViewWord";
import LazyLoad from 'react-lazyload';
import GirlPic from "../images/Girl Reading.webp"

const View = ({ word, closeView }) => {
  return (
    <div className="view">
      {word.length > 0 ? (
        <ViewWord word={word} closeView = {closeView} />
      ) : 
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
