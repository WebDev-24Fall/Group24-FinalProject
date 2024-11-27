import React from "react";
import styles from "../styles/AboutUsPage.module.css";

import quote from "../assets/icon-quote.png";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUs}>
      <div className="container mx-auto p-6 relative z-10 bg-black/[.75]">
        <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl mb-3">
          Trend in Web Technology
        </h1>
        <h2 className="mb-12 text-center text-xl sm:text-xl md:text-2xl">Final Project - Group 24</h2>
        <div className="flex flex-row justify-center gap-3 px-3">
          <div className="w-1/3">
            <img src={quote} alt="Quote Icon" className="w-10" />
            <h2 className="my-3 font-bold">Blockchain</h2>
            <p className="my-3">
              "Exploring Trend in Web Technology has been eye-opening-especially
              diving into blockchain's transformative impact on secure and
              decentralized web solutions!"
            </p>
            <p>- Gu, Yunxiang (8904492)</p>
          </div>
          <div className="w-1/3">
            <img src={quote} alt="Quote Icon" className="w-10" />
            <h2 className="my-3 font-bold">Lorem ipsum dolor</h2>
            <p className="my-3">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              Lorem ipsum dolor sit amet"
            </p>
            <p>- Abdul Mannan, Mohammed</p>
          </div>
          <div className="w-1/3">
            <img src={quote} alt="Quote Icon" className="w-10" />
            <h2 className="my-3 font-bold">Lorem ipsum dolor</h2>
            <p className="my-3">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              Lorem ipsum dolor sit amet"
            </p>
            <p>- Kaur, Gurleen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
