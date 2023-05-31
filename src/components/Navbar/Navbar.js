import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    setIsPending(true);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">
            <div className="logo-flex">
              <img src={Logo} alt="logo" />
              <span>SDIU</span>
            </div>
          </Link>
        </li>
        {!user && (
          <div className="auth-div">
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </div>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out....
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;
