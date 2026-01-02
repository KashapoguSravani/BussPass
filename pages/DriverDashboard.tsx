import { useNavigate } from "react-router-dom";

export default function DriverDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Driver Dashboard</h2>

      <button onClick={() => navigate("/scan")} className="btn-primary">
        Start Scanning
      </button>
    </div>
  );
}
