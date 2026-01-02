import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type DashboardCardProps = {
  title: string;
  icon: React.ElementType;
  description: string;
  color: string;
  delay?: number;
  navigateTo: string;   // ⭐ required for navigation
};

export default function DashboardCard({
  title,
  icon: Icon,
  description,
  color,
  delay = 0,
  navigateTo,
}: DashboardCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="dashboard-card"
      style={{
        animationDelay: `${delay}ms`,
        // @ts-ignore
        "--card-accent": color,
      }}
    >
      <div className="card-content">
        <div
          className="icon-wrapper"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}10)`,
          }}
        >
          <Icon size={32} color={color} />
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      {/* CLICKABLE NAVIGATION AREA */}
      <div
        className="card-footer"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(navigateTo)}
      >
        <span className="action-text">View Details</span>
        <ArrowRight size={16} className="action-icon" />
      </div>
    </div>
  );
}



// // @ts-nocheck
// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const DashboardCard = ({ title, icon: Icon, description, color, delay }) => {
//   return (
//     <div
//       className="dashboard-card"
//       style={{
//         animationDelay: `${delay}ms`,
//         '--card-accent': color
//       }}
//     >
//       <div className="card-content">
//         <div className="icon-wrapper" style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}>
//           <Icon size={32} color={color} />
//         </div>
//         <h3 className="card-title">{title}</h3>
//         <p className="card-description">{description}</p>
//       </div>
//       <div className="card-footer">
//         <span className="action-text">View Details</span>
//         <ArrowRight size={16} className="action-icon" />
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;
