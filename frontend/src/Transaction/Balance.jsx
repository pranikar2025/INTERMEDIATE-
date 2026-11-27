
function Balance() {

  const customerPayment = 25000;
  const ownerPayment = 20000;
  const paidAmount = 15000;

  const pendingBalance = customerPayment - paidAmount;
  const ownerPending = ownerPayment - 10000;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Balance Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Customer Payment</p>
          <h2 className="text-2xl font-bold text-blue-600">
            ₹{customerPayment}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Amount Received</p>
          <h2 className="text-2xl font-bold text-green-600">
            ₹{paidAmount}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Customer Pending</p>
          <h2 className="text-2xl font-bold text-red-600">
            ₹{pendingBalance}
          </h2>
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h2 className="text-xl font-bold mb-4">
          Truck Owner Payment
        </h2>

        <p>Total Owner Payment: ₹{ownerPayment}</p>
        <p>Amount Paid: ₹10000</p>

        <h2 className="text-xl font-bold text-red-600 mt-3">
          Owner Pending: ₹{ownerPending}
        </h2>
      </div>

    </div>
  );
}

export default Balance;
