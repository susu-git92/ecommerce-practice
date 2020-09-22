import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { IoLogoOctocat } from 'react-icons/io';
import SearchIcon from "@material-ui/icons/Search"

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
      <IoLogoOctocat className="header_logo" alt="logo"/>
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
              <span>Hello Qazi</span>
              <span>Sign In</span>
            </div>
         </Link>

         <Link to="/login"  className="header_link">
            <div className="header_option">
              <span>Returns</span>
              <span>& Orders</span>
            </div>
         </Link>

         <Link to="/login"  className="header_link">
            <div className="header_option">
              <span>Your</span>
              <span>Prime</span>
            </div>
         </Link>

       </div>

        {/*Basket icon with number*/ }

    </nav>
  )
}

export default Header;
