import React, { useState } from 'react';
import classes from './navbar.module.css';
import CloseIcon from '../icons/closeIcon';
import CartIcon from '../icons/cartIcon';
import HeartIcon from '../icons/heartIcon';
import ProfileIcon from '../icons/profileIcon';
import SearchBox from './searchBox';

function Navbar(props) {
  const [closeMenu, setMenuClose] = useState(true);
  function menuOpenHandler(event){
    setMenuClose(false);
    return;
  }
  function menuCloseHandler(event){
    setMenuClose(true);
    return;
  }
  return (
    <div className= {classes.navbar}>
      <p className={classes.burger} onClick={menuOpenHandler}>HB</p>
      <div>Icon</div>
      <div className={classes.cart}>Cart</div>
      <SearchBox />
      <ul className = {`${classes.navlist} ${!closeMenu && classes.menubar}  ${closeMenu && ''}`}>
          <li className={classes.close} onClick={menuCloseHandler}><span className={classes.cartInitial}><CloseIcon /></span></li>
          <li><span className={classes.cartInitial}><ProfileIcon /></span>Profile</li>
          <li><span className={classes.cartInitial}><HeartIcon /></span>Wishlist</li>
          <li className={classes.cartMenu}>
            <span className={classes.cartInitial}><CartIcon /></span>Bag
          </li>
      </ul>
    </div>
  );
}
  
export default Navbar;





  