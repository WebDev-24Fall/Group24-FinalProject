import React from "react";
import styles from "../styles/FlavourPage.module.css";
import bread1 from "../assets/Bread1.png";
import bread2 from "../assets/Bread2.png";

const FlavourPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.flavourPage}>
        <div className={styles.container}>
          {/* Left Image Section */}
          <div className={styles.imageSection}>
            <img src={bread1} alt="Grilled chicken" className={styles.image} />
            <img src={bread2} alt="Bread" className={styles.image} />
          </div>

          {/* Right Text Section */}
          <div className={styles.textSection}>
            <h1 className={styles.title}>A FRENCH FLING</h1>
            <p className={styles.description}>
              At La Lune French Bistro, every bite tells a story of love, passion, and the
              timeless allure of Paris. Our founder, Chef Ingrid Correa, honed her craft in
              the heart of the City of Light, where she embraced the artistry of French
              cuisine and the warmth of café culture. Her journey through cobblestone streets,
              vibrant markets, and the kitchens of culinary legends inspired her to recreate
              the magic of Paris back home. Here, we invite you to savor the delicate balance of
              tradition and creativity, where every dish is a tribute to the romance and flavors of France.
            </p>
            <button className={styles.button}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavourPage;
