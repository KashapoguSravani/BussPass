// @ts-nocheck
import React, { useState } from "react";

export default function StudentLogin() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const account = JSON.parse(localStorage.getItem("studentAccount"));

    if (!account) {
      alert("No account found! Please register.");
      return;
    }

    if (
      data.username === account.username &&
      data.password === account.password
    ) {
      localStorage.setItem("student", JSON.stringify(account));
      window.location.href = "/student-dashboard";
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Student Login</h2>

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
    </div>
  );
}
