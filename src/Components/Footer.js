import React from "react";
import { useState, useEffect } from "react";

const Footer = ({ quotes, showQuotes }) => {
  const [index, setIndex] = useState(0);

  const getRandomIndex = () => {
      let indexVal = Math.floor(Math.random() * 1600);
      console.log(indexVal);
      setIndex(indexVal);
  }
  useEffect(() => {
    getRandomIndex();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="footer">
      {quotes && showQuotes && (
        <div key={index} onClick={() => getRandomIndex()}>
          <p className="text">{quotes[index].text}</p>
          <p className="author">~{quotes[index].author}</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
