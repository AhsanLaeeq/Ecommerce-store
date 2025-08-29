import React from 'react'
import "./cart.css";
import {Link} from "react-router-dom";

const Cartitem = ({item}) => {
  return (
    <div className='maincart'>
      <Link to={`/product/${item.id}`}>
        <img src={item.thumbnail}  />
        <p className='desc'>{item.title}</p>
        <p className="price">${item.price}</p>
        </Link>
    </div>
  )
}

export default Cartitem