
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
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import ForgotPassword from './pages/AdminLogin/ForgotPassword';
import VerifyCode from './pages/AdminLogin/VerifyCode';
import RequestManagement from "./pages/Admin/RequestManagement";
function App() {
  return (
    <Router>
      <Routes>

        {/* Admin routes */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="verify" element={<VerifyCode />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="matches" element={<MatchRideMonitoring />} />
          {/* <Route path="admin/content" element={<ContentModeration />} />
          <Route path="admin/config" element={<PlatformConfig />} /> */}
          <Route path="analytics" element={<AnalyticsReporting />} />
          <Route path="requests" element={<RequestManagement />} />
          {/* <Route path="admin/support" element={<SupportFeedback />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
