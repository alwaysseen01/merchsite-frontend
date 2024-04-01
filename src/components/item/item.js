import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
      <div className="itemBox">
        <h2 className="itemPrice">{props.price}</h2>
        <img className="itemPhoto" src={props.photo} alt=""></img>
        <h3 className="itemName">{props.name}</h3>
        <Link to={`/item/${props.id}`}>
          <button className="moreDetailsButton">Get more details</button>
        </Link>
      </div>
    );
};

export default Item;

