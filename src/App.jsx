import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/home";
import Premium from "./routes/premium";
import Search from "./routes/search";
import Support from "./routes/support";
import Download from "./routes/download";

import Signup from "./auth/signup";
import Login from "./auth/login";

import GuestLayout from "./layout/GuestLayout";
import Layout from "./layout/Layout";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {!token ? (
        <>
          {/* Guest user layout */}
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/search" element={<Search />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />
          <Route path="/premium" element={<Premium />} />

          {/* Login / Signup pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          {/* Logged in user layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />

          {/* Logged in user login/signup par na ja sake */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
