import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";
import Card from "../Card/Card";
import styles from "./sail.module.css";

const Sail = () => {
  const dispatch = useDispatch();

  // Selección de estados globales
  const productsCopy = useSelector((state) => state.productsCopy);
  const productName = useSelector((state) => state.productName);

  console.log(productsCopy);

  // Toggle isClicked state
  // const [isClicked, setIsClicked] = useState(false);
  // const handleClick = () => {
  //   setIsClicked((prevState) => !prevState);
  // };

  // Montar todos los productos o buscar por nombre
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, productName]);

  let productToShow;
  if (productName?.length > 0) {
    productToShow = productName;
  } else {
    productToShow = productsCopy;
  }

  // ! PASAR PAGINADO A REDUX Y NAV BAR
  // Paginación
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(2);
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
    <div className={styles.home}>
      {/* <button onClick={handleClick}>Search</button> */}
      <div className={styles.paginado}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>

      <div className={styles.card_all}>
        <div className={styles.cards_card}>
          {productToShow.length === 0 ? (
            <p>Loading...</p>
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
                <div className={styles.card_container}>
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
          {/* {isClicked && (
        <div className={styles.navbar}>
          <AsideNav />
        </div>
      )} */}
        </div>
      </div>
    </div>
  );
};

export default Sail;
