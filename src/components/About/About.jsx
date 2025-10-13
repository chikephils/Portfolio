import React from "react";
import styles from "../About/About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("Assets/aboutImg.png")}
          alt="aboutImg"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Assets/frontend.png")} alt="frontend" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in building responsive, scalable, and visually
                engaging interfaces using React.js, JavaScript, and modern UI
                libraries like Tailwind CSS and Material UI. I focus on
                performance and accessibility to deliver seamless user
                experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("Assets/backend.png")} alt="backend" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I develop efficient and secure RESTful APIs using Node.js,
                Express, and MongoDB. My goal is to build reliable server-side
                logic and ensure smooth communication between the frontend and
                backend for high-performing web applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("Assets/javascript.png")} alt="javascript" />
            <div className={styles.aboutItemText}>
              <h3>JavaScript Developer</h3>
              <p>
                With strong proficiency in modern JavaScript (ES6+), I’ve built
                and contributed to multiple projects across the MERN stack. I
                enjoy writing clean, modular, and maintainable code that powers
                dynamic, interactive web experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
