import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";
import Card from "../Card/Card";
import styles from "./products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Determinar las clases CSS en función de la ubicación actual
  const cardContainerClass =
    location.pathname === "/landing"
      ? styles.cards_card // Clase para /landing
      : styles.cards_card_product; // Clases para /products

  const homeContainerClass =
    location.pathname === "/landing"
      ? styles.home // Clase para /landing
      : styles.home_product; // Clases para /products

  // Selección de estados globales
  const productsCopy = useSelector((state) => state.productsCopy);
  const productName = useSelector((state) => state.productName);

  console.log(productsCopy);

  // Montar todos los productos o buscar por nombre
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, productName]);

  // Determinar el número de tarjetas por página en función de la ruta
  const cardsPerPage = window.location.pathname === "/landing" ? 4 : 14;

  let productToShow;
  if (productName?.length > 0) {
    productToShow = productName;
  } else {
    productToShow = productsCopy;
  }

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards =
    productName?.length > 0 ? productName?.length : productsCopy?.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productToShow.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={homeContainerClass}>
      <div className={styles.paginado}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
      <div className={styles.card_all}>
        <div className={cardContainerClass}>
          {productToShow.length === 0 ? (
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            currentCards.map(
              (
                {
                  id_product,
                  name,
                  images,
                  price,
                  id_category,
                  rating,
                  description,
                  benefits,
                  application,
                  colors,
                },
                index
              ) => (
                <div className={styles.card_container} key={index}>
                  <Card
                    key={index}
                    id_product={id_product}
                    id_category={id_category}
                    name={name}
                    price={price}
                    images={images}
                    rating={rating}
                    description={description}
                    benefits={benefits}
                    application={application}
                    colors={colors}
                  />
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
