import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js'


function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <>
    <div className="checkout">
      <img className="checkout_ad" src="" alt=""/>
      {basket?.length === 0 ? (
        //만약 장바구니에 아무것도 없다면 이 화면을 보여줘!
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>You have no items in your basket.</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Busket</h2>

          {/*List out all of the Checkout Products*/} 
          {basket?.map((item) => (
            // console.log(item);
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}  
        </div>
      )}
    </div>
    {basket.length > 0 && ( 
      <div className="checkout_right">
        <Subtotal />
      </div>)}
    </>
  );
}

export default Checkout;
