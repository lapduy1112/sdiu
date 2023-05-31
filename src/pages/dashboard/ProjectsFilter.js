import { useEffect, useState } from "react";
import { DashOutlined } from "@ant-design/icons";
import {
  CaretDownOutlined 
} from '@ant-design/icons';
const filterList = [
  "All",
  "Mine",
  "Document found",
  "Document lost",
];
export default function ProjectsFilter({ currentFilter, changeFilter }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [dropOpen, setDropOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth)
    );
  }, []);

  const breakpoint = 700;

  const handleFilter = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <>
      {width >= breakpoint ? (
        <div className="project-filter">
          <nav>
            <p>Filter by:</p>
            {filterList.map((i) => (
              <button
                key={i}
                onClick={() => {
                  handleFilter(i);
                }}
                className={currentFilter === i ? "active" : ""}>
                {i}
              </button>
            ))}
          </nav>
        </div>
      ) : (
        <div className="menu-container">
          <div className="drop-down-container">
            <p>
              filter by: <span>{` ${currentFilter}`}</span>
            </p>
            <img
              src={<CaretDownOutlined />}
              alt="dropDown"
              onClick={() => {
                setDropOpen(!dropOpen);
              }}
            />
            <DashOutlined
              onClick={() => {
                setDropOpen(!dropOpen);
              }}
            />
          </div>

          {dropOpen && (
            <nav>
              {filterList.map((i) => (
                <button
                  key={i}
                  onClick={() => {
                    handleFilter(i);
                    setDropOpen(false);
                  }}
                  className={currentFilter === i ? "active" : ""}>
                  {i}
                </button>
              ))}
            </nav>
          )}
        </div>
      )}
    </>
  );
}
