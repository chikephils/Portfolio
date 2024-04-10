import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("Assets/email.png")} alt="Email icon" className={styles.linkImg} />
          <a href="mailto:chikephils@gmail.com">chikephils@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Assets/linkedn.png")} alt="LinkedIn icon" className={styles.linkImg} />
          <a href="https://www.linkedin.com/in/oreva-okumor">
            linkedin.com/in/oreva-okumor
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Assets/github.png")} alt="Github icon" className={styles.linkImg} />
          <a href="https://github.com/chikephils">github.com/chikephils</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
