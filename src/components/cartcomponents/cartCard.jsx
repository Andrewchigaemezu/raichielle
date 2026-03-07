import style from "./cartCard.module.css";
import Header3 from "../../utilities/Header3";
import Paragraph from "../../utilities/Paragraph";
import SmallText from "../../utilities/SmallText";
import Header4 from "../../utilities/Header4";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/index";
import { cartSubtotal, cartQuantTotal } from "../store/index";
import big_cart from "../../assets/icons/big_cart.svg";

function CartCard() {
  const cart = useSelector((state) => state.cart);
  const cartTotal = useSelector(cartSubtotal);
  const totalCartQuant = useSelector(cartQuantTotal);
  const dispatch = useDispatch();
  const productInCart = cart.length > 0 ? true : false;

  // console.log(cartTotal);
  return (
    <section className={style.cart_card}>
      <Header3>Shopping Cart</Header3>

      <main className={style.cart_cont}>
        <div className={style.cart_inner_cont}>
          <ul className={style.cart_items_cont}>
            <li>
              <Paragraph>Product</Paragraph>
              <Paragraph>Unit Price</Paragraph>
              <Paragraph>Quantity</Paragraph>
              <Paragraph>Sub Total</Paragraph>
            </li>
            {productInCart ? (
              cart.map((product) => (
                <li key={product.id}>
                  <div className={style.product_img_text_cont}>
                    <img src={`/img/shop_img/${product.img}`} />
                    <div>
                      <Paragraph>{product.title}</Paragraph>
                      <SmallText>{product.category}</SmallText>
                    </div>
                  </div>
                  <Header4>${product.price}</Header4>
                  <div className={style.quantity_select_cont}>
                    <button
                      onClick={() => {
                        dispatch(cartActions.decreaseQuant(product.id));
                      }}
                      className={style.quantity_size_btn}
                    >
                      <Header4>-</Header4>
                    </button>
                    <Header4>{product.quantity}</Header4>
                    <button
                      onClick={() => {
                        dispatch(cartActions.increaseQuant(product.id));
                      }}
                      className={style.quantity_size_btn}
                    >
                      <Header4>+</Header4>
                    </button>
                  </div>
                  <div className={style.subtotal_price_cont}>
                    <Header4>${product.quantity * product.price}</Header4>
                  </div>
                </li>
              ))
            ) : (
              <div className={style.empty_cart_message_cont}>
                <img src={big_cart} alt="empty cart" />
                <Header3>No Products in Cart</Header3>
                <Link to={"/shop/all"}>
                  <Paragraph>Keep Shopping</Paragraph>
                </Link>
              </div>
            )}
          </ul>
          {productInCart && (
            <figure className={style.product_cart_summary}>
              <ul className={style.summary_cont}>
                <li>
                  <Header4>Order Summary</Header4>
                </li>
                <li>
                  <Paragraph>Item</Paragraph>
                  <Paragraph>{totalCartQuant}</Paragraph>
                </li>
                <li>
                  <Paragraph>Sub Total</Paragraph>
                  <Paragraph>${cartTotal}</Paragraph>
                </li>
                <li>
                  <Paragraph>Shipping</Paragraph>
                  <Paragraph>$2.5</Paragraph>
                </li>
                <li>
                  <Paragraph>Total</Paragraph>
                  <Paragraph>${cartTotal + 2.5}</Paragraph>
                </li>
              </ul>
              <a href="#" className={style.cart_checkout_btn}>
                <Paragraph>Proceed to Checkout</Paragraph>
              </a>
            </figure>
          )}
        </div>
      </main>
    </section>
  );
}

export default CartCard;
