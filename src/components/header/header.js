import "./header.css";
import Navbar from "../navigation/navigation";

const Header = () => {
    return (
        <header className="headerBox">
            <img src="merchLogo.png" className="logoImage" alt=""></img>
            <Navbar />
        </header>
    );
};

export default Header;