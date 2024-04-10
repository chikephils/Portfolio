import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li className={styles.educationItem} key={id}>
                <div className={styles.educationItemDetails}>
                  <h2>{educationItem.name}</h2>
                  <h3>{educationItem.description}</h3>
                  <p>{educationItem.year}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
