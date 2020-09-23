import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
      
      <div className="home_row">
        <Product 
        id="1"
        title="thssffe lean starㄹㄹt potential" 
        price = {11.95}
        rating= {5}
        image="https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-4.jpg"
        alt=""
        />
      </div>

      <div className="home_row">
        <Product 
        id="2"
        title="otentiadfd ssl" 
        price = {841.95}
        rating= {3}
        image="https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-11.jpg"
        alt=""
        />
      </div>

      <div className="home_row">
        <Product 
        id="3"
        title="그림" 
        price = {300}
        rating= {2}
        image="https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-17.jpg"
        alt=""
        />
      </div>
      
     
      
    </div>
  )
}

export default Home
