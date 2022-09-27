import { RemoveButton } from "../../Button/Button.style";
import styles from "./CartProduct.module.scss";

const CartProduct = ({ id, name, category, img, removeProduct }) => {
  return (
    <li id={id} className={styles["cart_product_card"]}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      <RemoveButton onClick={() => removeProduct(id)}>Remover</RemoveButton>
    </li>
  );
};

export default CartProduct;
