
import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSettings() {

  const [settings, setSettings] = useState({
    brokerName: "Admin",
    email: "admin@gmail.com",
    phone: "",
    businessName: "LaneLedger Transport",
    notifications: true
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Settings Updated Successfully!");

    console.log("Updated Settings:", settings);
  }
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-700 px-8 py-5 flex justify-between">
        <h1 className="text-2xl font-bold text-blue-400">
          LaneLedger
        </h1>
        <div className="flex gap-6">
          <Link to="/admin/admindashboard" className="hover:text-blue-400">
          Dashboard
          </Link>
          <Link to="/admin/userdetails" className="hover:text-blue-400">
          User Details
          </Link>
          <Link to="/admin/settings" className="text-blue-400">
          Settings
          </Link>
         </div>
        </nav>
        <div className="max-w-3xl mx-auto p-8">

        <h2 className="text-3xl font-bold mb-2">
          Account Settings
        </h2>

        <p className="text-slate-400 mb-8">
          Manage your broker profile and business preferences.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-6">

            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Profile Information
            </h3>

            <label className="block mb-2">Broker Name</label>
            <input
              type="text"
              name="brokerName"
              value={settings.brokerName}
              onChange={handleChange}
              className="w-full p-3 mb-5 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              required
            />

            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full p-3 mb-5 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              required
            />

            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />

          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-6">

            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Business Information
            </h3>

            <label className="block mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={settings.businessName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              required
            />

          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-6">

            <h3 className="text-xl font-semibold mb-5 text-blue-400">
              Notifications
            </h3>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="w-5 h-5"
              />

              <span>Receive booking and payment notifications</span>
            </label>

          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminSettings;
