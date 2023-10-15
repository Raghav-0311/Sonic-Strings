import React from 'react'
import "./type.css";
import Input from '../Input';

const Type = ({handleChange}) => {
  return (
    <div className='m1'>
      <h2 className="sidebar__title type__title">Type</h2>

      <div>
        <label className="sidebar__label__container">
          <input 
            type="radio" 
            onChange={handleChange}
            value=""
            name='test'
          />
          <span className="checkmark"></span>
          All
        </label>

        <Input 
          handleChange={handleChange}
          value="Acoustic"
          title='Acoustic'
          name="test"
        />

        <Input 
          handleChange={handleChange}
          value="Electric"
          title='Electric'
          name="test"
        />
      </div>
    </div>
  )
}

export default Type
Type