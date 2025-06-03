import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <nav aria-label="Breadcrumb">
      <div className='breadcrum'>
        <ol>
          <li><Link to="/home">Home</Link></li>
          <li aria-hidden="true">
            <img className="breadcrum-arrow" src={arrow_icon} alt="A bread crumb arrow facing right for navigation." />
          </li>
          <li><Link to="/shop">Shop</Link></li>
          <img src={arrow_icon} alt="A second bread crumb arrow facing right for navigation." />
          <li aria-current="page">{product.name}</li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrum