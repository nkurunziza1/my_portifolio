import { Col } from "react-bootstrap";

export const ProjectCard = ({ title,link, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={link} target="_blank" >{title}</a><br/>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
