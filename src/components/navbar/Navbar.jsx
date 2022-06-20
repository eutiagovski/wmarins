import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.scss";
import { useState } from "react";
import * as React from "react";

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
            PORTFÓLIO
          </Link>
          <a href="/#contato">
            <div className="link">CONTATO</div>
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
                <a className="link" href="#home">
                  SOBRE
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a className="link" href="#portfolio">
                  PORTFÓLIO
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a className="link" href="#contato">
                  CONTATO
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
