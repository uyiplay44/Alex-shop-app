import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="Navbar_main">
      <div className="Nav_logo">
        <Link to="/">
          <img src={Logo} alt="nav" />
        </Link>
      </div>

      <nav>
        <ul className={`nav-list ${nav ? "nav-open" : ""}`}>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav-toggle" onClick={handleClick}>
        {!nav ? <RiMenu3Fill /> : <RiCloseFill />}
      </div>
    </header>
  );
};

export default Navbar;
