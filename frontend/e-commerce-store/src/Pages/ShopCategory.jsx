import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Items'; // create this component
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1–12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>

      <div className="shop-category-products">
        {all_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
