import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { IoLogoOctocat } from 'react-icons/io';
import SearchIcon from "@material-ui/icons/Search";
import { BiBasket} from 'react-icons/bi';

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
      <IoLogoOctocat style={{ color: '#fff' }} className="header_logo" alt="logo"/>
      </Link>

      {/*Search box*/ }
      <div className="header_Search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>


       {/*3Links*/ }
       <div className="headerNav">

         <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Hello Qazi</span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
         </Link>

         <Link to="/login"  className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
         </Link>

         <Link to="/login"  className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne" >Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
         </Link>

         <Link to="/checkout">
            <div className="header_optionBasket">
               {/*shopping basket con*/ }
               <BiBasket  style={{ color: '#fff' }} />

               {/*Number of items in the basket*/ }
               <span>0</span>
            </div>
         </Link>

       </div>

        {/*Basket icon with number*/ }

    </nav>
  )
}

export default Header;
