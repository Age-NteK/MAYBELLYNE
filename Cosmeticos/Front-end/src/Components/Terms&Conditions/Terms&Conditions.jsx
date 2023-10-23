import { Link } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import styles from "./terms.module.css";

const TermsConditions = () => {
  return (
    <div className={styles.container}>
      <h2>Términos y Condiciones de Uso Maybellyne Cosméticos</h2>

      <h3>1. Aceptación de los Términos y Condiciones</h3>
      <p>
        1.1 Al acceder y utilizar la aplicación de venta de Maybellyne
        Cosmetics, usted acepta los siguientes términos y condiciones de uso.
      </p>

      <h3>2. Registro de la Cuenta</h3>
      <p>
        2.1. Para utilizar ciertas funciones de la Aplicación, puede ser
        necesario crear una cuenta de usuario. Usted es responsable de mantener
        la confidencialidad de su información de inicio de sesión y de todas las
        actividades que ocurran en su cuenta.
      </p>

      <h3>3. Elección de Productos y Compra</h3>
      <p>
        3.1. La Aplicación ofrece productos de belleza y cosméticos de la marca
        Maybellyne. Usted es libre de elegir entre estas opciones según sus
        preferencias.
      </p>
      <p>
        3.2. Al realizar una compra a través de la aplicación, acepta pagar los
        precios y cargos aplicables según lo especificado en el proceso de
        compra.
      </p>

      <h3>4. Carrito de Compras</h3>
      <p>
        4.1. Los productos agregados a su carrito de compras se guardarán
        durante un período de un día, después del cual se eliminarán
        automáticamente. Usted es responsable de completar la compra dentro de
        este período.
      </p>

      <h3>5. Privacidad</h3>
      <p>
        5.1. La recopilación y el uso de su información personal están sujetos a
        nuestra Política de Privacidad, que puede consultar en el siguiente
        enlace:
      </p>
      <BsFillArrowRightCircleFill className={styles.icon} />
      <Link to="/privacy" className={styles.a}>
        POLÍTICA DE PRIVACIDAD
      </Link>
      <BsFillArrowLeftCircleFill className={styles.icon} />

      <h3>6. Modificaciones y Actualizaciones</h3>
      <p>
        6.1. Nos reservamos el derecho de modificar o actualizar estos términos
        y condiciones en cualquier momento. Las modificaciones entrarán en vigor
        inmediatamente después de su publicación en la aplicación. Le
        recomendamos que revise regularmente los términos y condiciones para
        estar al tanto de cualquier cambio.
      </p>

      {/* <h3>8. Contacto</h3>
      <p>
        8.1. Para cualquier pregunta o inquietud relacionada con estos términos
        y condiciones, por favor contáctenos en el siguiente enlace:
      </p>
      <BsFillArrowRightCircleFill className={styles.icon} />
      <Link to="/contact" className={styles.a}>
        CONTACTO
      </Link>
      <BsFillArrowLeftCircleFill className={styles.icon} /> */}
      <h6>Última actualización: 06/09/2023</h6>
    </div>
  );
};

export default TermsConditions;
