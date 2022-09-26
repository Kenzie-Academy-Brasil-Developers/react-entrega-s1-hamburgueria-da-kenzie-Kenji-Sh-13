import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <h1 className={style["logo"]}>
      Burguer <span>Kenzie</span>
    </h1>
  );
};

export default Logo;
