import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import "./itemsBox.css";

const ItemsBox = ({categoryId}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/item/category/' + categoryId)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setItems(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('An error occured while trying to get ITEMS BY CATEGORY!', error);
        });
    }, [categoryId]);

    if (loading) {
        return (
            <div className="itemsWrapper">
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
                <div className="itemLoadingBox"></div>
            </div>
        );
    }

    return (
        <div className="itemsWrapper">
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

