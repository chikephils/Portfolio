import styles from "./App.module.css";
import ScrollToTop from "./ScrollToTop";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <ScrollToTop />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
