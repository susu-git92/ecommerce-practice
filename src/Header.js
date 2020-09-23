import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { IoLogoOctocat } from 'react-icons/io';
import SearchIcon from "@material-ui/icons/Search";
import { BiBasket} from 'react-icons/bi';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}] = useStateValue();
  //basket은 []빈배열로 둔다 저 state가 {basket}이라고 보면될것같다.
  //useStateValue는 stateProvider에서 가져온것.export const useStateValue = () => useContext(StateContext);
  //dispatch는 총이라고 생각하면 된다 슛잇! 발사!하면 작동하는애 
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
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

         <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">

               {/*shopping basket con*/ }
               <BiBasket  style={{ color: '#fff' }} />
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
         </Link>

       </div>

        {/*Basket icon with number*/ }

    </nav>
  )
}

export default Header;
