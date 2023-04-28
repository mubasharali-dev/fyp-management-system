import React, { useState } from "react";
import { Form } from "react-bootstrap";

import TeacherComponent from "../../../Components/Teachers/TeacherComponent";
import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./Settings.module.css";

const TEACHER = {
  profile: {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
};

let finalpasswords = {};

const initialPasswordsState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Settings = (props) => {
  const [passwords, setPasswords] = useState(initialPasswordsState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    finalpasswords = passwords;
    setPasswords(initialPasswordsState);
  };
  console.log(finalpasswords);

  return (
    <div className={classes["main-container"]}>
      <CustomCard>
        <div className={classes.container}>
          <TeacherComponent button={false} teacher={TEACHER.profile} />
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Form.Group controlId="oldPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                name="oldPassword"
                value={passwords.oldPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {passwords.newPassword.length >= 8 &&
              passwords.newPassword === passwords.confirmPassword && (
                <Button type="submit">Save</Button>
              )}
          </Form>
        </div>
      </CustomCard>
    </div>
  );
};

export default Settings;
