import { Link } from "react-router-dom";
import styles from "./api.module.css";

const ApiRest = () => {
  return (
    <div className={styles.container_api}>
      <h1>Maybellyne Api Rest</h1>
      <h3>
        Maybellyne Api Rest es una página de línea gratuita que puede utilizar
        siempre que necesite
      </h3>
      <div className={styles.api_section}>
        <h2>Recursos</h2>
        <div className={styles.api_info}>
          <Link to="/">/products</Link>
          <p>12 Productos</p>
        </div>
        <div className={styles.api_info}>
          <Link to="/">/section</Link>
          <p>4 Secciones</p>
        </div>{" "}
        <div className={styles.api_info}>
          <Link to="/">/category</Link>
          <p>16 Categorias</p>
        </div>{" "}
        <div className={styles.api_info}>
          <Link to="/">/videos</Link>
          <p>4 Videos</p>
        </div>{" "}
        <div className={styles.api_info}>
          <Link to="/">/tutorials</Link>
          <p>8 Tutoriales</p>
        </div>{" "}
        <div className={styles.nota}>
          <h5>Nota</h5>
          <p>
            Los recursos tienen relaciones. Por ejemplo, un producto pertenece a
            una categoría, una categoría tiene muchos productos. Consulta la{" "}
            <Link to="/">Guía Completa</Link> para más información.
          </p>
        </div>
      </div>
      <div className={styles.api_section}>
        <h2>Rutas</h2>
        <p>Para las solicitudes deberá utilizar métodos http</p>
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/products</Link>
        </div>{" "}
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/products/1</Link>
        </div>{" "}
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/products?name=lipstick</Link>
        </div>{" "}
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/tutorials</Link>
        </div>
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/tutorials/3</Link>
        </div>
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/videos</Link>
        </div>
        <div className={styles.api_rutas}>
          <p>GET</p>
          <Link to="/">/videos/4</Link>
        </div>
        <div className={styles.nota}>
          <h5>Nota</h5>
          <p>
            Si desea obtener más información sobre especificaciones sobre los
            métodos de uso puede consultar la <Link to="/">Guía Completa</Link>{" "}
            aquí.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiRest;
