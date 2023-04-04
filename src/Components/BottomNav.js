import React from 'react'
import { Link } from 'react-router-dom'
const BottomNav = () => {
  return (
    <div className="bottom-nav">
        <Link className = "link" to="/">Word</Link>
        <Link className ="link" to="/About">About</Link>
    </div>
  )
}

export default BottomNav