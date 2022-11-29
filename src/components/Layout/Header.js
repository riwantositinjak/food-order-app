import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Good</h1>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
