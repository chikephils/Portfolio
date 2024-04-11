import React, { useEffect, useState } from "react";
import styles from "../Navbar/Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Portfolio
      </Link>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("Assets/closeIcon.png")
              : getImageUrl("Assets/menu.png")
          }
          alt="menubar"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
