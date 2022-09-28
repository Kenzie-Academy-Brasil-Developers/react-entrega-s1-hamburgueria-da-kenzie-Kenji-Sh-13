import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import GlobalStyle from "./styles/global";

import styles from "./styles/App.module.scss";
import "react-toastify/dist/ReactToastify.css";

const url = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

const App = () => {
  const { data: productList } = useFetch(url);
  const [filteredProductList, setFilteredProductList] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    productList
      ? setFilteredProductList(
          productList.filter((product) =>
            product["name"].toLowerCase().includes(filter.toLowerCase())
          )
        )
      : "";
  }, [filter]);

  const handleClick = (productId) => {
    cartList.find((product) => product["id"] == productId)
      ? toast.error("Este produto já está no carrinho.")
      : (setCartList([
          ...cartList,
          ...productList.filter((product) => product["id"] == productId),
        ]),
        toast.success("Produto adicionado com sucesso!"));
  };

  return (
    <div className={styles["App"]}>
      <GlobalStyle />
      <Header setFilter={setFilter} />
      <div>
        <ProductList
          productList={filteredProductList ? filteredProductList : productList}
          handleClick={handleClick}
        />
        <Cart cartList={cartList} setCartList={setCartList} toast={toast} />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App;
