// @ts-nocheck
import React, { useState } from "react";

export default function DriverRegister() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Save driver data
    localStorage.setItem("driverAccount", JSON.stringify(form));

    alert("Driver registered successfully!");
    window.location.href = "/driver-login";
  };

  return (
    <div className="form-container">
      <h2>Driver Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
