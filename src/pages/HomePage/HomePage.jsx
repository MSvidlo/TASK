
import React from "react";
import css from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={css.HomePage}>
     <h1 className={css.HomeHeader}>Welcome to the Camper Rental Service</h1>
     <p className={css.HomeText}>Find the best camper for your next adventure!</p>
    </div>
  );
};

export default HomePage;

