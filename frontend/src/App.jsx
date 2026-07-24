import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/upload" element={<UploadResume />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
<Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );

}

export default App;