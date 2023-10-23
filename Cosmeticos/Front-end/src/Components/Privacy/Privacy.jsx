// import { Link } from "react-router-dom";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";
import styles from "../Terms&Conditions/terms.module.css";

const Privacy = () => {
  return (
    <div className={styles.container}>
      <h2>Política de Privacidad de Maybellyne Cosmetics</h2>

      <h3>Introducción</h3>
      <p>
        Maybellyne Cosmetics se compromete a proteger su privacidad. Esta
        Política de Privacidad explica cómo recopilamos, usamos y protegemos su
        información personal cuando utiliza nuestra aplicación. Al utilizar
        nuestra aplicación, usted acepta las prácticas descritas en esta
        política.
      </p>

      <h3>Información que Recopilamos</h3>

      <p>
        Cuando crea una cuenta, recopilamos su nombre, dirección de correo
        electrónico y contraseña.
      </p>
      <p>
        Al realizar una compra, podemos recopilar información de contacto y de
        pago, como su dirección de envío y detalles de tarjeta de crédito.
      </p>
      <p>
        Podemos recopilar información demográfica, como su edad y género, para
        ofrecerle productos y ofertas personalizados.
      </p>
      <p>
        Registramos datos sobre cómo utiliza nuestra aplicación, incluyendo las
        páginas que visita y las acciones que realiza.
      </p>
      <p>
        Utilizamos cookies y tecnologías similares para recopilar información
        sobre su navegación y preferencias.
      </p>

      <h3>Uso de la Información</h3>
      <ul>
        <p>Procesar y enviar sus pedidos.</p>
        <p>Personalizar su experiencia en la aplicación.</p>
        <p>Enviarle actualizaciones de productos y ofertas especiales.</p>
        <p>Mejorar nuestros servicios y la calidad de la aplicación.</p>
      </ul>

      <h3>Compartir Información</h3>
      <p>
        No compartimos su información personal con terceros, excepto en las
        siguientes situaciones:
      </p>
      <ul>
        <p>
          Con proveedores de servicios que nos ayudan a procesar pedidos y
          ofrecer servicios.
        </p>
        <p>Con su consentimiento expreso.</p>
        <p>
          Cuando sea requerido por la ley o para proteger nuestros derechos
          legales.
        </p>
      </ul>

      <h3>Seguridad de la Información</h3>
      <p>
        Tomamos medidas razonables para proteger su información personal de
        pérdida, acceso no autorizado y uso indebido. Utilizamos tecnologías de
        seguridad para cifrar los datos de pago y proteger su información.
      </p>

      <h3>Cambios en esta Política</h3>
      <p>
        Nos reservamos el derecho de modificar esta Política de Privacidad en
        cualquier momento. Las modificaciones entrarán en vigor inmediatamente
        después de su publicación en la aplicación. Le recomendamos que revise
        esta política regularmente para estar al tanto de cualquier cambio.
      </p>
      {/* 
      <h3>
        Si tiene preguntas o inquietudes sobre nuestra Política de Privacidad,
        puede ponerse en contacto con nosotros en el siguiente enlace:
      </h3>
      <BsFillArrowRightCircleFill className={styles.icon} />
      <Link to="/contact" className={styles.a}>
        CONTACTO
      </Link>
      <BsFillArrowLeftCircleFill className={styles.icon} /> */}
      <h6>Última actualización: 06/09/2023</h6>
    </div>
  );
};

export default Privacy;
