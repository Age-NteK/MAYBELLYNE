import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { getAllTutorials } from "../../Redux/actions";
import Card from "./Card/Card";
import styles from "./tutorials.module.css";

const Tutorials = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const tutorialsCopy = useSelector((state) => state.tutorialsCopy);

  // Determinar las clases CSS en función de la ubicación actual
  const cardContainerClass =
    location.pathname === "/landing"
      ? styles.cards_card // Clase para /landing
      : styles.cards_card_product; // Clases para /tutorials

  useEffect(() => {
    dispatch(getAllTutorials());
  }, [dispatch]);

  // ! Paginación
  // Determinar el número de tarjetas por página en función de la ruta
  const cardsPerPage = window.location.pathname === "/landing" ? 4 : 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalCards = tutorialsCopy ? tutorialsCopy.length : 0;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = tutorialsCopy
    ? tutorialsCopy.slice(indexOfFirstCard, indexOfLastCard)
    : [];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles.card_all}>
      {location.pathname === "/tutorials" && (
        <div className={styles.title}>
          <Link to="/landing">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </Link>

          <h1>POTENCIA TU BELLEZA NATURAL</h1>
          <h3>♥ Con Nuestros Tutoriales Pensados Especialmente Para Ti ♥</h3>
        </div>
      )}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev Page
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      )}
      <div className={cardContainerClass}>
        {currentCards ? (
          currentCards?.map((tutorial, index) => (
            <div key={index} className={styles.card_container}>
              <Card {...tutorial} />
            </div>
          ))
        ) : (
          <p style={{ marginTop: "150px" }}>Cargando tutoriales...</p>
        )}
      </div>
    </div>
  );
};

export default Tutorials;

// import { Link, useLocation } from "react-router-dom";
// import styles from "./tutorials.module.css";

// const Tutorials = () => {
//   // Determinar las clases CSS en función de la ubicación actual
//   const location = useLocation();
//   const cardContainerClass =
//     location.pathname === "/landing"
//       ? styles.images // Clase para /landing
//       : styles.images_tutorials; // Clases para /tutorials

//   return (
//     <div className={styles.container}>
//       <Link to="/landing">
//         <div className={cardContainerClass}>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/de-la-pasarela-a-la-calle/pintalabios-permanente-mate/maybelline-espana-el-pintalabios-permanente-que-lo-aguanta-todo-c.jpg?rev=b25bd978d0cf44cf9568c03d921a7d27"
//             alt="Imagen 2"
//           />{" "}
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/trucos-de-maquillaje-cejas-pobladas/maybelline-espana-los-mejores-trucos-para-cejas-pobladas.jpg?rev=091b5342e2944f048cea62cccf8a2cee"
//             alt="Imagen 1"
//           />
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/base-de-maquillaje-mate-con-fit-me/maybelline-espana-jourdan-dunn-maquillaje-mate-1440x1440.jpg?rev=1dd589abdc94464dab965c2124fe0a64"
//             alt="Imagen 2"
//           />
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/smokey-eye-de-color/maybelline-smokey-eye-de-color-1440x1440.jpg?rev=1293a5b1420b402e96d648154b6d8441&sc_lang=en"
//             alt="Imagen 2"
//           />
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/los-5-tips-para-maquillar-pieles-morenas/05-maybelline-maquillaje-pieles-morenas-marrones.jpg?rev=a50b2175188349d69f098c6ec05b6124"
//             alt="Imagen 2"
//           />
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/como-delinear-la-linea-de-agua-del-ojo-paso-a-paso/maybelline-espana-como-delinear-la-linea-de-agua-del-ojo-paso-a-paso1.jpg?rev=dd005c991f484ecfae3bb034f5d18e722"
//             alt="Imagen 2"
//           />{" "}
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/face-makeup-tutorials/pouty-lips/07-maybelline-pouty-lips-lifter-gloss.jpg?rev=bff97baee5fd40ef8f98119cc440444f"
//             alt="Imagen 2"
//           />
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//           <img
//             src="https://www.maybelline.es/-/media/project/loreal/brand-sites/mny/emea/iberic/tips-and-trends/trucos-cejas-rebeldes/1.jpg?rev=cbb1bfe95f8b4bc9a31d0726c4655d0d"
//             alt="Imagen 2"
//           />{" "}
//           <div className={styles.card_info}>
//             <p className={styles.card_info_text}>
//               Realza la belleza de tu piel Morena
//             </p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Tutorials;
