import "./main.css";
import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ItemsBox from '../itemsBox/itemsBox';
import CategoryContext from "../../contexts/categoryContext";

const Main = () => {
    const { categories } = useContext(CategoryContext);

    return (
            <main className="mainBox">
                <Routes>
                    {categories.length === 0 ? (
                        <Route path="*" element={<Navigate to={`/t-shirts`} />} />
                    ) : (
                        categories.map((category) => (
                            <Route path={`/${category.name}`} element={<ItemsBox categoryId={category.id} />} />
                        ))
                    )}
                </Routes>
            </main>
    );
};

export default Main;
