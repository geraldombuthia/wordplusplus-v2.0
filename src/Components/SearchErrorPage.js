import React from 'react'

const SearchErrorPage = () => {
  return (
    <div className='error-div'>
      <div className="warning">
        <p class="large-warning-text">Oops</p>
        <p>Not found!!</p>
      </div>
      <p className="info">The word you searched for </p>
      <p className="info"> couldn't be found.</p>
    </div>
  )
}

export default SearchErrorPage