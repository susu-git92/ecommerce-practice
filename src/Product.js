import React, {useState, useEffect} from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product ( ) {
  // const {products} = useState(StateContext);
   //{state}... {basket}
  const [state, dispatch] = useStateValue();
  const [flag, setFlag] = useState(true);
  // console.log(state)

  const addToBasket = (product) => {
    //Add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        ...product,
        product,
      },
    });
  };
  // dispatch({
  //   type: 'ADD_TO_BASKET',
  //   item: {
  //     id: id,
  //     title: title,
  //     image: image,
  //     price: price,
  //     rating: rating,
  //   }
  // })

  const handleFlagChange = (flag) => {
    setFlag(flag);
  };

  useEffect(() => {
    console.log(flag);
  }, [flag]);

  return (
    <div className="home">
      <button className= "price_btn" onClick={() => handleFlagChange(true)}>높은순</button>
      <button className= "price_btn" onClick={() => handleFlagChange(false)}>낮은순</button>
      { 
      flag
      ? 
        state.product.sort((a,b) => b.price - a.price).map(product => (
        <div className="home_row">
      <div className="product">
        <div className="product_info">
        
          <p>{product.title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <div className="product_rating">
            {Array(product.rating)
              .fill()
              .map((_)=>(
                <p>별</p>
              ))}
          </div>
        </div>
        <img src={product.image} alt=""/>
        <button onClick= {() => addToBasket(product)}>Add To Basket</button>
      </div>
      </div>
        ))
      :
      state.product.sort((a,b) => a.price - b.price).map(product => (
        <div className="home_row">
      <div className="product">
        <div className="product_info">
        
          <p>{product.title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <div className="product_rating">
            {Array(product.rating)
              .fill()
              .map((_)=>(
                <p>별</p>
              ))}
          </div>
        </div>
        <img src={product.image} alt=""/>
        <button onClick= {() => addToBasket(product)}>Add To Basket</button>
      </div>
      </div>
      ))}
      

    </div>
  )
}

export default Product
