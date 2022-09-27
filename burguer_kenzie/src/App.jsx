import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import GlobalStyle from "./styles/global";

import styles from "./styles/App.module.scss";

const url = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

const App = () => {
  const { data: productList } = useFetch(url);
  const [cartList, setCartList] = useState([1]);

  return (
    <div className={styles["teste"]}>
      <GlobalStyle />
      <Header />
      <div>
        <ProductList productList={productList} setCartList={setCartList} />
        <Cart cartList={cartList} setCartList={setCartList} />
      </div>
    </div>
  );
};

export default App;
