import { Link } from "react-router-dom";
import Home from "../Products/Products";
import Sail from "../Sail/Sail";
import NavBar from "../TopNav/TopNav";
import Header from "../Header/Header";
import Tutorials from "../Tutorials/Tutorials";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styles from "./landing.module.css";

// Import Bootstrap styles and JavaScript for the carousel
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className={styles.section_header}>
        <h1>MAYBELLINE</h1>

        <Link to="/tutorials">
          MAKE UP STUDIO <BsFillArrowRightCircleFill className={styles.icon} />
        </Link>
        <div className={styles.icon_down}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            class="bi bi-arrow-down-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
          </svg>
        </div>
      </div>

      <Tutorials />
      <div className={styles.section_header}>
        <h1>NUEVOS PRODUCTOS</h1>
        <Link to="/products">
          NUEVOS PRODUCTOS{" "}
          <BsFillArrowRightCircleFill className={styles.icon} />
        </Link>
      </div>
      <Home />
      <div className={styles.section_header}>
        <h1>LOS MÁS VENDIDOS</h1>
        <Link to="/sail">
          SHOP ALL <BsFillArrowRightCircleFill className={styles.icon} />
        </Link>
      </div>
      <Sail />
    </div>
  );
};

export default Landing;
