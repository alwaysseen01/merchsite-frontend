import "./main.css";
import { Route, Routes, Navigate } from "react-router-dom";
import TshirtBox from "../tshirtBox/tshirtBox";

const Main = () => {
    return (
        <main className="mainBox">
            <Routes>
                <Route path="/t-shirts" element={<TshirtBox />} />
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
