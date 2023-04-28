// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";

// import { ApiCall } from "../../../api/apiCall";

import StudentComponent from "../../../Components/Students/StudentComponent";
import TeacherComponent from "../../../Components/Teachers/TeacherComponent";

import SpinnerModal from "../../../Components/UI/SpinnerModal";
import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./Project.module.css";

const students = [
  {
    rollNo: "bsf1900334",
    name: "Jamshaid Javaid",
    hasTopped: true,
    designation: "",
    id: "1",
  },
  {
    rollNo: "bsf1900426",
    name: "Muhammad Ahtesham",
    hasTopped: false,
    designation: "",
    id: "2",
  },
  {
    rollNo: "bsf1900109",
    name: "Mubashar Ali",
    hasTopped: false,
    designation: "",
    id: "3",
  },
];

const supervisor = {
  empId: "190021",
  name: "Aftab Akram",
  designation: "Lecturer",
  id: "3",
};

const examiner = {
  empId: "190021",
  name: "Aftab Akram",
  designation: "Lecturer",
  id: "3",
};

const pageState = {
  project: {
    title: "This is project",
    id: "12345432refgdfv4234",
    className: "BSIT-Mor-Fall (2019-23)",
    description: "This is dummy description",
  },
};

const Project = () => {
  const isLoading = false;

  const allStudents = students.map((student) => {
    if (student.hasTopped === true) {
      student.designation = "Group Leader";
    } else {
      student.designation = "Group Member";
    }

    return <StudentComponent key={student.id} student={student} />;
  });

  return (
    <div>
      {!isLoading && (
        <div className={classes.page}>
          <CustomCard>
            <div className={classes.project}>
              <p className={classes.headline}>{pageState.project.title}</p>
              <div className={classes.items}>
                <div className={classes.item}>
                  <p>Project ID:</p>
                  <span> {pageState.project.id}</span>
                </div>
                <div className={classes.item}>
                  <p>Class:</p>
                  <span> {pageState.project.className}</span>
                </div>
              </div>
              <div className={classes.item}>
                <p>Project Description:</p>
                <span>{pageState.project.description}</span>
              </div>
              <div className={`${classes.item} ${classes.buttons}`}>
                <Button>Edit Description</Button>
              </div>
            </div>
          </CustomCard>
          <h5>Group Members</h5>
          <div className={classes.item}>{allStudents}</div>
          <hr />
          <div className={classes.item}>
            <div className={classes.teacher}>
              <h5>Supervisor</h5>
              <TeacherComponent button={false} teacher={supervisor} />
            </div>
            <div className={classes.teacher}>
              <h5>Examiner</h5>
              <TeacherComponent button={false} teacher={examiner} />
            </div>
          </div>
        </div>
      )}
      {isLoading && <SpinnerModal />}
    </div>
  );
};

export default Project;
