import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img className='productdisplay-img-main' src={product.image} alt="product-image" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">R {product.old_price}</div>
                <div className="productdisplay-right-prices-new">R {product.new_price}</div>
            </div>
            <button className='btn-variation-1'>Add To Cart</button>






            <div className="description-box">
                <h3>Description</h3>
                <div className="description-box-wrapper">
                    <div className="productdisplay-right-description">
                        {product.description}
                    </div>
                    <p className="productdisplay-right-category">
                        <span>Category: </span> {product.category}
                    </p>
                    <p className="productdisplay-right-category">
                        <span>Brand:</span> {product.brand}
                    </p>
                </div>









            </div>
        </div>
    )
}

export default ProductDisplay