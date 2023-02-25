import React from "react";
import { useState } from "react";
const Footer = ({ quotes }) => {
  const [index, setIndex] = useState(0);

  const getRandomIndex = () => {
    let indexVal = Math.floor(Math.random() * quotes.length);
    console.log(indexVal);
    setIndex(indexVal);
  }
  getRandomIndex();
  // useEffect(() => {
    
  // },[]);
  
  return (
    <div className="footer">
      {quotes && (
        <div key={index} onClick={() => getRandomIndex()}>
          <p className="text">{quotes[index].text}</p>
          <p className="author">~{quotes[index].author}</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
