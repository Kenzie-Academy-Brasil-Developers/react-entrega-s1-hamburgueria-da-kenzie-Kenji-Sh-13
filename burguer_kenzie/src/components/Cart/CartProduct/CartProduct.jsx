import teste from "../../../ham.png";
import { RemoveButton } from "../../Button/Button.style";
import styles from "./CartProduct.module.scss";

const CartProduct = ({id, name, category, img}) => {
  return (
    <li id={id} className={styles["cart_product_card"]}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      <RemoveButton>Remover</RemoveButton>
    </li>
  );
};

export default CartProduct;
