import { Link } from "react-router-dom";
// import SearchProduct from "../Search/SearchProduct";
import styles from "./topnav.module.css";

const TopSearchBar = () => {
  return (
    <div className={styles.topbar_cont}>
      <div className={styles.topbar_container}>
        {/* <div className={styles.search}>
          <SearchProduct />
        </div> */}
        <div className={styles.icon_container}>
          <Link to="/landing">
            <button className={styles.topbar_btn}>HOME</button>
          </Link>
          <Link to="/products">
            <button className={styles.topbar_btn}>PRODUCTOS</button>
          </Link>
          <Link to="/favorites">
            <button className={styles.topbar_btn}>FAVORITOS</button>
          </Link>
          <Link to="/tutorials">
            <button className={styles.topbar_btn}>TUTORIALES</button>
          </Link>
          <Link to="/orders">
            <button className={styles.topbar_btn}>MIS PEDIDOS</button>
          </Link>
          <Link to="/profile">
            <button className={styles.topbar_btn}>PERFIL</button>
          </Link>
          <Link to="/about">
            <button className={styles.topbar_btn}>SOBRE NOSOTROS</button>
          </Link>
          <Link to="/notfound">
            <button className={styles.topbar_btn}>NOT FOUND</button>
          </Link>
          <Link to="/cart">
            <button className={styles.topbar_btn_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </Link>

          <Link to="/login">
            <button className={styles.topbar_btn_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;
