// @ts-nocheck
import React, { useState } from "react";

export default function DriverLogin() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const account = JSON.parse(localStorage.getItem("driverAccount"));

    if (!account) {
      alert("No driver registered! Please register first.");
      return;
    }

    if (
      data.username === account.username &&
      data.password === account.password
    ) {
      localStorage.setItem("driver", JSON.stringify(account));
      window.location.href = "/scan"; // Driver goes to scanner
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Driver Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button className="btn-primary" onClick={handleLogin}>
        Login
      </button>

      <button
        className="btn-secondary"
        onClick={() => (window.location.href = "/driver-register")}
      >
        Register
      </button>
    </div>
  );
}
