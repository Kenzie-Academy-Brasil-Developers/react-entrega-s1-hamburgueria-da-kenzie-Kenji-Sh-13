import { ProductCard } from "./Product.style";
import { StyledButton } from "../../Button/Button.style";
import teste from "../../../assets/202109090436_skn5yx754p 1.png";

const Product = () => {
  return (
    <ProductCard>
      <figure>
        <img src={teste} alt="product" />
      </figure>
      <div>
        <h2>Hamburguer</h2>
        <span>Sanduíches</span>
        <p>R$ 14,00</p>
        <StyledButton>Adicionar</StyledButton>
      </div>
    </ProductCard>
  );
};

export default Product;
