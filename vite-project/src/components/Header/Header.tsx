import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ cursor: "pointer" }} />
      </Link>
    </header>
  );
};

export default Header;