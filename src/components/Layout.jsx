import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Layout.module.css";
import Logo from "../assets/logo.png";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className="container mx-auto flex items-center">
          <div className={styles.logoWrap}>
            <img className={styles.logo} src={Logo} alt="Logo" />
          </div>
          <nav className="container">
            <ul className={styles.navList}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 Trends in Web Technology - Final Project Group 24</p>
      </footer>
    </>
  );
};

export default Layout;
