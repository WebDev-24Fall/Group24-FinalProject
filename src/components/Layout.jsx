import React from "react";

import styles from "../styles/Layout.module.css";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 Trends in Web Technology - Final Project Group 24</p>
      </footer>
    </>
  );
};

export default Layout;
