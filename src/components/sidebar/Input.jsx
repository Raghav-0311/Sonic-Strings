import React from 'react'

const Input = ({ handleChange, value, title, color, name}) => {
  return (
    <label className="sidebar__label__container">
        <input 
            onChange={handleChange}
            type="radio" 
            value={value} 
            name={name} 
        />
        <span 
            className="checkmark"
            style={{backgroundColor: color}}
        ></span>
        {title}
    </label>
  )
}

export default Input
