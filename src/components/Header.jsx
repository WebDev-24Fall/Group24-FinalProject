import { Link } from "react-router-dom";

import styles from "../styles/Layout.module.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container mx-auto flex items-center">
        <div className={styles.logoWrap}>
          <img className={styles.logo} src={Logo} alt="Final Project 24 Logo" />
        </div>
        <nav className="container">
          <ul className={styles.navList}>
            <li>
              <Link to="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/flavor" className="hover:text-gray-600">
                Flavor
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-gray-600">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
