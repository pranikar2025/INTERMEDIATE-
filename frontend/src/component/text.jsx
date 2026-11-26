function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-60 min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">
        Menu
      </h2>
      <ul className="space-y-4">
        <li>Dashboard
        Trucks
        Bookings
        Payments
        Reports</li>
      </ul>

    </aside>
  );
}

export default Sidebar;