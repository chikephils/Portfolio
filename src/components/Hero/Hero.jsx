import React from "react";
import styles from "../Hero/Hero.module.css";

import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Oreva Philips Okumor</h1>
        <p className={styles.description}>
          I'm a Mern stack Developer with over 3 years experience in React , 4
          years experience in javascript and 2 years experience in Node js
        </p>
        <a href="mailto: chikephils@gmail.com" className={styles.contactBtn}>
          {" "}
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Assets/displaypic.jpg")}
        alt="profile"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
