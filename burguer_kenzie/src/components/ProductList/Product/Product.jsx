import { ProductCard } from "./Product.style";
import { StyledButton } from "../../Button/Button.style";

const Product = ({ id, name, category, price, img, handleClick }) => {
  return (
    <ProductCard>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
        <p>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <StyledButton id={id} onClick={(e) => handleClick(e.target.id)}>
          Adicionar
        </StyledButton>
      </div>
    </ProductCard>
  );
};

export default Product;
