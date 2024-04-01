import "./main.css";
import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemsBox from '../itemsBox/itemsBox';
import Cart from '../cart/cart';
import ItemDetails from "../itemDetails/itemDetails";
import LoginBox from "../loginBox/loginBox";
import RegisterBox from "../registerBox/registerBox";
import CategoryContext from "../../contexts/categoryContext";
import AuthProvider from "../../contexts/authProvider";

const Main = () => {
    const { categories } = useContext(CategoryContext);

    return (
            <main className="mainBox">
                <AuthProvider>
                    <Routes>
                        {categories.length === 0 ? (
                            <>
                                <Route path="*" element={<ItemsBox categoryId={"default"} />} />
                            </>
                        ) : (
                            categories.map((category) => (
                                <Route path={`/${category.name}`} element={<ItemsBox categoryId={category.id} />} />
                            ))
                        )}
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/item/:openedItemId" element={<ItemDetails />} />
                        <Route path="/login" element={<LoginBox />} />
                        <Route path="/register" element={<RegisterBox />} />
                        <Route path="*" element={<Navigate to="t-shirts"/>} />
                    </Routes>
                </AuthProvider>
            </main>
    );
};

export default Main;
