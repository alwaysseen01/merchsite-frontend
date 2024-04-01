import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../itemDetails/itemDetails.scss';
import { type } from "@testing-library/user-event/dist/type";

const ItemDetails = () => {
    const { openedItemId } = useParams();
    const [item, setItem] = useState({});
    const [count, setCount] = useState(0);
    const [isAdding, setIsAdding] = useState(false);

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
    const handlePlusClick = () => {
        if (count < item.quantity) {
            setCount(count + 1);
        }
    }

    const handleAddToCart = () => {
        if (count > 0 && count <= item.quantity) {
            const element = document.querySelector('.addToCartButton');
            const cartIcon = document.querySelector('.navbar__element.cartPage');
    
            const flyingCount = document.createElement('div');
            flyingCount.className = 'flyingCount';
            flyingCount.textContent = `+${count}`;
            document.body.appendChild(flyingCount);
        
            const offset = element.getBoundingClientRect();
            const cartOffset = cartIcon.getBoundingClientRect();
        
            flyingCount.style.position = 'absolute';
            flyingCount.style.top = (window.pageYOffset + offset.top) + 'px';
            flyingCount.style.left = (window.pageXOffset + offset.left) + 'px';
        
            const animation = flyingCount.animate({
            top: (window.pageYOffset + cartOffset.top) + 'px',
            left: (window.pageXOffset + cartOffset.left) + 'px',
            opacity: 0,
            }, 1700);
    
            setCount(0);
        
            animation.onfinish = () => {
                flyingCount.remove();
            };
        } else {
            setCount(0);
            window.alert("You've entered a wrong number or number more than available quantity. Please change.");
        }

        const itemData = JSON.stringify({ item, count });
        localStorage.setItem(item.id, itemData);
    };      

    useEffect(() => {
        fetch('http://159.89.21.118:8080/api/item/id/' + openedItemId)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setItem(data);
        })
        .catch(error => {
            console.error('An error occured while trying to get ITEM BY ID!', error);
        });

        const itemQuantityFromDB = document.querySelector('.itemAvailableQuantity');
        itemQuantityFromDB.value = `Available quantity: ${item.quantity}`
    }, [openedItemId])

    return (
        <div className="itemDetailsWrapper">
            <h1 className="itemTitle">{item.name}</h1>
            <div className="itemDetailsBox">
                <img src={item.photo} className="itemImage"></img>
                <div className="itemDescriptionBox">
                    <h1 className="itemPrice">{item.price} USD</h1>
                    <p className="itemDescription">
                        {item.description} <br/>
                        Тонкая. Легкая. Ультра черная.
                        <br/>
                        <br/>
                        Лимитированная версия футболки B.O.M.J - первая единица контрбрендовой линии одежды. Потрясающие качество в совместительстве с уточненным подходом к деталям, которым не могут похвастаться именитые раздутые фирмы.
                        <br/>
                        <br/>
                        Ткань сорта пенье
                        <br/>
                        <br/>
                        Состав: 95% cotton, 5% spandex. Плотность 170 г/м²
                    </p>
                    <p className="itemAvailableQuantity">Available quantity: {item.quantity}</p>
                    <div className="itemCartBox">
                        <div className="itemCartCountWrapper">
                            <div className="itemCountMinus" onClick={handleMinusClick}>-</div>
                            <input 
                                className="itemCountStatus" 
                                value={count} 
                                onChange={(e) => setCount(e.target.value ? parseInt(e.target.value) : '')}
                                onFocus={(e) => {if (e.target.value === '0') e.target.value = '';}}
                                onBlur={(e) => {if (e.target.value === '') e.target.value = '0';}}
                                type="number" 
                                min="0" 
                                max={item.quantity} 
                            />
                            <div className="itemCountPlus" onClick={handlePlusClick}>+</div>
                        </div>
                        <button className="addToCartButton" onClick={handleAddToCart} disabled={isAdding}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;
