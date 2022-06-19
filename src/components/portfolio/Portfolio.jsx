import "./portfolio.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Portfolio = () => {
  const itemData = [
    {
      img: "casa-0.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "casa-1.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "clinica-2.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "cores-0.png",
      title: "Minha Casa 0",
    },
    {
      img: "clinica-3.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "clinica-0.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "cores-2.png",
      title: "Minha Casa 0",
    },

    {
      img: "escritorio-1.png",
      title: "Minha Casa 0",
    },
    {
      img: "escritorio-3.png",
      title: "Minha Casa 0",
    },
   
    {
      img: "escritorio-0.png",
      title: "Minha Casa 0",
    },
    {
      img: "clinica-1.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "escritorio-4.png",
      title: "Minha Casa 0",
    },
    {
      img: "cores-1.png",
      title: "Minha Casa 0",
    },
    {
      img: "escritorio-5.png",
      title: "Minha Casa 0",
    },
    {
      img: "escritorio-6.png",
      title: "Minha Casa 0",
    },

    {
      img: "cores-3.png",
      title: "Minha Casa 0",
    },
    {
      img: "casa-2.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "casa-3.jpeg",
      title: "Minha Casa 0",
    },
    {
      img: "casa-4.jpeg",
      title: "Minha Casa 0",
    },

  ];

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="pre">
          <div className="right"></div>
        </div>
        <div className="title">PORTFÓLIO</div>
        <div className="images-box">
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.sort().sort().reverse().map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${require(`../../public/img/${item.img}`)}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
