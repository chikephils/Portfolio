import React from "react";
import styles from "../About/About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About</h2>
      <div className={styles.content}>
        <img src={getImageUrl('Assets/aboutImg.png')} alt="aboutImg" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Assets/frontend.png")} alt="frontend" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend Developer with working experience in building responsive and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Assets/backend.png")} alt="backend" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimized rest APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('Assets/javascript.png')}
              alt="javascript"
            />
            <div className={styles.aboutItemText}>
              <h3>Javascript Developer</h3>
              <p>
                I have experience working with Javascript and i've built and
                contributed in various javascript projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
