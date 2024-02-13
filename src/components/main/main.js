import "./main.css";
import Tshirt from "../tshirt/tshirt";

const Main = () => {
    return (
        <main className="mainBox">
            <div className="itemsWrapper">
                {/* FOR LOOPS AND ITEMS FROM FETCH REQUEST */}
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
        </main>
    );
};

export default Main;
