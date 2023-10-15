import React from 'react'
import "./card.css";
// import { Link } from 'react-router-dom';
// import guitar from "../../assets/guitars/1.png";

const Card = ({ title, brandName, modelName, guitarType, numberOfStrings, prevPrice, price, color, image, material }) => {
  return (
    
    <div className='product'>
        
        <img className='product__image' src={image} alt={title} />
        <div className="product__details">
            <div className="product__heading">
                <h3 className="product__title">{title}</h3>
                <h3 className="product__strings__count">{numberOfStrings}</h3>
            </div>

            <div className="product__brand__type__model">
                <h3 className="product__brand">{brandName}</h3>
                <h3 className="product__type">{guitarType}</h3>
                <h3 className="product__model">{modelName}</h3>
            </div>

            <div className="product__color__material">
                
                <h3 className="product__material">{material}</h3>
                <h3 className="product__color">{color}</h3>
            </div>
            

            <div className="product__price">
                <div className="price">
                    <del>${prevPrice}</del> ${price}
                </div>

                <div className="add__to__cart">
                    <button 
                        className='product__atc__btn'
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
      
      </div>
      
  )
}

export default Card
