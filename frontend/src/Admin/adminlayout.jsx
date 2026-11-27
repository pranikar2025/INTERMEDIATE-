
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h1>Admin Page</h1>

      <nav>
        <Link to="/adminLayout/admindashboard">Dashboard</Link>
        <Link to="/adminLayout/userdetails">User Details</Link>
        <Link to="/adminLayout/settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default AdminLayout;
