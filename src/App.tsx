
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Admin pages
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import UserManagement from "./pages/Admin/UserManagement";
import MatchRideMonitoring from "./pages/Admin/MatchRideMonitoring";
import ContentModeration from "./pages/Admin/ContentModeration";
import PlatformConfig from "./pages/Admin/PlatformConfig";
import AnalyticsReporting from "./pages/Admin/AnalyticsReporting";
import SupportFeedback from "./pages/Admin/SupportFeedback";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="matches" element={<MatchRideMonitoring />} />
          <Route path="content" element={<ContentModeration />} />
          <Route path="config" element={<PlatformConfig />} />
          <Route path="analytics" element={<AnalyticsReporting />} />
          <Route path="support" element={<SupportFeedback />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
