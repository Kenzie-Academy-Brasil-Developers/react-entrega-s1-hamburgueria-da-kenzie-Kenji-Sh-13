import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
