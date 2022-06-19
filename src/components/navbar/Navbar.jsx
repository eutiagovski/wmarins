import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left">
          <a href="/#home">
            <img
              src={require(`../../public/img/logo-0.png`)}
              alt=""
              className="logo"
            />
          </a>
        </div>
        <div className="center">
          <span>Wallace Marins</span>
          <span>ARQUITETURA E INTERIORES</span>
        </div>
        <div className="right">
          <Link className="link" to="/#">
            HOME
          </Link>
          <Link className="link" to="/sobre">
            SOBRE
          </Link>
          <Link className="link" to="/projetos">
            PROJETOS
          </Link>
          <a href="/#contato">
            <div className="link">CONTATO</div>
          </a>
          <div className="link responsive">MENU</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
