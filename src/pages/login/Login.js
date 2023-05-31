import "./Login.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { username, password } = values;
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:3002/api/v1/auth/login",
        values
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Search & Document HCMIU</h2>
      <h2>Login</h2>
      <label>
        <span>Username:</span>
        <input
          required
          type="text"
          value={username}
          id="username"
          onChange={handleChange}></input>
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          value={password}
          id="password"
          onChange={handleChange}></input>
      </label>
      <button type="submit" className="btn" disabled={loading} onClick={handleSubmit}>
        {/* {loading ? "Loading..." : "Login"} */}
        Login
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
export default Login;
