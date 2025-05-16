import React from 'react'
import './Item.css'
const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image}></img>

      <p>{props.name}</p>

      <div className='item-price-new'>
        R {props.new_price}
      </div>

      <div className='item-price-old'>
        R {props.old_price}
      </div>

    </div>
  )
}

export default Items