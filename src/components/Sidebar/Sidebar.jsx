import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaExchangeAlt, FaClipboardList, FaDollarSign, FaCog, FaChartBar, FaLifeRing, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Sidebar Header with User Icon */}
            <div className="sidebar-header">
                <FaUserCircle className="sidebar-user-icon" />  {/* Thay thế logo bằng icon người */}
                <h2 className="sidebar-title">Admin</h2>
            </div>

            {/* Sidebar Navigation */}
            <nav className="sidebar-nav">
                <ul>
                    <li><NavLink to="/dashboard" className="sidebar-link"><FaTachometerAlt className="sidebar-icon" /> Dashboard</NavLink></li>
                    <li><NavLink to="/users" className="sidebar-link"><FaUsers className="sidebar-icon" /> User Management</NavLink></li>
                    <li><NavLink to="/matches" className="sidebar-link"><FaExchangeAlt className="sidebar-icon" /> Match & Ride</NavLink></li>
                    <li><NavLink to="/content" className="sidebar-link"><FaClipboardList className="sidebar-icon" /> Content Moderation</NavLink></li>
                    <li><NavLink to="/config" className="sidebar-link"><FaDollarSign className="sidebar-icon" /> Setting</NavLink></li>
                    <li><NavLink to="/analytics" className="sidebar-link"><FaChartBar className="sidebar-icon" /> Analytics</NavLink></li>
                    <li><NavLink to="/support" className="sidebar-link"><FaLifeRing className="sidebar-icon" /> Support</NavLink></li>
                </ul>
            </nav>

            {/* Sidebar Footer (Logout) */}
            <div className="sidebar-footer">
                <NavLink to="/logout" className="sidebar-link logout"><FaSignOutAlt className="sidebar-icon" /> Log out</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
