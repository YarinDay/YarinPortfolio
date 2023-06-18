import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Harmony from "../../Assets/Projects/Harmony.jpg";
import AsherYosefiWoods from "../../Assets/Projects/AsherYosefiWoods.png";
import DorErlichson from "../../Assets/Projects/DorErlichson.png";
import Minesweeper from "../../Assets/Projects/Minesweeper.jpg";
import Pacman from "../../Assets/Projects/Pacman.jpg";
import MemeGenerator from "../../Assets/Projects/MemeGenerator.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Harmony}
              isBlog={false}
              title="Harmony"
              description="A Great Way To Get Your Release To The Right Listeners & Activate Your Fanbase On Harmony! You can listen to song just like in spotify and even make your own playlists!."
              ghLink="https://github.com/YarinDay/spotify-backend"
              demoLink="https://harmony-32ow.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DorErlichson}
              isBlog={false}
              title="Dor Erlichson"
              description="Welcome to Dor Erlichson Personal Trainer! We invite you to witness the remarkable outcomes we've achieved. As a dedicated personal trainer, I am enthusiastic about guiding you towards success and sculpting your body to reach new heights."
              ghLink="https://github.com/YarinDay/DorErlichson"
              demoLink="https://www.dorerlichson.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AsherYosefiWoods}
              isBlog={false}
              title="Asher Yosefi Woods"
              description="Welcome to Asher Yosefi Woods! We invite you to explore our carpentry offerings and discover the exceptional craftsmanship that our many years of work and experience have produced."
              ghLink="https://github.com/YarinDay/Asher-wood"
              demoLink="https://www.asher-yosefi-woods.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Minesweeper}
              isBlog={false}
              title="Minesweeper"
              description="Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed `mines` in the shortest possible time by clicking on `safe` squares while avoiding the squares with mines. If the player clicks on a mine, the game ends."
              ghLink="https://github.com/YarinDay/My-Minesweeper-game"
              demoLink="https://yarinday.github.io/My-Minesweeper-game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pacman}
              isBlog={false}
              title="Pacman"
              description="Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding three colored ghosts, with a random color every step the make — that pursue Pac-Man."
              ghLink="https://github.com/YarinDay/Pacman"
              demoLink="https://yarinday.github.io/Pacman"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MemeGenerator}
              isBlog={false}
              title="MemeGenerator"
              description="Meme Generator is a web-based tool that allows users to quickly and easily create their own visual image meme. In this case, a meme is media content that usually consists of a popular image and typically two sections of text: one at the top and one at the bottom and you can move it wherever you want."
              ghLink="https://github.com/YarinDay/meme-generator"
              demoLink="https://yarinday.github.io/meme-generator/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
