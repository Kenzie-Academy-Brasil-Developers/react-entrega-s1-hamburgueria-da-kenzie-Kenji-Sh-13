import styled from "styled-components";
import styles from "../../styles/_export.module.scss";

export const StyledInput = styled.input.attrs({
  placeholder: "Pesquisar",
})`
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  border: solid 2px ${styles.gray20};
  border-radius: 8px;
`;
