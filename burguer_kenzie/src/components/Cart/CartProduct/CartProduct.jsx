import teste from "../../../ham.png";
import { RemoveButton } from "../../Button/Button.style";
import styles from "./CartProduct.module.scss";

const CartProduct = () => {
  return (
    <li className={styles["cart_product_card"]}>
      <figure>
        <img src={teste} alt="" />
      </figure>
      <div>
        <h2>Hamburguer</h2>
        <p>Sanduíche</p>
      </div>
      <RemoveButton>Remover</RemoveButton>
    </li>
  );
};

export default CartProduct;
