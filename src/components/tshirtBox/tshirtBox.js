import React, { useEffect, useState } from 'react';
import Tshirt from '../tshirt/tshirt';
import "./tshirtBox.css";

const TshirtBox = () => {
    const [tshirts, setTshirts] = useState([]);

    useEffect(() => {
        fetch('/tshirts')
            .then(response => response.json())
            .then(data => setTshirts(data));
    }, []);

    return (
        <div className="tshirtBox">
            {tshirts.map(tshirt => 
                <Tshirt 
                    key={tshirt.id} 
                    price={tshirt.price} 
                    photo={tshirt.photo} 
                    name={tshirt.name} 
                />
            )}
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
            <Tshirt />
        </div>
    );
};

export default TshirtBox;

