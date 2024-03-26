import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import project1 from "../assets/img/project-1.svg";
import project2 from "../assets/img/e-commerce.jpeg";
import project3 from "../assets/img/stylos.png";
import project8 from "../assets/img/educationhubpng.png";
import project9 from "../assets/img/bookme.png";
import project4 from "../assets/img/boutique pic.png";
import project5 from "../assets/img/igitego hotel.png";
import project7 from "../assets/img/project7.png";
import project6 from "../assets/img/igitego apart.png";
import project10 from "../assets/img/godiscover.png";
import project11 from "../assets/img/carrental.png";
import greentor from "../assets/img/greetor.png"

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Green Realtor revamped website",
      description:
        " Revamped website of Green realtor that helps client to know more about Green Realtor ",
      link: "https://green-realtors.strettch.com/",
      imgUrl: greentor,
    },
    {
      title: "Education Hub",
      description:
        " It is website that helps students to get universities they want to start their studies",
      link: "https://www.educationhubafrica.com",
      imgUrl: project8,
    },
    {
      title: "stylos consults",
      description:
        " it is a global stakeholder relations and consultancy firm, dedicated to helping organizations navigate complex issues and build sustainable relationships with their stakeholders Web App.",
      link: "https://stylosconsults.com",
      imgUrl: project3,
    },
    {
      title: "Bookme",
      description:
        " Web Application where hotels able to post thier hotels and trade rooms.Hotels able to manage all operation to their hotels",
      link: "https://bookme.rw",
      imgUrl: project9,
    },
    {
      title: "Godiscover africa",
      description:
        " web application that helps tourist to book the tour packages and it helps the users to manage their events and users to book the events ",
      link: "https://www.godiscoverafrica.rw/",
      imgUrl: project10,
    },
    {
      title: "Car rental",
      description:
        "Online platform that renting cars to the client whose wants its",
      link: "https://www.carrental.bookme.rw/",
      imgUrl: project11,
    },
    {
      title: "E-tuze",
      description:
        "this is a web app responsible for connecting therapists with people who are mentally facing personal issues such as depression,etc..",
      link: "https://e-tuze.netlify.app",
      imgUrl: project7,
    },
    {
      title: "igitego hotel",
      description:
        "this is a hotel reservation website made using Nextjs,tailwind,nodejs,mongoDB...",
      link: "https://igitegohotel.com",
      imgUrl: project5,
    },
    {
      title: "igitego apart hotel",
      description:
        "this is a hotel reservation website made using Nextjs,tailwind,nodejs,mongoDB...",
      link: "https://apart.igitegohotel.com",
      imgUrl: project6,
    },
    {
      title: "igitego boutique hotel",
      description:
        "this is a hotel reservation website made using Nextjs,tailwind,nodejs,mongoDB...",
      link: "https://boutique.igitegohotel.com",
      imgUrl: project4,
    },
    {
      title: "Carpooling app",
      description:
        "Design & Development of ride sharing using figma, MERN Stack tecknologies with tailwind css and TypeScript ",
      link: "https://woohoocar.vercel.app",
      imgUrl: project1,
    },
    {
      title: "e-commerce",
      description:
        "Andela team project training using react,redux toolkit,tailwind,nodejs,postgreSql...",
      link: "https://destructors-ec-fe.vercel.app",
      imgUrl: project2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-[90px] text-center">Projects</h2>
                  <p>
                    Welcome to my creative portfolio, where I showcase a
                    selection of my latest endeavors. These projects reflect my
                    passion for design and development, as well as my commitment
                    to delivering innovative solutions. Dive into a world of
                    digital craftsmanship where each project tells a unique
                    story. From web applications to interactive designs,
                    discover how I turn ideas into reality.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                      {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                      {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
