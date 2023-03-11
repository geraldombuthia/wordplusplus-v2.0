import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import BookMarkCount from '../Controllers/BookMarkCount'

const Navbar = ({ text, isBookMark, BookMarkCountStopRefresh }) => {
  const [storageCount, setStorageCount] = useState(0);
  useEffect(()=> {
    document.querySelector(".count").innerText = BookMarkCount();
  });
  if (isBookMark)
  {
    setStorageCount = BookMarkCount();
    BookMarkCountStopRefresh();
  }
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="firstel">
        {text === "Bookmark" ? <FontAwesomeIcon icon={faArrowLeftLong} onClick={() => navigate(-1)} /> : " "}
      </div>
      <h1>{text}</h1>
      <div className="nav-icons">
        {text === "Bookmark" ? " ": <Link to="/Bookmark" className="link">
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon"/>
          <span className="count">
            {storageCount}
          </span>
        </Link>}
        
      </div>
    </div>
  )
}

export default Navbar