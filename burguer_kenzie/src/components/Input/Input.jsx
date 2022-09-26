import { StyledInput } from "./Input.style";
import { SearchButton } from "../Button/Button.style";
import styles from "./Input.module.scss";

const InputSearch = () => {
  return (
    <label className={styles["input_search"]}>
      <StyledInput />
      <SearchButton>Pesquisar</SearchButton>
    </label>
  );
};

export default InputSearch;
