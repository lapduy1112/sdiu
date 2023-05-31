import "./Dashboard.scss";
import { useState } from "react";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import ProjectsFilter from "./ProjectsFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();
  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div className="dashboard pages-margin">
      {/* {error && <p className="error">{error}</p>} */}
      {/* {documents && (
        <ProjectsFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )} */}
      <ProjectsFilter
        currentFilter={currentFilter}
        changeFilter={changeFilter}
      />
      {/* <ProjectsList projects={projects} /> */}
    </div>
  );
}

export default Dashboard;
