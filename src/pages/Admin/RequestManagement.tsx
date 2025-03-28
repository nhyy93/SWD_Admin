import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./RequestManagement.module.css";

interface Request {
  id: number;
  sentBy: number;
  status: "APPROVED" | "PENDING" | "REJECTED";
  processedBy: string | null;
}

const RequestManagement: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetchRequests();
  }, []);

  // Lấy danh sách requests
  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Unauthorized: Please log in.");
        return;
      }

      const response = await axios.get<Request[]>("http://localhost:8080/api/admin/shops/request", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
      setMessage("Failed to load requests.");
    }
  };

  // Phê duyệt yêu cầu
  const approveRequest = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Unauthorized: Please log in.");
        return;
      }

      await axios.put(`http://localhost:8080/api/admin/shops/request/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("Shop request approved! Account details sent via email.");
      fetchRequests(); // Cập nhật lại danh sách
    } catch (error) {
      console.error("Error approving request:", error);
      setMessage("Failed to approve request.");
    }
  };

  // Từ chối yêu cầu
  const rejectRequest = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Unauthorized: Please log in.");
        return;
      }

      await axios.put(`http://localhost:8080/api/admin/shops/request/${id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("Shop request rejected.");
      fetchRequests(); // Cập nhật lại danh sách
    } catch (error) {
      console.error("Error rejecting request:", error);
      setMessage("Failed to reject request.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shop Request Management</h2>
      {message && <p className={styles.message}>{message}</p>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sent By</th>
            <th>Status</th>
            <th>Processed By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.sentBy}</td>
                <td className={`${styles.status} ${styles[req.status.toLowerCase()]}`}>{req.status}</td>
                <td>{req.processedBy || "Pending"}</td>
                <td>
                  {req.status === "PENDING" ? (
                    <>
                      <button className={styles.approveBtn} onClick={() => approveRequest(req.id)}>
                        Approve
                      </button>
                      <button className={styles.rejectBtn} onClick={() => rejectRequest(req.id)}>
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className={styles.approvedText}>{req.status}</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.noData}>No requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RequestManagement;
