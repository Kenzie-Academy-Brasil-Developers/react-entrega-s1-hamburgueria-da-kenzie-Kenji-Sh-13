import styled from "styled-components";
import styles from "../../../styles/_export.module.scss";

export const ProductCard = styled.li`
  min-width: 269px;
  height: 346px;
  border: solid 2px ${styles.gray20};
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    border-color: ${styles.gray100};
  }

  @media (max-width: 1327px) {
    width: 48%;
  }

  @media (max-width: 954px) {
    width: 100%;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45%;
    background-color: ${styles.gray0};
  }

  img {
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 55%;
    padding: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${styles.gray100};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${styles.gray50};
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: ${styles.colorPrimary};
  }
`;
