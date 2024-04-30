import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./cmp/Home";
import About from "./cmp/About";
import "./server";
import VanList from "./cmp/Vans/VanList";
import VanDetail from "./cmp/Vans/VanDetail";
import Layout from "./cmp/Layout/Layout";
import Host from "./cmp/Host/Dashboard";
import Reviews from "./cmp/Host/Reviews";
import Income from "./cmp/Host/Income";
import HostLayout from "./cmp/Layout/HostLayout";
import Dashboard from "./cmp/Host/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VanList />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
