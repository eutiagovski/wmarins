import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer" id='contato'>
      <div className="footer-container">
        <div className="left">
          <img
            src={require(`../../../../assets/media/images/logo-0.png`)}
            alt=""
            className="logo"
          />
          <span>
            <strong>ARQUITETURA E INTERIORES</strong>
          </span>
        </div>
        <div className="right">
          <div className="item-lg">
            <span>
              <strong>CONTATO</strong>
            </span>
            <span>Telefone: 21 96489-6308</span>
            <span>E-mail: w.marins@outlook.com</span>
            <span>
              Vargem Grande, Rio de Janeiro - RJ
            </span>
          </div>
          <div className="item">
            <span>
              <strong>CONHEÇA</strong>
            </span>
            <span>Portfólio</span>
            <span>Projetos</span>
            <span>Renderizações 3D</span>
          </div>
          <div className="item">
            <span>
              <strong>REDES SOCIAIS</strong>
            </span>
            <span>Instagram</span>
            <span>Youtube</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
