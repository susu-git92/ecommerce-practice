import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product( {id, title, image, price, rating} ) {

  const [{}, dispatch] = useStateValue();
  //{state}... {basket}

  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
      
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_)=>(
              <p>별</p>
            ))}
        </div>
      </div>

      <img src={image} alt=""/>
      <button onClick= {addToBasket}>Add To Basket</button>
      
    </div>
  )
}

export default Product
