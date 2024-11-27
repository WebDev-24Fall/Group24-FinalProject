import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className="container mx-auto flex flex-col">
        <div className="justify-center">
          <h2 className="text-center text-xl sm:text-2xl">Final Project - Group 24</h2>
          <h1 className="mt-12 text-center text-3xl sm:text-6xl md:text-8xl  ">
            Fuel Your Life <br /> with Healthy Choices
          </h1>
          <div className="mt-10 text-center">
            <button className="border py-2 px-6 rounded bg-white hover:bg-gray-200">
              Join Us Today!
            </button>
          </div>
          <div className="mt-12 text-center">
            <ul className="flex flex-col gap-3">
              <li>Home Page: Gu, Yunxiang</li>
              <li>Abdul Mannan, Mohammed</li>
              <li>Kaur, Gurleen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
