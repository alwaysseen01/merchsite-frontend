import "./item.css";

const Item = (props) => {
    return (
        <div className="itemBox">
            <h2 className="itemPrice">{props.price}</h2>
            <img className="itemPhoto" src={props.photo} alt=""></img>
            <h3 className="itemName">{props.name}</h3>
            <button className="moreDetailsButton">Get more details</button>
        </div>
    );
};

export default Item;

