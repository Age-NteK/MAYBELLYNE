import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import TopNav from "./Components/TopNav/TopNav";
import Contacto from "./Components/Contacto/Contacto";
import Detail from "./Components/Detail/Detail";
import Sail from "./Components/Sail/Sail";
import Favorites from "./Components/Favorites/Favorites";
import styles from "./app.module.css";
import Tutorials from "./Components/Tutorials/Tutorials";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Help from "./Components/Help/Help";
import Products from "./Components/Products/Products";
import Orders from "./Components/Orders/Orders";
import Compras from "./Components/Compras/Compras";
import Shipments from "./Components/Shipments/shipments";
import Payment from "./Components/Payment/Payment";
import StatusOrder from "./Components/StatusOrder/StatusOrder";
import ApiRest from "./Components/ApiRest/ApiRest";
import TermsConditions from "./Components/Terms&Conditions/Terms&Conditions";
import Privacy from "./Components/Privacy/Privacy";
import DetailTutorial from "./Components/Tutorials/Detail/Detail";

function App() {
  const location = useLocation();
  return (
    <div className={styles.app}>
      {location.pathname !== "/login" && <TopNav />}
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/:id_tutorial" element={<DetailTutorial />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sail" element={<Sail />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id_product" element={<Detail />} />
        <Route path="/help" element={<Help />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/status" element={<StatusOrder />} />
        <Route path="/api" element={<ApiRest />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/help" && (
        <Contacto />
      )}
    </div>
  );
}

export default App;
