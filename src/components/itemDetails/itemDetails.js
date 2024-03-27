import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import '../itemDetails/itemDetails.scss'

const ItemDetails = () => {
    const { openedItemId } = useParams();
    const [item, setItem] = useState({});
    const [count, setCount] = useState(0);

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
                            <div className="itemCountStatus">{count}</div>
                            <div className="itemCountPlus" onClick={handlePlusClick}>+</div>
                        </div>
                        <button className="addToCartButton">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;
