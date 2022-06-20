import "./portfolio.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Portfolio = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const itemData = [
    {
      img: "casa-0.jpeg",
      title: "Residência Marins",
    },
    {
      img: "clinica-2.jpeg",
      title: "Clinica Camila Raeder",
    },
    {
      img: "cores-0.png",
      title: "Explorando Cores",
    },
    {
      img: "clinica-0.jpeg",
      title: "Clinica Camila Raeder",
    },

    {
      img: "escritorio-1.png",
      title: "Castilho Martins Advocacia",
    },
    {
      img: "casa-1.jpeg",
      title: "Residência Marins",
    },
    {
      img: "escritorio-3.png",
      title: "Castilho Martins Advocacia",
    },
    {
      img: "escritorio-0.png",
      title: "Castilho Martins Advocacia",
    },
    {
      img: "cores-2.png",
      title: "Explorando Cores",
    },
    {
      img: "clinica-3.jpeg",
      title: "Clinica Camila Raeder",
    },

    {
      img: "cores-1.png",
      title: "Explorando Cores",
    },
    {
      img: "escritorio-5.png",
      title: "Castilho Martins Advocacia",
    },
    {
      img: "clinica-1.jpeg",
      title: "Clinica Camila Raeder",
    },
    {
      img: "cores-3.png",
      title: "Explorando Cores",
    },

    {
      img: "casa-2.jpeg",
      title: "Residência Marins",
    },
    {
      img: "escritorio-6.png",
      title: "Castilho Martins Advocacia",
    },
    {
      img: "casa-3.jpeg",
      title: "Residência Marins",
    },
    {
      img: "casa-4.jpeg",
      title: "Residência Marins",
    },
  ];
  console.log(window.innerHeight);

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="pre">
          <div className="right"></div>
        </div>
        <div className="title">PORTFÓLIO</div>
        <div className="images-box">
          <ImageList
            variant="masonry"
            cols={width >= 600 ? 3 : 2}
            gap={0}
          >
            {itemData
              .sort()
              .sort()
              .reverse()
              .map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${require(`../../public/img/${item.img}`)}?w=248&fit=crop&auto=format`}
                    srcSet={`${require(`../../public/img/${item.img}`)}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Link to="">
                    <div className="img-overlay">
                      <div className="img-title">{item.title}</div>
                      <div className="img-description">Ver mais</div>
                    </div>
                  </Link>
                </ImageListItem>
              ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
