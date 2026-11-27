

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (formdata.name.trim().length < 3) {
      newErrors.name = "Enter a valid broker name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^[0-9]{10}$/.test(formdata.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (formdata.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const registerData = {
        ...formdata,
        name: formdata.name.trim(),
        email: formdata.email.trim()
      };

      localStorage.setItem(
        "brokerData",
        JSON.stringify(registerData)
      );

      alert("Account Created Successfully!");

      navigate("/");
    }
  }

  return (
    <div className="register-container">

      <style>{`
        * {
          box-sizing: border-box;
        }

        .register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 15px;
          background: linear-gradient(135deg, #0f172a, #312e81, #581c87);
          font-family: Arial, sans-serif;
        }

        .register-card {
          width: 100%;
          max-width: 460px;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
        }

        .register-card h1 {
          text-align: center;
          font-size: 32px;
          color: #312e81;
          margin-bottom: 10px;
        }

        .register-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 9px;
        }

        .form-group input {
          width: 100%;
          padding: 14px 15px;
          font-size: 15px;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 9px;
          outline: none;
        }

        .form-group input:focus {
          border-color: #6366f1;
        }

        .error-message {
          color: #dc2626;
          font-size: 13px;
          margin-top: 6px;
        }

        .register-button {
          width: 100%;
          padding: 15px;
          margin-top: 10px;
          background: linear-gradient(90deg, #4f46e5, #9333ea);
          color: white;
          font-size: 17px;
          font-weight: bold;
          border: none;
          border-radius: 9px;
          cursor: pointer;
        }
      `}</style>

      <div className="register-card">

        <h1>Create Broker Account</h1>

        <p className="register-subtitle">
          Enter your details to get started
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Broker Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter broker name"
              value={formdata.name}
              onChange={handlechange}
              required
            />
            <p className="error-message">{errors.name}</p>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formdata.email}
              onChange={handlechange}
              required
            />
            <p className="error-message">{errors.email}</p>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formdata.phone}
              onChange={handlechange}
              required
            />
            <p className="error-message">{errors.phone}</p>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create your password"
              value={formdata.password}
              onChange={handlechange}
              required
            />
            <p className="error-message">{errors.password}</p>
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;
