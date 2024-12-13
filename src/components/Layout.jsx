import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <div className="flex-1"></div>
      <footer className={styles.footer}>
        <p>© 2024 Trends in Web Technology - Final Project Group 24</p>
      </footer>
    </div>
  );
};

export default Layout;
