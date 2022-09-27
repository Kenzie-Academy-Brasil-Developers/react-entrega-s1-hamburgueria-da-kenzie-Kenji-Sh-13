import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import CartTotal from "./CartTotal/CartTotal";

const Cart = ({ cartList, setCartList }) => {
  const removeProduct = (productId) => {
    setCartList((prevCartList) => {
      return prevCartList.filter((product) => productId !== product["id"]);
    });
    console.log(cartList);
  };

  const removeAllProducts = () => {
    setCartList([]);
  };

  return (
    <div className={styles["cart"]}>
      <h3>Carrinho de compras</h3>
      {cartList.length ? (
        <>
          <ul>
            {cartList.map(({ id, name, category, img }) => (
              <CartProduct
                key={id}
                id={id}
                name={name}
                category={category}
                img={img}
                removeProduct={removeProduct}
              />
            ))}
          </ul>
          <CartTotal
            cartList={cartList}
            removeAllProducts={removeAllProducts}
          />
        </>
      ) : (
        <div className={styles["nothing"]}>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
