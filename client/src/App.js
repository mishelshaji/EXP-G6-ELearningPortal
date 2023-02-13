import Home from "./pages/Home";
import Order from "./pages/student/Order";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student/order" element={<Order />} />
    </Routes>
  );
}

export default App;