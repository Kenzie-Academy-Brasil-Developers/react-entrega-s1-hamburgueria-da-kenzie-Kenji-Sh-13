import Logo from "./Logo/Logo";
import InputSearch from "../Input/Input";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["nav_menu"]}>
      <Logo />
      <InputSearch />
    </header>
  );
};

export default Header;
