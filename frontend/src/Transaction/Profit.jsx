
function Profit() {

  const customerPayment = 25000;
  const ownerPayment = 20000;

  const commission = customerPayment - ownerPayment;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Profit Management
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p className="text-gray-500">
          Customer Payment
        </p>

        <h2 className="text-2xl font-bold text-blue-600">
          ₹{customerPayment}
        </h2>

        <p className="text-gray-500 mt-5">
          Truck Owner Payment
        </p>

        <h2 className="text-2xl font-bold text-orange-500">
          ₹{ownerPayment}
        </h2>

        <div className="border-t mt-5 pt-5">
          <p className="text-gray-500">
            Broker Commission / Profit
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            ₹{commission}
          </h2>
        </div>

      </div>

    </div>
  );
}

export default Profit;
