import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { GroupOutlined, PlusOutlined, BellOutlined } from "@ant-design/icons";
import Avatar from "../Avatar/Avatar";

import { useAuthContext } from "../../hooks/useAuthContext";
import "./Sidebar.scss";
function Sidebar() {
  const { user } = useAuthContext();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth)
    );
  }, []);

  return (
    <div className="sidebar">
      <div className='"sidebar-content'>
        <div className="user">
          <Avatar></Avatar>
          <p>hello </p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <div className="link">
                  <GroupOutlined className="icon" />
                  <span>Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <div className="link">
                  <PlusOutlined className="icon" />
                  <span>Add project</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">
                <div className="link">
                  <BellOutlined className="icon" />
                  <span>News</span>
                </div>
              </NavLink>
            </li>
            {/* <li>
              <div className="link">
                {width < mobileBreakpoint && (
                  <img
                    className="users-icon"
                    src={usersIcon}
                    alt="users icon"
                    onClick={() => {
                      setIsOpen(true);
                    }}></img>
                )}
              </div>
            </li> */}
          </ul>
        </nav>
      </div>

      {/* {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />} */}
    </div>
  );
}
export default Sidebar;
