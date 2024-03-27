import { useEffect, useState } from "react";
import Item from '../item/item';
import "./cart.scss";

const Cart = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        let cartItems = [];
    }, []);

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
            <h1>Cart items</h1>
            <div className="cartItemsWrapper">
                {/* {cartItems.map(cartItem => 
                    <Item
                        key={cartItem.id} 
                        price={cartItem.price} 
                        photo={cartItem.photo} 
                        name={cartItem.name} 
                    />  
                )} */}
            </div>
        </div>
    );
};

export default Cart;
