import React from "react";
import { useNavigate } from "react-router-dom";
import "./projecttaskpage.css";
import p1image from "../../assets/images/p1.png";
import ChatMessageModal from "../../components/ChatMessageHeader";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import task1image from "../../assets/images/task1image.jpg";
import task2image from "../../assets/images/task2image.jpg";
import task3image from "../../assets/images/task3image.jpg";
import task4image from "../../assets/images/task4image.jpg";

import {
  addIconWhiteSmall,
  headerBackIcon,
  otherIcon,
  searchBig,
} from "../../Utils/tools";
import TaskCard from "../../components/TaskCard";
import ProjectHeader from "../../components/ProjectHeader";

function Projecttaskpage() {
  let navigate = useNavigate();
  let task1 = [p1];
  let task2 = [p2, p3, p4];
  let task3 = [p4, p1, p5];
  let task4 = [p3, p1, p4, p2, p5];
  let tasksimage = [task1image, task2image, task3image, task4image];
  return (
    <>
     <ProjectHeader projectImage={p3} projectName="Ushy Dashboard" projectCategory="Web Development" handleCloseClick={() => navigate(-1)} />
    </>
  );
}

export default Projecttaskpage;
