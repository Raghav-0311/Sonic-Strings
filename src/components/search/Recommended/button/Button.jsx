import React from 'react'
import "./button.css";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
        onClick={onClickHandler}
        value={value}
        className='recommended__btn'
    >
        {title}
    </button>
  )
}

export default Button
