import React from 'react'
import "./recommended.css";
import Button from './button/Button';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended__title">Recommended</h2>
        <div className="recommended__flex">
            <Button onClickHandler={handleClick} value="" title="All Guitars" />
            <Button onClickHandler={handleClick} value="Gibson" title="Gibson" />
            <Button onClickHandler={handleClick} value="Taylor" title="Taylor" />
            <Button onClickHandler={handleClick} value="Martin" title="Martin" />
            <Button onClickHandler={handleClick} value="Fender" title="Fender" />
            <Button onClickHandler={handleClick} value="Gretsch" title="Gretsch" />
        </div>
      </div>
    </>
  )
}

export default Recommended
