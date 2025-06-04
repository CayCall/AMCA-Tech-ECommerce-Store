import React, { useContext, useEffect, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Items'; // create this component
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = () => {

  const { all_product } = useContext(ShopContext);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (all_product.length > 0) {
      setDisplayedProducts(all_product);
    }
  }, [all_product]);


  //i decided to sort locally instead of sorting in parent context 
  const handleSort = (direction) => {
    const scrollY = window.scrollY;
    setLoading(true);


    setTimeout(() => {
      const sorted = [...displayedProducts].sort((a, b) => {
        if (direction === 'asc') return a.new_price - b.new_price;
        if (direction === 'desc') return b.new_price - a.new_price;
        return 0;
      });

      setDisplayedProducts(sorted);
      setLoading(false)

      window.scrollTo({ top: scrollY, behavior: 'instant' });
    }, 700);
  };



  return (
    <div className="shop-category" role="region" aria-label="Product Catalog">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1–36</span> out of {displayedProducts.length} products
        </p>

        <div className="shopcategory-sort-wrapper">
          <button
            type="button"
            className="shopcategory-sort-button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-controls="sort-options"
          >
            Sort by <img src={dropdown_icon} alt="" aria-hidden="true" />
          </button>

          {/* Always render dropdown menu */}
          <div className="sort-dropdown-menu" role="listbox" id="sort-options">
            <p role="option" tabIndex={0} onClick={() => handleSort('asc')}>Price: Low to High</p>
            <p role="option" tabIndex={0} onClick={() => handleSort('desc')}>Price: High to Low</p>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="loading-spinner">Loading products...</div>
      ) : (
        <div className="shop-category-products" role="list">
          {displayedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              brand={item.brand}
              category={item.category}
              description={item.description}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ShopCategory;
