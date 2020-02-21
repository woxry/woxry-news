import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';
import logo from './logo.png';

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={logo} />
      </div>
    </header>
  );
}

export default Header;