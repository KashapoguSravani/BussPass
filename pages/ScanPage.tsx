// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function ScanPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });

    scanner.render((decoded) => {
      const student = JSON.parse(localStorage.getItem("studentAccount"));

      if (student && decoded === student.username) {
        if (student.feePaid) {
          setMessage("✔ Fee Paid — Student Allowed");
        } else {
          setMessage("❌ Fee Not Paid — Not Allowed");
        }
      } else {
        setMessage("❌ Unknown QR Code");
      }
    });

    return () => scanner.clear();
  }, []);

  return (
    <div className="scan-container">
      <h2>Driver QR Scanner</h2>

      <div id="qr-reader"></div>

      <div className="scan-result">{message}</div>
    </div>
  );
}
