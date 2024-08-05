import logo from "../../../img/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="header__text">
          <span className="header__text--main">Lorem ipsum?</span>
          <span className="header__text--sub">
            Expedita vero aut dolorem non d
          </span>
        </h1>
        <a href="#" className="btn btn--secondary">
          Klub
        </a>
        <a href="#" className="btn btn--primary">
          Stwo
        </a>
      </div>
    </header>
  );
};

export default Header;
