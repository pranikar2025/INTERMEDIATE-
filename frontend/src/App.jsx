
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Availability from "./User/Availability";

import Profit from "./Transaction/Profit";
import Balance from "./Transaction/Balance";

import AdminDashboard from "./Admin/Dashboard";
import AdminUserDetails from "./Admin/Userdetail";
import AdminLayout from "./Admin/Adminlayout.jsx";
import AdminSettings from "./Admin/Settings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Availability" element={<Availability />} />
        <Route path="/Profit" element={<Profit />} />
        <Route path="/Balance" element={<Balance />} />

        {/* Admin Parent Route */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="userdetails" element={<AdminUserDetails />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

