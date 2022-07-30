import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StarRating from '../../card/starRating';
import CartIcon from '../../icons/cartIcon';
import HeartIcon from '../../icons/heartIcon';
import classes from './productView.module.css';

function ProductView(props) {
    const [size, setSize] = useState("0");
    const location = useLocation();
    function sizeHandler(event){
        setSize(event.target.innerText);
        return;
    }
    return(
        <div className={classes.view}>
            <div className={classes.image}><img src = {location.state.image} alt = "Sneakers"></img></div>
            <div className={classes.details}>
                <p className={classes.company}>{location.state.company}</p>
                <p className={classes.product}>{location.state.product}</p>
                <p className={classes.rating}><StarRating stars={location.state.rating}/>{location.state.rating}</p>
                <p className={classes.price}>&#8377;{location.state.sp}&nbsp;&nbsp;
                    <span className={classes.mrp}>&#8377;{location.state.mrp}</span>
                    <span className={classes.discount}>&nbsp;&nbsp;({location.state.discount}% off)</span>
                </p>
                <p className={classes.tax}>Inclusive of all taxes</p>
                <p>SELECT SIZE (UK)</p>
                <ul className={classes.size}>
                    <li><button className={size === "6" ? classes.sizeActive : ''} onClick={sizeHandler}>6</button></li>
                    <li><button className={size === "7" ? classes.sizeActive : ''} onClick={sizeHandler}>7</button></li>
                    <li><button className={size === "8" ? classes.sizeActive : ''} onClick={sizeHandler}>8</button></li>
                    <li><button className={size === "9" ? classes.sizeActive : ''} onClick={sizeHandler}>9</button></li>
                    <li><button className={size === "10" ? classes.sizeActive : ''} onClick={sizeHandler}>10</button></li>
                </ul>
                <button className={classes.bag}><span className={classes.cartIcon}><CartIcon /></span>&nbsp;&nbsp;&nbsp;ADD TO BAG</button>&nbsp;
                <button className={classes.wish}><span className={classes.heartIcon}><HeartIcon /></span>&nbsp;&nbsp;&nbsp;WISHLIST</button>
            </div>
        </div>
    );
}

export default ProductView;