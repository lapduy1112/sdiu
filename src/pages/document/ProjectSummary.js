import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
// import ProjectTasks from "./ProjectTasks";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProjectSummary({ project }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
      </div>
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Complete
        </button>
      )}

    </div>
  );
}