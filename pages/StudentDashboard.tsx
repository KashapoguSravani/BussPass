// @ts-nocheck
import React from "react";
import QRCode from "react-qr-code";

export default function StudentDashboard() {
  const student = JSON.parse(localStorage.getItem("student"));

  if (!student) return <h2>Please login first</h2>;

  return (
    <div className="student-dashboard">
      <h2>Welcome, {student.name}</h2>

      {/* QR should show only when fee was paid */}
      {student.feePaid ? (
        <>
          <h3>Your Bus Pass QR Code</h3>
          <QRCode value={student.username} size={200} />
          <p>Show this QR to the bus driver.</p>
        </>
      ) : (
        <div className="warning-box">
          <h3>Bus Fee Not Paid</h3>
          <p>Please pay your bus fee to generate your QR code.</p>
        </div>
      )}
    </div>
  );
}
