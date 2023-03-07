import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="firstel">
        {text === "Bookmark" ? <FontAwesomeIcon icon={faArrowLeftLong} onClick={() => navigate(-1)} /> : " "}
      </div>
      <h1>{text}</h1>
      <div className="nav-icons">
        {text === "Bookmark" ? " ": <Link to="/Bookmark">
          <FontAwesomeIcon icon={faBookmark} />
        </Link>}
        
      </div>
    </div>
  )
}

export default Navbar