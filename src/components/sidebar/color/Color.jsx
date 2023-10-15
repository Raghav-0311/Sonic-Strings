import React from 'react'
import "./color.css";
import Input from '../Input';

const Color = ({handleChange}) => {
  return (
    <div className='m1'>
      <h2 className="sidebar__title color__title">Colors</h2>
      <div>
        <label className="sidebar__label__container">
          <input 
            type="radio" 
            onChange={handleChange}
            value=""
            name='test3'
          />
          <span className="checkmark all"></span>
          All
        </label>

        <Input 
          handleChange={handleChange}
          value="Black"
          title='Black'
          name="test3"
          color="black"
        />

        <Input 
          handleChange={handleChange}
          value="Red"
          title='Red'
          name="test3"
          color="red"
        />

        <Input 
          handleChange={handleChange}
          value="Brown"
          title='Brown'
          name="test3"
          color="brown"
        />

        <Input 
          handleChange={handleChange}
          value="Blue"
          title='Blue'
          name="test3"
          color="blue"
        />  
      </div>
      
    </div>
  
  )
}

export default Color
