// @ts-nocheck
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DashboardCard = ({ title, icon: Icon, description, color, delay }) => {
  return (
    <div
      className="dashboard-card"
      style={{
        animationDelay: `${delay}ms`,
        '--card-accent': color
      }}
    >
      <div className="card-content">
        <div className="icon-wrapper" style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}>
          <Icon size={32} color={color} />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <span className="action-text">View Details</span>
        <ArrowRight size={16} className="action-icon" />
      </div>
    </div>
  );
};

export default DashboardCard;
