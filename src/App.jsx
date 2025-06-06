import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import PeakShavingAlert from "./pages/e3-apps/PeakShavingAlert";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Ventilation from "./pages/e3-apps/Ventilation";
import Cooling from "./pages/e3-apps/Cooling";
import HeatPump from "./pages/e3-apps/HeatPump";
import OutOfHours from "./pages/e3-apps/OutOfHours";
import EvCharging from "./pages/e3-apps/EvCharging";
import LoadShifting from "./pages/e3-apps/LoadShifting";
import DemandResponse from "./pages/DemandResponse";
import Insights from "./pages/Insights";
import VersionHistory from "./pages/VersionHistory";

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
          <>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/e3-apps/peak-shaving-and-alerts"
              element={<PeakShavingAlert />}
            />
            <Route path="/e3-apps/ventilation" element={<Ventilation />} />
            <Route path="/e3-apps/cooling" element={<Cooling />} />
            <Route path="/e3-apps/heat-pump" element={<HeatPump />} />
            <Route path="/e3-apps/out-of-hours" element={<OutOfHours />} />
            <Route path="/e3-apps/ev-charging" element={<EvCharging />} />
            <Route path="/e3-apps/load-shifting" element={<LoadShifting />} />

            <Route path="/demand-response" element={<DemandResponse />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/version-history" element={<VersionHistory />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
