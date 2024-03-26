import css from "../assets/img/css.svg";
import html from "../assets/img/html.svg";
import node from "../assets/img/nodejs.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import ts from "../assets/img/typescript.svg";
import tw from "../assets/img/tailwind.svg";
import mongo from "../assets/img/mongodb.svg";
import colorSharp from "../assets/img/color-sharp.png";
import postgres from "../assets/img/postgresql.svg";
import figma from "../assets/img/figma.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import nextjs from "../assets/img/nextjs.png";
import nestjs from "../assets/img/nestjs.png";
import graphql from "../assets/img/graphql.png";
import aws from "../assets/img/aws.jpeg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Throughout my journey, I've cultivated a diverse set of skills
                that empower me to craft compelling digital experiences.
                <br /> These proficiencies are the cornerstone of my expertise,
                enabling me to breathe life into captivating web and software
                solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider flex "
              >
                <div className="item">
                  <img src={html} alt="Image" />
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                </div>
                <div className="item">
                  <img src={ts} alt="Image" />
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                </div>
                <div className="item">
                  <img src={tw} alt="Image" />
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                </div>
                <div className="item">
                  <img src={postgres} alt="Image" />
                </div>
                <div className="item">
                  <img src={figma} alt="Image" />
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                </div>
                <div className="item">
                  <img src={nestjs} alt="Image" />
                </div>
                <div className="item">
                  <img src={nextjs} alt="Image" />
                </div>
                <div className="item">
                  <img src={aws} alt="Image" />
                </div>
                <div className="item">
                  <img src={graphql} alt="Image" />
                </div>
              </Carousel>
              {/* <div className="flex items-center justify-center gap-5 text-[18px] font-[200] xs:flex-col">
                        <h5>Web Development</h5>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
