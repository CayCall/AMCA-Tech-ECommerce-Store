import React from 'react';
import './Item.css'; // style it how you like

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="item-prices">
        <span className="item-price-new">R{new_price.toFixed(2)}</span>
        <span className="item-price-old">R{old_price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Item;
