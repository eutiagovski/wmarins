import "./navbar.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left">
          <a href="/#home" className="link">
            <Link className="link" to="/"></Link>{" "}
            <img
              src={require(`../../../../assets/media/images/logo-0.png`)}
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
          <a href="/#home" className="link">
            <Link className="link" to="/"></Link>HOME
          </a>
          <a href="/#portfolio" className="link">
            <Link className="link" to="/"></Link>PORTFÓLIO
          </a>
          <a href="/#contato" className="link">
                  <Link className="link" to="/"></Link>CONTATO
                </a>
          <div
            className="link responsive"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            MENU
          </div>

          <div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/#home" className="link">
                  <Link className="link" to="/"></Link>HOME
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/#portfolio" className="link">
                  <Link className="link" to="/"></Link>PORTFOLIO
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/#contato" className="link">
                  <Link className="link" to="/"></Link>CONTATO
                </a>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
