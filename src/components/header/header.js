import "./header.css";
import Navbar from "../navigation/navigation";
import logoImage from "../../public/merchLogo.png"

const Header = () => {
    return (
        <header className="headerBox">
            <img src={logoImage} className="logoImage" alt=""></img>
            <Navbar />
        </header>
    );
};

export default Header;