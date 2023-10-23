import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.image}>
      <div className={styles.container}>
        <h2>DESCUBRE TU BELLEZA CON MAYBELLYNE</h2>

        <h3>NUESTRA MISIÓN: EMPODERAR TU BELLEZA</h3>
        <p>
          EN MAYBELLYNE, NUESTRA MISIÓN ES SIMPLE PERO PODEROSA: QUEREMOS QUE TE
          SIENTAS SEGURA, HERMOSA Y EN CONTROL DE TU PROPIA APARIENCIA. CREEMOS
          QUE LA BELLEZA ES DIVERSA Y ÚNICA PARA CADA INDIVIDUO, Y ESTAMOS AQUÍ
          PARA AYUDARTE A ABRAZAR TU SINGULARIDAD Y EXPRESARTE COMO DESEES.
        </p>

        <h3>PRODUCTOS DE LA CALIDAD QUE AMAS</h3>
        <p>
          NOS ENORGULLECE OFRECER UNA AMPLIA GAMA DE PRODUCTOS DE BELLEZA Y
          COSMÉTICOS DE ALTA CALIDAD. DESDE NUESTRAS ICÓNICAS MÁSCARAS DE
          PESTAÑAS HASTA LOS LABIALES DE MODA MÁS RECIENTES, CADA PRODUCTO HA
          SIDO DISEÑADO PENSANDO EN TU SATISFACCIÓN Y COMODIDAD. TRABAJAMOS
          CONSTANTEMENTE EN LA INNOVACIÓN Y LA CALIDAD PARA QUE PUEDAS
          EXPERIMENTAR LA EXCELENCIA EN CADA USO.
        </p>

        <h3>NUESTRO COMPROMISO HACIA UN FUTURO BRILLANTE</h3>
        <p>
          EN MAYBELLYNE COSMÉTICOS, MIRAMOS HACIA EL FUTURO CON ENTUSIASMO Y
          DETERMINACIÓN. ESTAMOS EMOCIONADOS POR LAS INNOVACIONES QUE TENEMOS
          RESERVADAS PARA TI. NUESTRO COMPROMISO ES PROPORCIONARTE NO SOLO
          PRODUCTOS DE BELLEZA EXCEPCIONALES, SINO TAMBIÉN SERVICIOS DE
          EXCELENCIA PARA MEJORAR TU EXPERIENCIA AL MÁXIMO.
        </p>

        <h3>COMPROMISO CON LA PRIVACIDAD Y LA SEGURIDAD</h3>
        <p>
          TU PRIVACIDAD ES IMPORTANTE PARA NOSOTROS. ESTAMOS COMPROMETIDOS A
          PROTEGER TUS DATOS PERSONALES Y A PROPORCIONARTE UNA EXPERIENCIA
          SEGURA EN NUESTRA APLICACIÓN. PUEDES CONOCER MÁS SOBRE CÓMO
          GESTIONAMOS TU INFORMACIÓN EN NUESTRA{" "}
          <Link to="/privacy" className={styles.a}>
            POLÍTICA DE PRIVACIDAD
          </Link>
          .
        </p>

        <h3>CONTÁCTANOS</h3>
        <p>
          TU OPINIÓN ES VALIOSA PARA NOSOTROS. SI TIENES ALGUNA PREGUNTA,
          SUGERENCIA O SIMPLEMENTE DESEAS COMPARTIR TU EXPERIENCIA CON NOSOTROS,
          NO DUDES EN{" "}
          <Link to="/contact" className={styles.a}>
            CONTÁCTARNOS
          </Link>
          . TU FEEDBACK NOS AYUDA A MEJORAR PARA SERVIRTE MEJOR.
        </p>
      </div>
    </div>
  );
};

export default About;