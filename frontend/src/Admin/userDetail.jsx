
import { useState } from "react";
import { Link } from "react-router-dom";

function AdminUserDetails() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ramesh Kumar",
      email: "ramesh@gmail.com",
      phone: "9876543210",
      role: "Customer",
      status: "Active"
    },
    {
      id: 2,
      name: "Suresh Transport",
      email: "suresh@gmail.com",
      phone: "9876543211",
      role: "Truck Owner",
      status: "Active"
    },
    {
      id: 3,
      name: "Kumar Traders",
      email: "kumar@gmail.com",
      phone: "9876543212",
      role: "Customer",
      status: "Inactive"
    },
    {
      id: 4,
      name: "Arun Logistics",
      email: "arun@gmail.com",
      phone: "9876543213",
      role: "Truck Owner",
      status: "Active"
    }
  ]);

  const [search, setSearch] = useState("");

  function deleteUser(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          LaneLedger
        </h1>

        <div className="flex gap-6">
          <Link to="/admin/admindashboard" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link to="/admin/userdetails" className="text-blue-400">
            User Details
          </Link>

          <Link to="/admin/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">

        <h2 className="text-3xl font-bold mb-2">
          User Management
        </h2>

        <p className="text-slate-400 mb-8">
          View and manage customers and truck owners.
        </p>

        {/* User Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

          <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
            <p className="text-slate-400">Total Users</p>
            <h3 className="text-3xl font-bold mt-2">{users.length}</h3>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
            <p className="text-slate-400">Customers</p>
            <h3 className="text-3xl font-bold text-blue-400 mt-2">
              {users.filter((user) => user.role === "Customer").length}
            </h3>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
            <p className="text-slate-400">Truck Owners</p>
            <h3 className="text-3xl font-bold text-green-400 mt-2">
              {users.filter((user) => user.role === "Truck Owner").length}
            </h3>
          </div>

        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* User Table */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 overflow-x-auto">

          <h3 className="text-xl font-semibold mb-6">
            All Users
          </h3>

          <table className="w-full text-left">

            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-slate-800">

                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.role}</td>

                  <td className="p-3">
                    <span className={
                      user.status === "Active"
                        ? "text-green-400"
                        : "text-red-400"
                    }>
                      {user.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-slate-400">
                    No users found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default AdminUserDetails;
