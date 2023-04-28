import { useState, useEffect } from "react";

import { ApiCall } from "../../../api/apiCall";

import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";
import NotificationsComponent from "../../../Components/Notifications/NotificationsComponent";
import SpinnerModal from "../../../Components/UI/SpinnerModal";
import CustomCard from "../../../Components/UI/CustomCard";
import classes from "./../AdminDashboard.module.css";

export const Dashboard = () => {
  const [pageState, setPageState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await ApiCall({
        params: {},
        route: "admin/",
        verb: "get",
        token: "jwt_token",
        baseurl: true,
      });

      if (response && response.status === 200) {
        setPageState(response?.response || {});
        setIsLoading(false);
      } else {
        console.log(response);
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      {!isLoading && (
        <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes["card-container"]}>
              <CustomCard>
                <div className={classes.card}>
                  <p>Total Projects</p>
                  <h1>{pageState.projects.toString().padStart(2, "0")}</h1>
                </div>
              </CustomCard>
              <CustomCard>
                <div className={classes.card}>
                  <p>Total Classes</p>
                  <h1>{pageState.classes.toString().padStart(2, "0")}</h1>
                </div>
              </CustomCard>
              <CustomCard>
                <div className={classes.card}>
                  <p>Total Students</p>
                  <h1>{pageState.students.toString().padStart(2, "0")}</h1>
                </div>
              </CustomCard>
              <CustomCard>
                <div className={classes.card}>
                  <p>Total Supervisors</p>
                  <h1>{pageState.supervisors.toString().padStart(2, "0")}</h1>
                </div>
              </CustomCard>
            </div>
            <div>
              <NotificationsComponent notifications={pageState.notifications} />
            </div>
          </div>
          <div>
            <NoticeBoardComponent
              isAdmin={true}
              reciever={true}
              notices={pageState.notices}
            />
          </div>
        </div>
      )}
      {isLoading && <SpinnerModal />}
    </div>
  );
};

export default Dashboard;
