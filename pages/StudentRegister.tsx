// @ts-nocheck
import React, { useState } from "react";

export default function StudentRegister() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    feePaid: false,  // IMPORTANT: default false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Save student data
    localStorage.setItem("studentAccount", JSON.stringify(form));

    alert("Registration successful! Please login.");
    window.location.href = "/student-login";
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>

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

        {/* ✅ Fee Paid Checkbox */}
        <label className="checkbox">
          <input
            type="checkbox"
            checked={form.feePaid}
            onChange={(e) =>
              setForm({ ...form, feePaid: e.target.checked })
            }
          />
          Bus Fee Paid?
        </label>

        <button className="btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
