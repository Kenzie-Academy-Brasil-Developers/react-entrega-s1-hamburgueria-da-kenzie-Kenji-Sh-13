import Product from "./Product/Product";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  return (
    <ul className={styles["products_list"]}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ul>
  );
};

export default ProductList;
