import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import Button from "../../Components/UI/Button";
import classes from "./StudentComponent.module.css";

const TeacherComponent = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.img} src={"/images/teachers.jpg"} alt="teacher" />
      <Card className={`${classes.box} text-center`} style={{ width: "15rem" }}>
        <Card.Body className={classes.card}>
          <Card.Subtitle className="mt-2 mb-2">
            {props.student.name}
          </Card.Subtitle>
          <p className="mb-1 text-muted">{props.student.designation}</p>
          <Card.Text>
            Roll No: <span>{props.student.rollNo}</span>
          </Card.Text>
          {/* {props.button === false ? (
            ""
          ) : (
            <Link to={`./${props.student.id}`}>
              <Button>Details</Button>
            </Link>
          )} */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeacherComponent;
