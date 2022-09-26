import styled from "styled-components";
import styles from "../../../styles/_export.module.scss";

export const ProductCard = styled.li`
  min-width: 300px;
  height: 346px;
  border: solid 2px ${styles.gray20};
  border-radius: 6px;
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45%;
    background-color: ${styles.gray0};
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
