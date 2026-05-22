import { Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Premium from "./routes/premium";
import Search from "./routes/search";
import Support from "./routes/support";
import Download from "./routes/download";
import PlaylistDetails from "./routes/PlaylistDetails";

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
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist/:slug" element={<PlaylistDetails />} />
          </Route>

          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />
          <Route path="/premium" element={<Premium />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist/:slug" element={<PlaylistDetails />} />
          </Route>

          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />
          <Route path="/premium" element={<Premium />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}
    </Routes>
  );
}

export default App;