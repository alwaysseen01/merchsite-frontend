import "./main.css";
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ItemsBox from '../itemsBox/itemsBox';
import CategoryContext from "../../contexts/categoryContext";

const Main = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/category')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, loading }}>
            <main className="mainBox">
                <Routes>
                    {categories.map((category) => (
                        <Route path={`/${category.name}`} element={<ItemsBox categoryId={category.id} />} />
                    ))}
                    <Route path="*" element={<Navigate to={`/${categories[0]?.name}`} />} />
                </Routes>
            </main>
        </CategoryContext.Provider>
    );
};

export default Main;
