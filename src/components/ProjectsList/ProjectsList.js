import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./ProjectsList.scss";

export default function ProjectsList({ projects }) {
  return (
    <div className="project-list">
      {!projects ? <p>there are no projects yet</p> : (
        <>
          {/* {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <h4>{project.name}</h4>
              <p>{project.dueDate.toDate().toDateString()}</p>
              <div className="assigned-to">
                <ul>
                  {project.assignedUsersList.map((user) => (
                    <li key={user.photoURL}>
                      <Avatar src={user.photoURL} />
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))} */}
        </>
      )}
    </div>
  );
}
