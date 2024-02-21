import "./main.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ItemsBox from '../itemsBox/itemsBox'

const Main = () => {
    return (
        <main className="mainBox">
            <Routes>
                <Route path="/t-shirts" element={<ItemsBox />} />
                <Route path="/sweatshirts" element="" />
                <Route path="/hoodie" element="" />
                <Route path="/backpacks" element="" />
                <Route path="/pants" element="" />
                <Route path="/shirts" element="" />
                <Route path="/hats" element="" />
                <Route path="*" element={<Navigate to="/t-shirts" />} />
            </Routes>
        </main>
    );
};

export default Main;
