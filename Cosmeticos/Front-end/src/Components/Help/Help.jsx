import { Link } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import styles from "./help.module.css";

const Help = () => {
  return (
    <div className={styles.help}>
      <h1>PREGUNTAS FRECUENTES</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#exploreCollapse"
              aria-expanded="false"
              aria-controls="exploreCollapse"
            >
              DÓNDE PUEDO EXPLORAR LOS PRODUCTOS DISPONIBLES?
            </button>
          </h2>
          <div
            id="exploreCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                En este espacio, encontrarás una selección diversa de opciones
                para tu elección. Te invitamos a explorar nuestra amplia
                variedad de productos disponibles en la sección:{" "}
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/products">PRODUCTOS</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>{" "}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#applicationCollapse"
              aria-expanded="false"
              aria-controls="applicationCollapse"
            >
              ¿CÓMO PUEDO REALIZO UNA COMPRA?
            </button>
          </h2>
          <div
            id="applicationCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Realizar compras en nuestra app es fácil! sólo agrega los
                productos que desees a tu carrito y completa los pasos de
                compra.
              </p>
              <p>Si deseas explorar productos puedes dirigirte aquí:</p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/shipments">PRODUCTOS</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
              <p>Si deseas ver tu Orden de compra puedes dirigirte aquí:</p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/shipments">MI CARRITO</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#descriptionCollapse"
              aria-expanded="false"
              aria-controls="descriptionCollapse"
            >
              ¿CUÁLES SON LOS MÉTODOS DE PAGO ACEPTADOS?
            </button>
          </h2>
          <div
            id="descriptionCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Aceptamos variedad de métodos de pago, incluyendo tarjetas de
                crédito, débito, Mercado Pago. Puedes obtener más información en
                la sección de:
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/payment"> MÉTODOS DE PAGO </Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#productsCollapse"
              aria-expanded="false"
              aria-controls="productsCollapse"
            >
              ¿QUÉ OPCIONES DE ENVÍO ME OFRECEN PARA MIS PRODUCTOS?
            </button>
          </h2>
          <div
            id="productsCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Ofrecemos diferentes métodos de envío, desde envíos estadar
                hasta envíos premium. Puedes obtener más información en la
                sección de:
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/shipments">ENVÍOS</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#benefitsCollapse"
              aria-expanded="false"
              aria-controls="benefitsCollapse"
            >
              ¿CÓMO PUEDO VERIFICAR EL ESTADO DE MI ORDEN?
            </button>
          </h2>
          <div
            id="benefitsCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Para más detalles acerca del estado de tu orden puedes dirigirte
                a la siguiente sección:{" "}
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/status">STATUS DE MI ORDEN</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pedidosCollapse"
              aria-expanded="false"
              aria-controls="pedidosCollapse"
            >
              ¿DÓNDE PUEDO VER UN RESUMEN DE MIS PEDIDOS ANTERIORES?
            </button>
          </h2>
          <div
            id="pedidosCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                En esta sección, encontrarás un registro completo de tus pedidos
                anteriores. Puedes acceder a un resumen de todos tus pedidos
                realizados en la aplicación en la sección:
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/orders">MIS PEDIDOS</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>{" "}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#tutorialCollapse"
              aria-expanded="false"
              aria-controls="tutorialCollapse"
            >
              ¿TIENEN TUTORIALES DISPONIBLES PARA APRENDER A USAR LOS PRODUCTOS
              MAYBELLYNE?
            </button>
          </h2>
          <div
            id="tutorialCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Nuestros tutoriales te ayudarán a deslumbrar y resaltar tu
                belleza única, te ofrecemos valiosos conocimientos en nuestra
                exclusiva sección{" "}
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/tutorials">TUTORIALES</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>{" "}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#favoritosCollapse"
              aria-expanded="false"
              aria-controls="favoritosCollapse"
            >
              ¿CÓMO PUEDO AGREGAR PRODUCTOS A MIS FAVORITOS?
            </button>
          </h2>
          <div
            id="favoritosCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Para agregar productos a tus favoritos, simplemente selecciona
                el botón de "❤️" en el producto que te interese. Luego, podrás
                visualizar todos tus productos seleccionaods aquí{" "}
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/favorites">FAVORITOS</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>{" "}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#devolucionCollapse"
              aria-expanded="false"
              aria-controls="devolucionCollapse"
            >
              ¿CUÁL ES SU POLÍTICA DE DEVOLUCIONES Y REEMBOLSOS?
            </button>
          </h2>
          <div
            id="devolucionCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Te invitamos a consultar nuestra política de devoluciones y
                reembolsos en la sección correspondiente, donde encontrarás
                todos los detalles que necesitas.{" "}
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/terms">TÉRMINOS Y CONDICIONES</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>{" "}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#envioCollapse"
              aria-expanded="false"
              aria-controls="envioCollapse"
            >
              CONSULTAS ADICIONALES
            </button>
          </h2>
          <div
            id="envioCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Estamos encantados de recibir tu consulta y poder ayudarte! Si
                tenés alguna duda adicional Ofrecemos varias opciones de envío,
                desde envío estándar hasta opciones más rápidas. Puedes obtener
                más información en la sección de
              </p>
              <BsFillArrowRightCircleFill className={styles.help_icon} />
              <Link to="/contact">CONTACTO</Link>
              <BsFillArrowLeftCircleFill className={styles.help_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
