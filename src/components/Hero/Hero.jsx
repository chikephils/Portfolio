import React from "react";
import styles from "../Hero/Hero.module.css";

import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Oreva Philips Okumor</h1>
        <p className={styles.description}>
          A Software Engineer passionate about creating modern, scalable, and
          user-friendly web applications. With over 3 years of experience
          working with the MERN stack (React, Node.js, Express, MongoDB), I love
          turning ideas into clean, efficient, and responsive digital
          experiences. I thrive in Agile teams, enjoy collaborating across
          design and development, and focus on delivering interfaces that don’t
          just work — they feel great to use. Every project I build is guided by
          one goal: to combine performance, usability, and creativity in a way
          that makes technology feel seamless.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto: chikephils@gmail.com" className={styles.contactBtn}>
            {" "}
            Contact Me
          </a>
          <a
            href="/Oreva_resume_Lines.pdf"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
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
