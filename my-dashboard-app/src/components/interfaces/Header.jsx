// Header.js
import React from "react";
import styles from "../css/Header.module.css"; // Import the CSS file

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="../../../SportSee.png" alt="Logo" />
        <h1>SportSee</h1>
      </div>
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">Profil</a>
        <a href="/contact">Réglage</a>
        <a href="/contact">Communauté</a>
      </nav>
    </header>
  );
};

export default Header;
