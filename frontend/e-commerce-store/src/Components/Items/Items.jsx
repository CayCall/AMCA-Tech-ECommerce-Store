import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


//here i will map all the props for every item that will be in the shop
//props are passed to this component from shop all_product in shop category.jsx
const Item = ({ id, name, brand, description, category, image, new_price, old_price }) => {
  return (
    <Link 
      to={`/product/${name}`} 
      className="item"
      aria-label={`View product${name}, price ${new_price.toFixed(2)}`}
    >
      <img 
        src={image} 
        alt={name} 
        onClick={window.scrollTo(0,0)} 
        loading="lazy"
      />

      <h3>{name}</h3>

      {/*I will not render these*/}
      <span className='visually-hidden'>{brand}</span>
      <span className='visually-hidden'>{category}</span>
      <span className='visually-hidden'>{description}</span>

      {/* this will be for the prices , all fixed to 2 decimals*/}
      <div className="item-prices" aria-label='Price details'>
        <span className="item-price-new" aria-label={`Current Price: ${new_price.toFixed(2)}`}>
          R{new_price.toFixed(2)}
        </span>

        <span className="item-price-old" aria-label={`Current Price: ${old_price.toFixed(2)}`}>
          R{old_price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};

export default Item;
