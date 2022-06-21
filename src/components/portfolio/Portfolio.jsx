import "./portfolio.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { portfolio } from "./portfolioList";

const Portfolio = () => {
  const navigate = useNavigate()
  const [imagesList, setImagesList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    var listImages = [];
    portfolio.map((item) => {
      item.images.map((image) => {
        listImages.push({ title: item.title, img: image.path, id: item.id });
      });
    });
    setImagesList(listImages);
  }, []);

  const handleNavigate = (id) => {
    console.log(id)
    navigate(`/projetos/${id}`)
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="pre">
          <div className="right"></div>
        </div>
        <div className="title">PORTFÓLIO</div>
        <div className="images-box">
          <ImageList variant="masonry" cols={width >= 600 ? 3 : 2} gap={0}>
            {imagesList &&
              imagesList
                .sort(()=> Math.random() - .1)
                .reverse()
                .map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${require(`../../public/img/${item.img}`)}?w=248&fit=crop&auto=format`}
                      srcSet={`${require(`../../public/img/${item.img}`)}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      // loading="lazy"
                    />
                   <div className="img-overlay" onClick={e => handleNavigate(item.id)}>
                        <div className="img-title">{item.title}</div>
                        <div className="img-description">Ver mais</div>
                      </div>
                  </ImageListItem>
                ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
