import { useParams } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";
import "./Project.scss";
import ProjectComments from "./ProjectComments";

export default function Project() {
  // const { id } = useParams();
  // if (error) {
  //   return <div className="error project-margin">{error}</div>;
  // }

  // if (!document) {
  //   return <div className="loading project-margin">loading....</div>;
  // }

  return (
    <div className="project-details pages-margin">
      <ProjectSummary />
      <ProjectComments />
    </div>
  );
}