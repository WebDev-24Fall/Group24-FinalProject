// FlavourPage2.jsx

import React from "react";
import styles from "../styles/FlavourPage2.module.css";
import appetizerImage from "../assets/appet.jpg"; 
import breadImage from "../assets/mains.jpg"; 
import dessertImage from "../assets/sweets.jpeg"; 

const FlavourPage2 = () => {
  return (
    <div className={styles.flavourPageFrance}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Flavors of France</h1>
        <p className={styles.description}>
          Paris is a melting pot, as our food can attest. Take a bite and savor la vie délicieuse!
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={appetizerImage} alt="Appetizers" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Mouthwatering Appetizers</h2>
        </div>
        <div className={styles.card}>
          <img src={breadImage} alt="Bread" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Wholesome Mains</h2>
        </div>
        <div className={styles.card}>
          <img src={dessertImage} alt="Dessert" className={styles.cardImage} />
          <h4 className={styles.cardTitle}>Sweet Endings</h4>
        </div>
      </div>
    </div>
  );
};

export default FlavourPage2;
