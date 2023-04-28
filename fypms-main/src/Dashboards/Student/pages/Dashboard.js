import React, { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./ProjectManagementPage.module.css";

import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";

const notices = [
  {
    _id: "641b70b243e0c5fd08209312",
    headline: "Please see this notice",
    description: "checking wether notices working properly  or not",
    receiverEntity: "teacher",
    receiverName: "Muhammad Umair",
    receiverId: "6410ed70019edfc383d66433",
    id: "641b70b243e0c5fd082093123",
  },
  {
    _id: "641b70b243e0c5fd08209312",
    headline: "Please see this notice",
    description: "checking wether notices working properly  or not",
    receiverEntity: "teacher",
    receiverName: "Muhammad Umair",
    receiverId: "6410ed70019edfc383d66433",
    id: "641b70b243e0c5fd082093122",
  },
  {
    _id: "641b70b243e0c5fd08209312",
    headline: "Please see this notice",
    description: "checking wether notices working properly  or not",
    receiverEntity: "teacher",
    receiverName: "Muhammad Umair",
    receiverId: "6410ed70019edfc383d66433",
    id: "641b70b243e0c5fd082093121",
  },
];

const Dashboard = () => {
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
    {
      title: "Write API Documentation",
      phase: "Testing",
      deadline: "2023-06-30",
      status: "Late",
    },
  ]);

  return (
    <div>
      <Row className={`my-3 ${styles.row}`}>
        <h4>My Todo List</h4>
        {myTodoList.map((todo, index) => (
          <Col key={index} className="mb-3">
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
      <NoticeBoardComponent isAdmin={false} notices={notices} />
    </div>
  );
};

export default Dashboard;
