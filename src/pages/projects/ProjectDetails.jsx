import React from "react";
import "./projects.scss";
import { portfolio } from "../../portfolioList";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const pageId = window.location.href.split("/")[4];
  const details = portfolio.filter((portfolio) => portfolio.id == pageId)[0];
  const navigate = useNavigate();

  const handleForward = (e) => {
    e.preventDefault();
    navigate(`/projetos/${ parseInt(pageId) + 1}`)
  }
  const handleBackwards = (e) => {
    e.preventDefault();
    navigate(`/projetos/${ parseInt(pageId) - 1}`)
  }
  document.body.scrollTop = 0;

  return (
    <div className="projects" id='details'>
      <div className="projects-container">
        <div className="top"></div>
        <div className="bottom">
          <div className="left">
            <div className="project-title">{details.title}</div>
            <div className="project-description">{details.text} </div>
          </div>
          <div className="center">
            {details.images.sort(()=> Math.random() - .1).map((image, index) => (
              <img
                src={`${require(`../../public/img/${image.path}`)}`}
                alt=""
                className="project-img"
              />
            ))}
          </div>
          <div className="right">
            {pageId > 1 && <ArrowBackIosNewIcon onClick={handleBackwards}/> }
            {pageId < portfolio.length && <ArrowForwardIosIcon onClick={handleForward}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
