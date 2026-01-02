// @ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bus } from "lucide-react";

export default function BusPassDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px" }}
      >
        ← Back
      </button>

      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          display: "flex",
          gap: "10px",
          alignItems: "center"
        }}
      >
        <Bus size={28} /> Bus Pass Dashboard
      </h1>

      <p style={{ marginBottom: "20px" }}>
        Choose how you want to continue.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        
        {/* Student Register */}
        <button
          onClick={() => navigate("/register")}
          className="btn-primary"
        >
          Student Register
        </button>

        {/* Student Login */}
        <button
          onClick={() => navigate("/student-login")}
          className="btn-secondary"
        >
          Student Login
        </button>

        {/* Driver Login */}
    
        <button
  onClick={() => navigate("/driver-register")}
  className="btn-primary"
>
  Driver Register
</button>
    <button
          onClick={() => navigate("/driver-login")}
          className="btn-secondary"
        >
          Driver Login
        </button>

      </div>
    </div>
  );
}
