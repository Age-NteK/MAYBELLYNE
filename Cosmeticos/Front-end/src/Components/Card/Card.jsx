import { Link, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
import styles from "./card.module.css";

const Card = ({ id_product, name, images, id_category, colors }) => {
  const location = useLocation();

  // Determinar las clases CSS en función de la ubicación actual
  const cardContainerClass =
    location.pathname === "/landing"
      ? styles.card_container // Clase para /landing
      : styles.card_container_product; // Clases para /products

  return (
    <div className={styles.container}>
      <Link to={`/detail/${id_product}`}>
        <div className={cardContainerClass}>
          {images[0] && <img src={images[0].url} alt={images[0].alt} />}
          <div className={styles.card_info}>
            <p className={styles.card_info_text}>{name}</p>
            <span>COMPRAR</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
