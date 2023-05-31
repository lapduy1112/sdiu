import "./App.scss";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/document/Project";
//components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
// auth
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      { (
        <BrowserRouter>
          {user && <Sidebar></Sidebar>}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}

    </div>
  );
}

export default App;
