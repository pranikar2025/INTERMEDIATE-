{/*import './App.css';
function App() {
  return (
    <div><h1 className="text-3xl font-bold text-blue-700">
  Truck Broker Management System
</h1>
      <p>Welcome to Truck Broker Application</p>
      <h2>Broker Dashboard</h2><div>
        <h3>Total Truck</h3>
        <p>25</p></div>
    <div>
        <h3>Available Trucks</h3>
        <p>15</p></div>
    <div>
        <h3>Active Bookings</h3>
        <p>8</p></div>
     <div>
        <h3>Total Earnings</h3>
        <p>50000</p></div>
    </div>
  );
}

export default App; */}
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Text from "./pages/text";
import Tasks from "./pages/tasks";
import Login from "./pages/login";
import Taskcard from "./component/taskcard";

function App() {
  
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/text" element={<Text/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/Taskcard"element={<Taskcard/>}/>
      </Routes>
    </BrowserRouter>
   
   );
}
export default App; 