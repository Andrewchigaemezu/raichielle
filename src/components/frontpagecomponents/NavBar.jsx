import style from "./NavBar.module.css";
import Header3 from "../../utilities/Header3";
import Paragraph from "../../utilities/Paragraph";
import user_icon from "../../assets/icons/user_icon.svg";
import menu_icon from "../../assets/icons/menu_icon.svg";
import cart_icon from "../../assets/icons/cart_icon.svg";
import search_icon from "../../assets/icons/search_icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  function navToCart() {
    navigate("/cart");
  }
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_cont}>
        <Paragraph>+Contact Us</Paragraph>
        <Link to={"/"}>
          <Header3>Raichielle </Header3>
        </Link>{" "}
        <div className={style.navbar_icons}>
          <img src={user_icon} alt="user icon" />
          <img
            src={cart_icon}
            alt="cart icon"
            className={style.cart_icon}
            onClick={navToCart}
          />
          <img src={search_icon} alt="search icon" />
          <img src={menu_icon} alt="menu icon" />
          <div className={style.cart_item_total} onClick={navToCart}>
            <p>{cart.length}</p>
          </div>
        </div>
        <img src={menu_icon} alt="menu icon" className={style.mobile_menu} />
      </div>
    </nav>
  );
}

export default NavBar;
