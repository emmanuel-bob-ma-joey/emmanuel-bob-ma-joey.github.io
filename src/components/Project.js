import "../App.css";
import "../stylesheets/Project.css";
import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    <div className="Project">
      <div className="card-item">
        <h3>{props.title}</h3>
      </div>
      <div className="card-item">
        <h6>{props.subtitle}</h6>
      </div>
      <div className="card-item">
        <p>{props.text}</p>
      </div>
      <div>
        <a
          className="project-link"
          href={props.sourceLink}
          target="_blank"
          rel="nofollow"
        >
          Check out the source code
        </a>
      </div>
    </div>
    // <div className="Project ">
    //   <Card className="project-card">
    //     <Card.Body>
    //       <Card.Title>{props.title}</Card.Title>
    //       <Card.Subtitle className="mb-2 text-muted">
    //         {props.subtitle}
    //       </Card.Subtitle>
    //       <Card.Text>{props.text}</Card.Text>
    //       <Card.Link
    //         className="project-link"
    //         href={props.sourceLink}
    //         target="_blank"
    //         rel="nofollow"
    //       >
    //         Check out the source code
    //       </Card.Link>
    //       <Card.Link
    //         className="project-link"
    //         href="https://www.youtube.com"
    //         target="_blank"
    //         rel="nofollow"
    //       >
    //         Learn More
    //       </Card.Link>
    //     </Card.Body>
    //   </Card>
    // </div>
  );
}

export default Project;
