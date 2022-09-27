import { useState } from "react";
import { StyledInput } from "./Input.style";
import { SearchButton } from "../Button/Button.style";

import styles from "./Input.module.scss";

const InputSearch = ({ setFilter }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <label className={styles["input_search"]}>
      <StyledInput onChange={(e) => setInputValue(e.target.value)} />
      <SearchButton onClick={() => setFilter(inputValue)}>
        Pesquisar
      </SearchButton>
    </label>
  );
};

export default InputSearch;
