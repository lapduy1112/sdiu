import "./Signup.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function Signup({ history }) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { username, password } = values;
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    // try {
    //   const res = await axios.post("/api/v1/auth/login", values);
    //   dispatch({ type: "LOGIN", payload: res.data.details });
    //   navigate("/");
    //   console.log(res)
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    // }
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Search & Document HCMIU</h2>
      <h2>Login for Admin</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="text"
          value={username}
          onChange={handleChange("email")}></input>
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={handleChange("password")}></input>
      </label>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
export default Signup;
