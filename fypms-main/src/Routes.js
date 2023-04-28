import {
  MdDashboard,
  // MdOutlineManageSearch,
  // MdApps,
  MdOutlineSettingsSuggest,
  MdOutlineVoiceChat,
  MdOutlineEventNote,
} from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineSchedule } from "react-icons/ai";
import { ImUpload2 } from "react-icons/im";
// import { HiUserAdd } from "react-icons/hi";
import { TbNotebook } from "react-icons/tb";
import { BsPersonSquare } from "react-icons/bs";
import { GiSpaceShuttle } from "react-icons/gi";

export const ADMIN_ROUTES = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/classes",
    name: "Classes",
    icon: <SiGoogleclassroom />,
  },
  {
    path: "/teachers",
    name: "Teachers",
    icon: <BsPersonSquare />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <GiSpaceShuttle />,
  },
  {
    path: "/notice-board",
    name: "Notice Board",
    icon: <MdOutlineEventNote />,
  },
  // {
  //   path: "/generate-list",
  //   name: "Generate List",
  //   icon: <MdOutlineManageSearch />,
  // },
  {
    path: "/personal-notes",
    name: "Personal Notes",
    icon: <TbNotebook />,
  },
  // {
  //   path: "/miscellaneous",
  //   name: "Miscellaneous",
  //   icon: <MdApps />,
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <MdOutlineSettingsSuggest />,
  },
];

export const SUPERVISOR_ROUTES = [
  //   {
  //     path: "/",
  //     name: "Dashboard",
  //     icon: <FaHome />,
  //   },
  //   {
  //     path: "/users",
  //     name: "Users",
  //     icon: <FaUser />,
  //   },
  //   {
  //     path: "/messages",
  //     name: "Messages",
  //     icon: <MdMessage />,
  //   },
  //   {
  //     path: "/analytics",
  //     name: "Analytics",
  //     icon: <BiAnalyse />,
  //   },
];

export const STUDENT_ROUTES = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/my-project",
    name: "My Project",
    icon: <GiSpaceShuttle />,
  },
  {
    path: "/project-management",
    name: "Project Management",
    icon: <AiOutlineSchedule />,
  },
  {
    path: "/submissions",
    name: "Submissions",
    icon: <ImUpload2 />,
  },
  // {
  //   path: "/invitations",
  //   name: "Invitations/Requests",
  //   icon: <HiUserAdd />,
  // },
  {
    path: "/chat-meetings",
    name: "Chat & Meetings",
    icon: <MdOutlineVoiceChat />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <MdOutlineSettingsSuggest />,
  },
];
