import Home from "./routes/home";
import Premium from "./routes/premium";
import Search from "./routes/search"
import Support from "./routes/support";
import Download from "./routes/download";
import Signup from "./auth/signup";
import Login from "./auth/login";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GuestLayout" element={<GuestLayout />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/search" element={<Search />} />
        <Route path="/support" element={<Support />} />
        <Route path="/download" element={<Download />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
