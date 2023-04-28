import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./ProjectManagementPage.module.css";

const ProjectManagement = () => {
  const [myTodoList, setMyTodoList] = useState([
    {
      title: "Implement Login Functionality",
      phase: "Implementation",
      deadline: "2023-04-30",
      status: "In Progress",
    },
    {
      title: "Create User Dashboard",
      phase: "Design",
      deadline: "2023-05-31",
      status: "Didn't Start",
    },
    {
      title: "Write API Documentation",
      phase: "Testing",
      deadline: "2023-06-30",
      status: "Late",
    },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    {
      title: "Implement User Registration",
      phase: "Implementation",
      deadline: "2023-03-31",
      completionDate: "2023-03-30",
    },
    {
      title: "Design Database Schema",
      phase: "Design",
      deadline: "2023-02-28",
      completionDate: "2023-02-25",
    },
    {
      title: "Write Test Cases",
      phase: "Testing",
      deadline: "2023-01-31",
      completionDate: "2023-01-30",
    },
  ]);

  const [allTasks, setAllTasks] = useState([
    ...myTodoList,
    {
      title: "Implement Forgot Password Functionality",
      phase: "Implementation",
      deadline: "2023-07-31",
      status: "In Progress",
    },
    {
      title: "Design User Interface",
      phase: "Design",
      deadline: "2023-08-31",
      status: "Didn't Start",
    },
    {
      title: "Perform Load Testing",
      phase: "Testing",
      deadline: "2023-09-30",
      status: "Late",
    },
    ...completedTasks,
  ]);

  const handleDeleteTask = (taskIndex) => {
    setAllTasks((prevState) => {
      const newTasks = [...prevState];
      newTasks.splice(taskIndex, 1);
      return newTasks;
    });
  };

  console.log(setCompletedTasks, setMyTodoList);

  return (
    <Container fluid className={styles.projectManagementPage}>
      <Button>Add a Task</Button>
      <h4>My Todo List</h4>
      <Row className="my-3">
        {myTodoList.map((todo, index) => (
          <Col key={index} lg={4} className="mb-3">
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {todo.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {todo.phase}
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                  <strong>Deadline:</strong> {todo.deadline}
                  <br />
                  <strong>Status:</strong> {todo.status}
                </Card.Text>
                <FaCheckCircle
                  className={styles.deleteBtn}
                  //   onClick={() => handleDeleteTask(todo)}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <h4>My Completed Tasks</h4>
      <Row className="my-3">
        {completedTasks.map((task, index) => (
          <Col key={index} lg={4} className="mb-3">
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {task.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {task.phase}
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                  <strong>Deadline: </strong>
                  {task.deadline}
                </Card.Text>
                <Card.Text className={styles.cardText}>
                  <strong>End Date:</strong> {task.completionDate}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <h4>All Tasks</h4>
      <Row className="my-3">
        {allTasks.map((task, index) => (
          <Col key={index} lg={4} className="mb-3">
            <Card className={styles.cardCompleted}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {task.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {task.phase}
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                  <strong>Deadline: </strong>
                  {task.deadline}
                </Card.Text>
                {!task.completionDate && (
                  <Card.Text className={styles.cardText}>
                    <strong>Status:</strong> {task.status}
                  </Card.Text>
                )}
                {task.completionDate && (
                  <Card.Text className={styles.cardText}>
                    <strong>End Date:</strong> {task.completionDate}
                  </Card.Text>
                )}
                <Card.Text className={styles.cardText}>
                  <strong>To: </strong>
                  Muhammad Ahtesham
                </Card.Text>
                {!task.completionDate && (
                  <MdOutlineDeleteForever
                    className={styles.deleteBtn}
                    onClick={() => handleDeleteTask(task.id)}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectManagement;
