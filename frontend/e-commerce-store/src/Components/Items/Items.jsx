import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


//here i will map all the props for every item that will be in the shop
//props are passed to this component from shop all_product in shop category.jsx
const Item = ({ id, name, brand, description,category, image, new_price, old_price }) => {
  return (
    <Link to={`/product/${name}`} className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {/*I will not render these*/}
      <p style={{ display: 'none' }}>{brand}</p>
      <p style={{ display: 'none' }}>{category}</p>
      <p style={{ display: 'none' }}>{description}</p>
      {/* this will be for the prices , all fixed to 2 decimals*/}
      <div className="item-prices">
        <span className="item-price-new">R{new_price.toFixed(2)}</span>
        <span className="item-price-old">R{old_price.toFixed(2)}</span>
      </div>
    </Link>
  );
};

export default Item;
