import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import { FaEye, FaTrash, FaSearch } from "react-icons/fa";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("All");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Unauthorized: Please log in.");
                    return;
                }

                const response = await axios.get("http://localhost:8080/api/user/all", {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to fetch users.");
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:8080/api/user/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setUsers(users.filter(user => user.id !== id));
            alert("User deleted successfully!");
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user.");
        }
    };

    const handleViewDetails = (user) => {
        alert(`User Details:\nName: ${user.username}\nEmail: ${user.email}\nPhone: ${user.phone || "Not available"}\nRole: ${user.role}`);
    };

    const filteredUsers = users.filter(user => {
        return (
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterRole === "All" || user.role === filterRole)
        );
    });

    return (
        <div className="admin-container">
            <h1>User & Shop Management</h1>
            <p>Manage user profiles and shop authenticity.</p>

            {error && <p className="error-message">{error}</p>}

            <div className="admin-controls">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select className="role-filter" value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
                    <option value="All">All Roles</option>
                    <option value="STAFF">Staff</option>
                    <option value="SHOP_OWNER">Shop Owner</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </div>

            <div className="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(user => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone || "Not available"}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="action-button view" onClick={() => handleViewDetails(user)}>
                                            <FaEye />
                                        </button>
                                        <button className="action-button suspend" onClick={() => handleDelete(user.id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="no-results">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
