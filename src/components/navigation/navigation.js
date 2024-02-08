import "./navigation.css";

const Navbar = () => {
    const pages = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Settings", path: "/settings" },
    ];

    return (
        <ul className="navbar">
            <li className="navbar__element">T-SHIRTS</li>
            <li className="navbar__element">SWEATSHIRTS</li>
            <li className="navbar__element">HOODIE</li>
            <li className="navbar__element">BACKPACKS</li>
            <li className="navbar__element">PANTS</li>
            <li className="navbar__element">SHIRTS</li>
            <li className="navbar__element">HATS</li>
        </ul>
    );
};

export default Navbar;
