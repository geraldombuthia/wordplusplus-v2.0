import React from "react";
import ViewWord from "./ViewWord";
import GirlPic from "../images/Girl Reading.jpg"
const View = ({ word }) => {
  return (
    <div className="view">
      {word.length > 0 ? (
        <ViewWord word={word} />
      ) : 
      <div className="no-word">
        <p className="helper-text">Find new words, synonyms and antonyms</p>
        <img src={GirlPic} alt="Girl reading a book" width="200px"/>
      </div>}
    </div>
  );
};

export default View;
