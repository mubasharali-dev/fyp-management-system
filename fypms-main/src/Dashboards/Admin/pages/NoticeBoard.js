import { useState, useEffect } from "react";

import { ApiCall } from "../../../api/apiCall";

import SpinnerModal from "../../../Components/UI/SpinnerModal";
import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";

const NoticeBoard = () => {
  const [pageState, setPageState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      const response = await ApiCall({
        params: {},
        route: `admin/notice-board`,
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NoticeBoardComponent
            reciever={true}
            notices={pageState.notices}
            wide={true}
            isAdmin={true}
          />
        </div>
      )}
      {isLoading && <SpinnerModal />}
    </div>
  );
};

export default NoticeBoard;
