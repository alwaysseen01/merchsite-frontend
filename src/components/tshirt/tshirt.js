import "./tshirt.css";

const Tshirt = () => {
    return (
        <div className="itemBox">
            <h2 className="itemPrice">20.5$</h2>
            <img className="itemPhoto" src="shirt1.png" alt=""></img>
            <h3 className="itemName">Black T-shirt</h3>
            <button className="moreDetailsButton">Get more details</button>
        </div>
    );
};

export default Tshirt;

