import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import "./styles.css";

// Student
import StudentRegister from "./pages/StudentRegister.tsx";
import StudentLogin from "./pages/StudentLogin.tsx";
import StudentDashboard from "./pages/StudentDashboard.tsx";
import DriverRegister from "./pages/DriverRegister.tsx";



// Driver
import DriverLogin from "./pages/DriverLogin.tsx";
import DriverDashboard from "./pages/DriverDashboard.tsx";

// Scan
import ScanPage from "./pages/ScanPage.tsx";

// Bus Pass Dashboard (JSX file)
import BusPassDashboard from "./pages/BusPassDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Student */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}
         />

        {/* Driver */}
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
<Route path="/driver-register" element={<DriverRegister />} />

        {/* Scanner */}
        <Route path="/scan" element={<ScanPage />} />

        {/* Bus Pass */}
        <Route path="/buspass-dashboard" element={<BusPassDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
