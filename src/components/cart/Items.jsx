import React from 'react'


const Items = ({serialNumber, title, color, image, price, removeFromCart, quantity}) => {
    // console.log(quantity);
  return (
    <>
      <div className="items-info">
            <div className="product-img">
                <img src={image} alt={title} />
            </div>

            <div className="title">
                <h2>{title}</h2>
                <p>{color} color</p>
            </div>

            <div className="add-minus-quantity">
            

            <p>Quantity : {quantity}</p>

            
            </div>

            <div className="price">
                <h3>${price * quantity}</h3>
            </div>

            <div className="remove-item">
            <i className='bx bx-trash remove'
            onClick={() => removeFromCart(serialNumber)}
            ></i>
            </div>
            </div>
            <hr />
    </>
  )
}

export default Items
