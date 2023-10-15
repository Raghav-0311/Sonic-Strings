import React from 'react'
import "./search.css";
import Recommended from './Recommended/Recommended';

const Search = ({ handleInputChange, query, handleClick }) => {
  return (
    <div className='search__container'>
        <div className="search__wrapper">
          <div className="search">
            <input 
              className="search__input" 
              type="text"
              onChange={handleInputChange}
              value={query}
            />
            <i className="search__icon bx bx-search"></i>
          </div>
        </div>
      
      <Recommended handleClick={handleClick} />
    </div>
  )
}

export default Search
