import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrumbMenu/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const ProductPage = () => {
  const { all_product } = useContext(ShopContext);
  const { productName} = useParams();
  const product = all_product.find((item) => String(item.name) === String(productName));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default ProductPage