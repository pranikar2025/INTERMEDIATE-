
import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Trucks",
      value: "25",
      color: "bg-blue-600"
    },
    {
      title: "Available Trucks",
      value: "15",
      color: "bg-green-600"
    },
    {
      title: "Active Bookings",
      value: "8",
      color: "bg-orange-500"
    },
    {
      title: "Total Earnings",
      value: "₹50,000",
      color: "bg-purple-600"
    }
  ];

  const bookings = [
    {
      id: 1,
      customer: "Ramesh Textiles",
      from: "Namakkal",
      to: "Bangalore",
      truck: "TN 28 AB 1234",
      status: "In Transit"
    },
    {
      id: 2,
      customer: "Kumar Traders",
      from: "Coimbatore",
      to: "Chennai",
      truck: "TN 38 CD 5678",
      status: "Pending"
    },
    {
      id: 3,
      customer: "Sri Mills",
      from: "Salem",
      to: "Bangalore",
      truck: "TN 30 EF 9012",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          LaneLedger
        </h1>

        <div className="flex gap-6">
          <Link to="/Dashboard" className="text-blue-400">Dashboard</Link>
          <Link to="/Availability" className="hover:text-blue-400">Availability</Link>
          <Link to="/Profit" className="hover:text-blue-400">Profit</Link>
          <Link to="/Balance" className="hover:text-blue-400">Balance</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">Broker Dashboard</h2>
          <p className="text-slate-400 mt-2">
            Welcome back! Here is your transport business overview.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6"
            >
              <p className="text-slate-400">{item.title}</p>

              <h2 className="text-3xl font-bold mt-3">
                {item.value}
              </h2>

              <div className={`w-12 h-1 ${item.color} mt-4 rounded`}></div>
            </div>
          ))}

        </div>

        {/* Recent Bookings */}
        <div className="mt-10 bg-slate-900 border border-slate-700 rounded-xl p-6">

          <h2 className="text-xl font-bold mb-6">
            Recent Bookings
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="p-3">Customer</th>
                  <th className="p-3">From</th>
                  <th className="p-3">To</th>
                  <th className="p-3">Truck Number</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-slate-800">
                    <td className="p-3">{booking.customer}</td>
                    <td className="p-3">{booking.from}</td>
                    <td className="p-3">{booking.to}</td>
                    <td className="p-3">{booking.truck}</td>
                    <td className="p-3">
                      <span className="text-green-400">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
