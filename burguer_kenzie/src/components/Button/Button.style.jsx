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
  transition: 0.3s;
  &:hover {
    border-color: ${styles.colorPrimary50};
    background-color: ${styles.colorPrimary50};
  }
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
  transition: 0.3s;
`;

export const RemoveAllButton = styled(RemoveButton)`
  height: 60px;
  border: solid 2px ${styles.gray20};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  background-color: ${styles.gray20};
  &:hover {
    border-color: ${styles.gray50};
    color: ${styles.gray20};
    background-color: ${styles.gray50};
  }
`;