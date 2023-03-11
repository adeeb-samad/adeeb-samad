import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div style={{display: "flex"}}>
        <img className="logo" src={logo} alt="logo" />
        <div className="brand">
          <p>Pixel</p>
          <p>Perfect</p>
        </div>
      </div>
      
      <NavLinks />
    </header>
  );
};

export default Header;
