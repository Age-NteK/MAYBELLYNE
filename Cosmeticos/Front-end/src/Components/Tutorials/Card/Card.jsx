import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { useLocation } from "react-router-dom";

const Card = ({ id_tutorial, title, images, videos, content }) => {
  const location = useLocation();

  // Determinar las clases CSS en función de la ubicación actual
  const cardContainerClass =
    location.pathname === "/landing"
      ? styles.card_container // Clase para /landing
      : styles.card_container_product; // Clases para /tutorials
      
  return (
    <div className={styles.container}>
      <Link to={`/tutorials/${id_tutorial}`}>
        <div className={cardContainerClass}>
          {images && images[0] && (
            <img src={images[0].url} alt={images[0].alt} />
          )}
          <div className={styles.card_info}>
            <p className={styles.card_info_text}>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
