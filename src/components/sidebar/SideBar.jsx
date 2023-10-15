import React from 'react'
import "./sidebar.css";
import Color from './color/Color';
import Price from './price/Price';
import Type from './type/Type';

const SideBar = ({ handleChange }) => {
  
  return (
    <div className='sidebar__container'>
      <Type handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Color handleChange={handleChange} />
    </div>
  )
}

export default SideBar
