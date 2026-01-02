// @ts-nocheck
import React from 'react';
import {
  Calendar,
  CreditCard,
  Users,
  Bell,
  GraduationCap,
  Bus,
  Vote,
  LayoutDashboard
} from 'lucide-react';
import DashboardCard from './components/DashboardCard';
import './App.css';

const modules = [
  {
    id: 1,
    title: "Time Table",
    icon: Calendar,
    description: "View and manage class schedules and academic calendar.",
    color: "#38bdf8"
  },
  {
    id: 2,
    title: "UPI Transactions",
    icon: CreditCard,
    description: "Track payments, fee status, and transaction history.",
    color: "#4ade80"
  },
  {
    id: 3,
    title: "Club & Events",
    icon: Users,
    description: "Join clubs, register for events, and manage activities.",
    color: "#f472b6"
  },
  {
    id: 4,
    title: "Reminders",
    icon: Bell,
    description: "Set alerts for assignments, exams, and important dates.",
    color: "#fbbf24"
  },
  {
    id: 5,
    title: "Students Count",
    icon: GraduationCap,
    description: "Real-time statistics on student attendance and enrollment.",
    color: "#818cf8"
  },
  {
    id: 6,
    title: "Bus Pass",
    icon: Bus,
    description: "Apply for bus passes, view routes, and track transport.",
    color: "#f87171",
    navigateTo: "/buspass-dashboard" // ⭐ ADD NAVIGATION HERE
  },
  {
    id: 7,
    title: "Polling",
    icon: Vote,
    description: "Participate in student council elections and surveys.",
    color: "#2dd4bf"
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="dashboard-header">
        <div className="logo-container">
          <LayoutDashboard size={32} color="#38bdf8" />
          <h1>Student Portal</h1>
        </div>
        <div className="user-profile">
          <div className="avatar">S</div>
          <span>Student View</span>
        </div>
      </header>

      <main className="dashboard-grid">
        {modules.map((module, index) => (
          <DashboardCard
            key={module.id}
            {...module}
            delay={index * 100}
            navigateTo={module.navigateTo || ""} // ⭐ PASS IT HERE
          />
        ))}
      </main>
    </div>
  );
}

export default App;
