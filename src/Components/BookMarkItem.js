import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Share from '../Controllers/Share';
import Speak from '../Controllers/Speak';
import CapitalizeWord from '../Controllers/CapitalizeWord';
import { Link } from 'react-router-dom';

const BookMarkItem = ({ obj, index, onBookMark }) => {
  console.log(obj, index);
  return (
    <div className="bookmark-item">
      <Link to="/" className="link">
        <div className="bookmark-word" onClick = {() => onBookMark(obj)}>
          {CapitalizeWord(obj)}
        </div>
      </Link>
      <div className="bookmark-buttons">
        <button type="submit" >
          <FontAwesomeIcon className="bookmark-head-icon" icon={faVolumeHigh} onClick={() => Speak(obj)} />
        </button>
        <button type="submit" onClick={(e) => Share(obj, e)}>
          <FontAwesomeIcon icon={faWhatsapp} className="bookmark-head-icon" />
        </button>
      </div>
    </div>
  )
}

export default BookMarkItem