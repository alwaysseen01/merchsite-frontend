import "./header.css";
import Navbar from "../navigation/navigation";
import LogoIcon from "./icons/merchLogo.png";

const Header = () => {
    return (
        <header className="headerBox">
            <img src={LogoIcon} className="logoImage" alt=""></img>
            <Navbar />
        </header>
    );
};

export default Header;