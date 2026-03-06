import style from "./ProductCard.module.css";
import jacket from "../../assets/img/jacketdetail.png";
import pdetail_big_img from "../../assets/img/pdetail_big_img.png";
import Paragraph from "../../utilities/Paragraph";
import Header4 from "../../utilities/Header4";
import Header3 from "../../utilities/Header3";
import Header2 from "../../utilities/Header2";
import right_arrow from "../../assets/icons/right_arrow.svg";
import left_arrow from "../../assets/icons/left_arrow.svg";
import SmallText from "../../utilities/SmallText";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store";
import { useNavigate } from "react-router-dom";
// import image from "../../../public/img/shop_img/black_short.png";

function ProductCard({ props }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const imgSource = `/img/shop_img/${props.img}`;
  const productInCart = cart.some((prod) => prod.id === props.id);
  function addToCartHandler() {
    const prodWithQuantity = { ...props, quantity: 1 };
    dispatch(cartActions.addToCart(prodWithQuantity));
  }
  function goToCartHandler() {
    navigate("/cart");
  }
  return (
    <>
      <section className={style.productcard}>
        <div className={style.productcard_cont}>
          <div className={style.productcard_img_cont}>
            <img
              src={imgSource}
              alt="product image"
              className={style.productcard_img_large}
            />
            <div>
              <img
                src={imgSource}
                alt="product image"
                className={style.productcard_img_small}
              />
              <img
                src={imgSource}
                alt="product image"
                className={style.productcard_img_small}
              />
              <img
                src={imgSource}
                alt="product image"
                className={style.productcard_img_small}
              />
              <img
                src={imgSource}
                alt="product image"
                className={style.productcard_img_small}
              />
            </div>
          </div>

          <div className={style.productcard_details}>
            <Header4>{props.title}</Header4>
            <Paragraph>
              Wrap yourself in comfort with our premium hoodie sweater, designed
              for everyday wear. Made from soft, breathable fabric, it offers
              the perfect balance of warmth and style. Featuring a classic hood,
              front pocket, and relaxed fit, this hoodie is ideal for layering
              or wearing on its own. Whether you're lounging, heading out, or
              staying active, it's the versatile piece your wardrobe needs.
            </Paragraph>

            <form className={style.productcard_form}>
              <Paragraph>Select Color:</Paragraph>
              <div className={style.productcard_form_first_cont}>
                <div>
                  <input
                    type="radio"
                    id="blue"
                    name="color_picker"
                    value="blue"
                  />
                  <label htmlFor="blue">
                    <SmallText>Blue</SmallText>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="red"
                    name="color_picker"
                    value="red"
                  />
                  <label htmlFor="red">
                    <SmallText>Red</SmallText>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="yellow"
                    name="color_picker"
                    value="yellow"
                  />
                  <label htmlFor="yellow">
                    <SmallText>Yellow</SmallText>
                  </label>
                </div>
              </div>
              <Paragraph>Select Size:</Paragraph>
              <div className={style.productcard_form_second_cont}>
                <div>
                  <input
                    type="radio"
                    id="small"
                    name="size_picker"
                    value="small"
                  />
                  <label htmlFor="small">
                    <SmallText>S</SmallText>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="large"
                    name="size_picker"
                    value="large"
                  />
                  <label htmlFor="large">
                    <SmallText>L</SmallText>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="extra large"
                    name="size_picker"
                    value="extra large"
                  />
                  <label htmlFor="extra large">
                    <SmallText>XL</SmallText>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="extra extra large"
                    name="size_picker"
                    value="extra extra large"
                  />
                  <label htmlFor="extra extra large">
                    <SmallText>XXL</SmallText>
                  </label>
                </div>
              </div>

              <Header4>${props.price}</Header4>
            </form>
            <div className={style.productcard_btn_cont}>
              {productInCart ? (
                <button className={style.cart_btn} onClick={goToCartHandler}>
                  <SmallText>Go To Cart</SmallText>
                </button>
              ) : (
                <button className={style.cart_btn} onClick={addToCartHandler}>
                  <SmallText>Add To Cart</SmallText>
                </button>
              )}

              <a href="#" className={style.btn_checkout}>
                <Paragraph>Checkout</Paragraph>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductCard;
