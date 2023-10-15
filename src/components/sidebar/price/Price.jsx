import React from 'react'
import "./price.css";
import Input from '../Input';

const Price = ({ handleChange }) => {
  return (
    <div className="m1">
      <h2 className="sidebar__title price__title">Price</h2>
      <div>
        <label className="sidebar__label__container">
          <input 
            type="radio" 
            onChange={handleChange}
            value=""
            name='test2'
          />
          <span className="checkmark"></span>
          All
        </label>

        <Input 
          handleChange={handleChange}
          value="500"
          title='Below $500'
          name="test2"
        />

        <Input 
          handleChange={handleChange}
          value="1000"
          title='Below $1000'
          name="test2"
        />

        <Input 
          handleChange={handleChange}
          value="1500"
          title='Below $1500'
          name="test2"
        />

        <Input 
          handleChange={handleChange}
          value="2000"
          title='Below $2000'
          name="test2"
        />

        <Input 
          handleChange={handleChange}
          value="2500"
          title='Below $2500'
          name="test2"
        />
      </div>

    </div>
  )
}

export default Price
