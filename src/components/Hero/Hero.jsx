import React from "react";
import styles from "../Hero/Hero.module.css";

import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Oreva Philips Okumor</h1>
        <p className={styles.description}>
          Experienced Software Engineer with over 3 years in JavaScript, 3 years
          in React, and 2 years in Node.js. Proven problem-solving skills,
          critical thinking, and analytics. Effective leader and collaborator
          with project management expertise. Passionate about building
          responsive web experiences using future-friendly technologies like
          React, Node.js, Express, and MongoDB. Strong background as a
          Professional Football Player, bringing adaptability, teamwork, and
          effective communication skills to the table.
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
