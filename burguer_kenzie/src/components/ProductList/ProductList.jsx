import { useEffect } from "react";
import Product from "./Product/Product";
import CircleLoader from "../CircleLoader/CircleLoader";

import styles from "./ProductList.module.scss";

const ProductList = ({ productList, handleClick }) => {
  return (
    <ul className={styles["products_list"]}>
      {productList ? (
        productList.map(({ id, name, category, price, img }) => (
          <Product
            key={id}
            id={id}
            name={name}
            category={category}
            price={price}
            img={img}
            handleClick={handleClick}
          />
        ))
      ) : (
        <CircleLoader />
      )}
    </ul>
  );
};

export default ProductList;
