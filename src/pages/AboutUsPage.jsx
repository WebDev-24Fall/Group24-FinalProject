import React from "react";
import styles from "../styles/AboutUsPage.module.css";

import quote from "../assets/icon-quote.png";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUs}>
      <div className="container mx-auto p-6 relative z-10 bg-black/[.75]">
        <h1 className="text-white text-center text-xl sm:text-2xl md:text-4xl mb-3">
          Trend in Web Technology
        </h1>
        <h2 className="mb-10 md:mb-20 text-center text-lg md:text-2xl">Final Project - Group 24</h2>
        <div className="flex flex-col md:flex-row justify-center gap-3 px-3">
          <div className="md:w-1/3">
            <img src={quote} alt="Quote Icon" className="w-10" />
            <h2 className="my-3 font-bold">Blockchain</h2>
            <p className="my-3">
              "Exploring Trend in Web Technology has been eye-opening-especially
              diving into blockchain's transformative impact on secure and
              decentralized web solutions!"
            </p>
            <p>- Gu, Yunxiang (8904492)</p>
          </div>
          <div className="md:w-1/3">
            <img src={quote} alt="Quote Icon" className="w-10" />
            <h2 className="my-3 font-bold">Lorem ipsum dolor</h2>
            <p className="my-3">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              Lorem ipsum dolor sit amet"
            </p>
            <p>- Abdul Mannan, Mohammed</p>
          </div>
          <div className="md:w-1/3">
            <img src={quote} alt="Quote Icon" className="w-10" />
            <h2 className="my-3 font-bold">React - Building Interactive UIs</h2>
            <p className="my-3">
              "React simplifies web development with a component-based approach and virtual
               DOM for fast, dynamic user interfaces."
            </p>
            <p>- Kaur, Gurleen(8915254)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
