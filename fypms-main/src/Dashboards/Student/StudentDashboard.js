import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Sidebar from "../../Components/Navbar/Sidebar";
import ProjectManagement from "./pages/ProjectManagement";
import Submissions from "./pages/Submissions";

const user = {
  name: "Muhammad Ahtesham",
  id: "641db1a377ffbbcb6dd25802",
};

const StudentDashboard = (props) => {
  return (
    <Sidebar user={user} links={props.links}>
      <Routes>
        <Route path="/" element={<Dashboard userId={user.id} />} />
        <Route path="/my-project" element={<Project userId={user.id} />} />
        <Route
          path="/project-management"
          element={<ProjectManagement userId={user.id} />}
        />
        <Route path="/submissions" element={<Submissions userId={user.id} />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </Sidebar>
  );
};

export default StudentDashboard;
