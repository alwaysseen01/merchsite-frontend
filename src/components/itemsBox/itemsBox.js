import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import "./itemsBox.css";

const ItemsBox = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/...')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="ItemBox">
            {items.map(item => 
                <Item
                    key={item.id} 
                    price={item.price} 
                    photo={item.photo} 
                    name={item.name} 
                />
            )}
        </div>
    );
};

export default ItemsBox;

