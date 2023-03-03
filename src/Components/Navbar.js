import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
const Navbar = () => {
  return (
    <div className="nav">
      <h1>Search</h1>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faBookmark} />
      </div>
    </div>
  )
}

export default Navbar