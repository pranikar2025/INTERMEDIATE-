
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const username = location.state?.username || "Broker";

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Broker Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, {username}!
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Trucks</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            25
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Available Trucks</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            15
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Active Bookings</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            8
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Pending Payments</p>
          <h2 className="text-3xl font-bold text-red-500 mt-2">
            ₹50,000
          </h2>
        </div>

      </div>

      {/* Payment Summary */}
      <div className="bg-white rounded-xl shadow mt-8 p-6">

        <h2 className="text-xl font-bold text-slate-800 mb-5">
          Payment Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>
            <p className="text-gray-500">Customer Payment</p>
            <h3 className="text-2xl font-bold mt-2">
              ₹25,000
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Truck Owner Payment</p>
            <h3 className="text-2xl font-bold mt-2">
              ₹20,000
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Broker Commission</p>
            <h3 className="text-2xl font-bold text-green-600 mt-2">
              ₹5,000
            </h3>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
