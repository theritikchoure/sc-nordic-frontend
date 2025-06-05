import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from "./pages/auth/Login";

function App() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        {/* Public route for login */}

        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
