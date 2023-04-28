import { useState, useEffect } from "react";

import { ApiCall } from "../../../api/apiCall";

import DetailedProjectTable from "../../../Components/Tables/DetailedProjectTable";
import SpinnerModal from "../../../Components/UI/SpinnerModal";
import classes from "./Projects.module.css";

const Projects = () => {
  const [pageState, setPageState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      const response = await ApiCall({
        params: {},
        route: `admin/projects`,
        verb: "get",
        token: "jwt_token",
        baseurl: true,
      });

      if (response && response.status === 200) {
        setPageState(response.response);
        setIsLoading(false);
      } else {
        console.log(response);
        setIsLoading(false);
      }
    };
    loadPage();
  }, []);

  return (
    <div>
      {!isLoading && (
        <div className={classes.container}>
          <DetailedProjectTable
            projects={pageState.projects}
            label={"All Projects"}
            button={true}
          />
        </div>
      )}
      {isLoading && <SpinnerModal />}
    </div>
  );
};

export default Projects;
