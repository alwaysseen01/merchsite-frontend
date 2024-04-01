import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Item from '../item/item';
import "../itemsBox/itemsBox.css"
import "./cart.scss";
import AuthContext from "../../contexts/authContext";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const { isAuthenticated, setRedirectTo, redirectTo } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            let items = [];
            let total = 0;
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = JSON.parse(localStorage.getItem(key));
                items.push(value);
                total += value.item.price * value.count;
            }
            setCartItems(items);
            setTotalCost(total);
        } else {
            console.log("NOT AUTHENTICATED, redirecting to --> '/login'");
            setRedirectTo('/login');
            if (redirectTo) {
                navigate(redirectTo);
            }
        }
    }, [isAuthenticated, navigate, redirectTo, setRedirectTo]);

    const clearLocalStorage = () => {
        localStorage.clear();
        setCartItems([]);
    }

    return (
        <div className="cartPageBox">
            <div className="userDetailsBox">
                <h1>User account details</h1>
                <ul className="userData">
                    <li className="userFirstName">Name: Igor</li>
                    <li className="userLastName">Last name: Ruzhilov</li>
                    <li className="userEmail">Email: iruzhilov@gmail.com</li>
                    <li className="userPhoneNumber">Phone number: +7-708-353-14-19</li>
                </ul>
                <ul className="deliveryDetailsBox">
                    <li className="userDeliveryAddress">Delivery address: Almaty City, Altai-2 mcd. 45 h. apt. 4</li>
                    <li className="userDeliveryPostCode">Post code: 050039</li>
                </ul>
            </div>
            <h1 style={{marginBottom: "50px"}}>Cart items</h1>
            <div className="itemsWrapper">
                {cartItems.length > 0 ? (
                    cartItems.map((cartItem, index) => 
                        <div key={index}>
                            <Item
                                price={cartItem.item.price}
                                photo={cartItem.item.photo}
                                name={cartItem.item.name}
                                id={cartItem.item.id}
                            />
                            <div className="cartItemInfoWrapper">
                                <p className="cartItemQuantity"> Quantity: {cartItem.count} </p>
                                <p className="cartItemCost"> {cartItem.item.price * cartItem.count}$ </p>
                            </div>
                        </div>  
                    )
                ) : (
                    <p style={{width: "100%", color: "grey"}}>It looks empty here...</p>
                )}
            </div>
            <h1 style={{marginTop: "80px"}}>Total cost of all items: {totalCost}$</h1>
            <div className="cartMenuWrapper">
                <button className="clearCartButton" onClick={clearLocalStorage}>CLEAR CART</button>
                <button className="orderNowButton">ORDER NOW</button>
            </div>
        </div>
    );
};

export default Cart;
