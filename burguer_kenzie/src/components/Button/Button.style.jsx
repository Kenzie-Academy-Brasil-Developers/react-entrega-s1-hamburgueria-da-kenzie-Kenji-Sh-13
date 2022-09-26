import styled from "styled-components";
import styles from "../../styles/_export.module.scss";

export const StyledButton = styled.button`
  height: 40px;
  padding: 0 20px;
  border: solid 2px ${styles.colorPrimary};
  border-radius: 8px;
  color: #ffffff;
  background-color: ${styles.colorPrimary};
`;

export const SearchButton = styled(StyledButton)`
  position: absolute;
  top: 10px;
  right: 15px;
`;
