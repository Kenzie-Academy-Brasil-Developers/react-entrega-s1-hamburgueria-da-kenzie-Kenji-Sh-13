import Logo from "./Logo/Logo";
import InputSearch from "../Input/Input";

import styles from "./Header.module.scss";

const Header = ({ setFilter }) => {
  return (
    <header className={styles["nav_menu"]}>
      <Logo />
      <InputSearch setFilter={setFilter} />
    </header>
  );
};

export default Header;
