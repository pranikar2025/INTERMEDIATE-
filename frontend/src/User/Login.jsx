
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [logindata, setLogindata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const registerdata = JSON.parse(
      localStorage.getItem("brokerData") || "null"
    );

    console.log("Registered Data:", registerdata);
    console.log("Login Data:", logindata);

    if (!registerdata) {
      alert("Please create an account first! ");
      navigate("/Register");
      return;
    }

    const enteredName = logindata.username.trim().toLowerCase();
    const savedName = registerdata.name.trim().toLowerCase();

    if (
      enteredName === savedName &&
      logindata.password === registerdata.password
    ) {
      alert("Login Successful!");
      navigate("/Dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-center mt-2 mb-8">
          Login to your LaneLedger Dashboard
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block text-white mb-2">
            Broker Name
           </label>
          <input
            type="text"
            name="username"
            value={logindata.username}
            onChange={handlechange}
            placeholder="Enter your broker name"
            required
            className="w-full p-3 mb-5 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <label className="block text-white mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={logindata.password}
            onChange={handlechange}
            placeholder="Enter your password"
            required
            className="w-full p-3 mb-6 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg"
          >
            Login to Dashboard
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link to="/Register" className="text-blue-400">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
