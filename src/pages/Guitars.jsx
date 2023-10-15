import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Products from '../components/products/Products'
import Search from '../components/search/Search'
import SideBar from '../components/sidebar/SideBar'


const Guitars = ({ size, handleChange, query, handleInputChange, handleClick, result }) => {
    

  return (
    <div>
      <NavBar size={size} />
      <SideBar handleChange={handleChange} />
      <Search 
        query={query} 
        handleInputChange={handleInputChange} 
        handleClick={handleClick}
      />
      <Products result={result} />
    </div>
  )
}

export default Guitars
