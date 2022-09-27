import styled from "styled-components";
import styles from "../../styles/_export.module.scss";

export const StyledButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 0 20px;
  border: solid 2px ${styles.colorPrimary};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${styles.colorPrimary};
`;

export const SearchButton = styled(StyledButton)`
  position: absolute;
  top: 10px;
  right: 15px;
  font-weight: 500;
`;

export const RemoveButton = styled.button`
  border: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: ${styles.gray50};
  background-color: transparent;
`;
